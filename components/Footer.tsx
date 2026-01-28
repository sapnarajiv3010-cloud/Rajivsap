
import React from 'react';
import { Screen } from '../types';

interface FooterProps {
  onNavigate: (screen: Screen) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#080808] border-t border-white/5 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2 opacity-50">
          <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center text-black text-xs font-bold italic">C</div>
          <span className="text-sm">© 2024 Clarity Systems. All rights reserved.</span>
        </div>
        
        <div className="flex gap-8 text-sm text-gray-400">
          <button className="hover:text-white transition-colors">Privacy Policy</button>
          <button className="hover:text-white transition-colors">Terms of Service</button>
          <button className="hover:text-white transition-colors">Contact</button>
        </div>

        <div className="flex gap-4">
          {['share', 'mail', 'help'].map((icon) => (
            <div key={icon} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center cursor-pointer hover:border-orange-500 transition-colors">
              <span className="text-xs opacity-60 capitalize">{icon[0]}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
