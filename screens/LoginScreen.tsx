
import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isSignUp) {
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
        });
        if (signUpError) throw signUpError;
        alert('Check your email for the confirmation link!');
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (signInError) throw signInError;
        onLogin();
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during authentication.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 animate-in zoom-in-95 duration-500">
      <div className="flex flex-col items-center gap-2 mb-10 text-center">
        <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center font-bold italic text-black text-xl mb-4 shadow-xl shadow-orange-500/20">C</div>
        <h1 className="text-3xl font-bold">{isSignUp ? 'Join the System' : 'System Login'}</h1>
        <p className="text-gray-500 text-sm">
          {isSignUp 
            ? 'Create your account to start your clarity journey.' 
            : 'Welcome back. Please authorize to continue.'}
        </p>
      </div>

      <div className="w-full max-w-md bg-[#1a1a15] rounded-3xl p-8 border border-orange-500/20 shadow-2xl shadow-orange-500/5 relative">
        {error && (
          <div className="absolute -top-12 left-0 right-0 bg-red-500/10 border border-red-500/20 text-red-500 text-xs py-3 px-4 rounded-xl text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block">Email Address</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30">✉</span>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full bg-black/40 border border-white/5 rounded-xl py-4 pl-12 pr-4 text-sm focus:border-orange-500 transition-colors outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block">Password</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30">🔒</span>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-black/40 border border-white/5 rounded-xl py-4 pl-12 pr-4 text-sm focus:border-orange-500 transition-colors outline-none"
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                {isSignUp ? 'Create Account' : 'Enter System'} <span className="text-xl">→</span>
              </>
            )}
          </button>
          
          <div className="text-center pt-4">
             <button 
              type="button" 
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-xs text-cyan-500 hover:underline"
            >
               {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
             </button>
          </div>
        </form>
      </div>
      
      <p className="mt-12 text-[10px] text-gray-600 uppercase tracking-widest flex items-center gap-2">
        <span className="text-orange-500">🛡️</span> SECURE SUPABASE AUTHENTICATION
      </p>
    </div>
  );
};

export default LoginScreen;
