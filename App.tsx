
import React, { useState, useEffect } from 'react';
import { Screen } from './types';
import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import DashboardScreen from './screens/DashboardScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { supabase } from './lib/supabase';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Landing);
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session with error handling
    supabase.auth.getSession()
      .then(({ data: { session } }) => {
        setSession(session);
        if (session) {
          setCurrentScreen(Screen.Dashboard);
        }
      })
      .catch((error) => {
        console.warn('Supabase session fetch failed. Check your API keys.', error);
      })
      .finally(() => {
        setLoading(false);
      });

    // Listen for changes on auth state
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        setCurrentScreen(Screen.Dashboard);
      } else {
        setCurrentScreen(Screen.Landing);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const navigateTo = (screen: Screen) => {
    // Prevent navigating to dashboard if not logged in
    if (screen === Screen.Dashboard && !session) {
      setCurrentScreen(Screen.Login);
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentScreen(screen);
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
      // Forced fallback for UI
      setSession(null);
      setCurrentScreen(Screen.Landing);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0c0c0c] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-[10px] text-orange-500 font-bold uppercase tracking-[0.2em]">Initializing System...</p>
        </div>
      </div>
    );
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.Landing:
        return <LandingScreen onEnroll={() => navigateTo(Screen.Checkout)} />;
      case Screen.Login:
        return <LoginScreen onLogin={() => navigateTo(Screen.Dashboard)} />;
      case Screen.Checkout:
        return <CheckoutScreen onComplete={() => navigateTo(Screen.Login)} />;
      case Screen.Dashboard:
        return <DashboardScreen session={session} onLogout={handleLogout} />;
      default:
        return <LandingScreen onEnroll={() => navigateTo(Screen.Checkout)} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] flex flex-col">
      <Navbar 
        currentScreen={currentScreen} 
        onNavigate={navigateTo} 
        isLoggedIn={!!session}
        userEmail={session?.user?.email}
        onLogout={handleLogout}
      />
      
      <main className="flex-grow pt-16">
        {renderScreen()}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
