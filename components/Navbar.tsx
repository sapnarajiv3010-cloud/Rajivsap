
import React from 'react';
import { Screen } from '../types';

interface NavbarProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  isLoggedIn: boolean;
  userEmail?: string;
  onLogout?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentScreen, onNavigate, isLoggedIn, userEmail, onLogout }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0c0c0c]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => onNavigate(Screen.Landing)}
        >
          <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center font-bold italic text-black">C</div>
          <span className="font-bold text-lg hidden sm:block">Human Interaction Clarity System</span>
          <span className="font-bold text-lg sm:hidden">Clarity</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => onNavigate(Screen.Landing)} className="text-sm font-medium hover:text-orange-500 transition-colors">Overview</button>
          <button className="text-sm font-medium hover:text-orange-500 transition-colors">Curriculum</button>
          <button className="text-sm font-medium hover:text-orange-500 transition-colors">Pricing</button>
          <button className="text-sm font-medium hover:text-orange-500 transition-colors">FAQ</button>
        </div>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <div 
                className="flex items-center gap-3 cursor-pointer group"
                onClick={() => onNavigate(Screen.Dashboard)}
              >
                <div className="text-right hidden sm:block">
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Active Member</p>
                  <p className="text-xs font-medium text-white group-hover:text-orange-500 transition-colors">{userEmail}</p>
                </div>
                <img 
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${userEmail}`} 
                  className="w-8 h-8 rounded-full border border-orange-500/50"
                  alt="Profile"
                />
              </div>
              <button 
                onClick={onLogout}
                className="text-xs text-gray-500 hover:text-white transition-colors border-l border-white/10 pl-4"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <button 
                onClick={() => onNavigate(Screen.Login)}
                className="text-sm font-medium hover:text-orange-500 transition-colors"
              >
                Login
              </button>
              <button 
                onClick={() => onNavigate(Screen.Checkout)}
                className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 px-5 rounded-md transition-all text-sm shadow-lg shadow-orange-500/20"
              >
                Enroll Now
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
