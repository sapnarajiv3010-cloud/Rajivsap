
import React from 'react';

interface CheckoutScreenProps {
  onComplete: () => void;
}

const CheckoutScreen: React.FC<CheckoutScreenProps> = ({ onComplete }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 animate-in slide-in-from-bottom-8 duration-500">
      <div className="flex items-center gap-2 justify-center mb-16">
        <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-black">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>
        </div>
        <h1 className="text-2xl font-bold">Secure Checkout</h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Order Summary Side */}
        <div className="space-y-8">
          <div className="bg-[#121826] rounded-2xl p-8 border border-white/5">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-6">Your Selection</span>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-xl flex items-center justify-center border border-cyan-500/30">
                 <span className="text-2xl">⚛️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Human Interaction Clarity System</h3>
                <span className="inline-block bg-cyan-500/10 text-cyan-500 text-[10px] font-black px-2 py-0.5 rounded mt-1">LIFETIME ACCESS</span>
              </div>
            </div>
            
            <div className="space-y-4 pt-6 border-t border-white/5">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Course Price</span>
                <span className="font-bold">₹999</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Tax (GST)</span>
                <span className="font-bold">₹0</span>
              </div>
              <div className="flex justify-between text-xl font-bold pt-4 text-cyan-500">
                <span>Total Amount</span>
                <span>₹999</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
             <span className="text-orange-500 text-sm">🛡️</span>
             <p className="text-sm font-bold">Join 5,000+ Students</p>
          </div>
          <p className="text-sm text-gray-500 italic leading-relaxed">
            "The best investment I've made for my professional communication skills. Simple, clear, and actionable."
          </p>
        </div>

        {/* Payment Form Side */}
        <div className="bg-[#1a1a1a] rounded-3xl p-10 border border-white/10 shadow-xl">
           <h2 className="text-xl font-bold mb-8">Payment Details</h2>
           <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onComplete(); }}>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30 text-xs">👤</span>
                  <input type="text" placeholder="John Doe" className="w-full bg-[#222] border border-white/5 rounded-xl py-4 px-12 text-sm focus:border-orange-500 outline-none" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30 text-xs">✉</span>
                  <input type="email" placeholder="john@example.com" className="w-full bg-[#222] border border-white/5 rounded-xl py-4 px-12 text-sm focus:border-orange-500 outline-none" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Card Information</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30 text-xs">💳</span>
                  <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-[#222] border border-white/5 rounded-xl py-4 px-12 text-sm focus:border-orange-500 outline-none" required />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Expiry Date</label>
                    <input type="text" placeholder="MM / YY" className="w-full bg-[#222] border border-white/5 rounded-xl py-4 px-6 text-sm focus:border-orange-500 outline-none" required />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">CVV</label>
                    <input type="text" placeholder="***" className="w-full bg-[#222] border border-white/5 rounded-xl py-4 px-6 text-sm focus:border-orange-500 outline-none" required />
                 </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-5 rounded-xl transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center gap-3 mt-4"
              >
                <span>🔒</span> Complete Payment
              </button>

              <div className="flex justify-center gap-4 opacity-30 grayscale mt-8">
                 <div className="w-8 h-5 bg-white rounded"></div>
                 <div className="w-8 h-5 bg-white rounded"></div>
                 <div className="w-8 h-5 bg-white rounded"></div>
              </div>
           </form>
        </div>
      </div>
      
      <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-gray-500 font-bold uppercase tracking-widest">
         <div className="flex gap-8">
            <span className="flex items-center gap-2"><span className="text-orange-500">🛡️</span> 100% Secure Transaction</span>
            <span className="flex items-center gap-2"><span className="text-orange-500">🛡️</span> 256-bit SSL Encrypted</span>
         </div>
         <div className="text-right">
            <p className="opacity-50 mb-2">Need Help?</p>
            <p className="text-white">support@claritysystem.com</p>
         </div>
      </div>
    </div>
  );
};

export default CheckoutScreen;
