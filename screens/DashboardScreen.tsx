
import React from 'react';

interface DashboardScreenProps {
  session: any;
  onLogout: () => void;
}

const DashboardScreen: React.FC<DashboardScreenProps> = ({ session, onLogout }) => {
  const userEmail = session?.user?.email || 'User';

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 animate-in fade-in duration-500">
      <div className="grid lg:grid-cols-4 gap-8">
        
        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-10">
          {/* Welcome Header */}
          <div className="bg-[#111] rounded-3xl p-10 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-3xl rounded-full"></div>
            <div>
              <h1 className="text-4xl font-bold mb-3">Hello, {userEmail.split('@')[0]}! 👋</h1>
              <p className="text-gray-400 max-w-sm">You're making excellent progress in the Clarity System. Keep up the momentum!</p>
              <button 
                onClick={onLogout}
                className="mt-6 text-xs text-red-500 hover:text-red-400 font-bold uppercase tracking-widest border border-red-500/20 px-4 py-2 rounded-lg transition-colors"
              >
                Sign Out
              </button>
            </div>
            <div className="bg-black/40 p-6 rounded-2xl border border-white/5 min-w-[240px]">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Overall Completion</span>
                <span className="text-xl font-bold text-cyan-500">65%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full mb-3 overflow-hidden">
                <div className="h-full bg-cyan-500 w-[65%] shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
              </div>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">12/18 Modules completed</p>
            </div>
          </div>

          {/* Learning Modules Grid */}
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span className="text-orange-500">🎓</span> Your Learning Modules
              </h2>
              <button className="text-orange-500 text-sm font-bold hover:underline">View all</button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { id: 1, title: 'Foundations of Clarity', desc: 'Master the core principles of the Clarity System and set your baseline for success.', time: '45m Left', img: 'https://picsum.photos/seed/mod1/400/240', status: 'completed' },
                { id: 2, title: 'Strategic Execution', desc: 'Learn how to translate high-level clarity into daily tactical output with precision.', time: '20m Left', img: 'https://picsum.photos/seed/mod2/400/240', status: 'unlocked' },
                { id: 3, title: 'Advanced Systems', desc: 'Connect the dots between different departments using complex systematic approaches.', time: '1h Remaining', img: 'https://picsum.photos/seed/mod3/400/240', status: 'active' },
                { id: 4, title: 'Leadership & Scale', desc: 'The final frontier: Scaling your personal clarity to lead entire organizations.', time: 'Locked', img: 'https://picsum.photos/seed/mod4/400/240', status: 'locked' },
              ].map((m, i) => (
                <div key={i} className="group bg-[#0f0f0f] rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/20 transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <img src={m.img} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${m.status === 'locked' ? 'grayscale opacity-30' : ''}`} alt={m.title} />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/20"></div>
                    {m.status === 'locked' ? (
                       <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px]">
                          <span className="text-3xl mb-2">🔒</span>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Unlock Soon</span>
                       </div>
                    ) : (
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-black/60 backdrop-blur-md text-[10px] font-bold px-3 py-1 rounded-full">{m.time}</span>
                      </div>
                    )}
                    {m.status === 'active' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center pl-1 cursor-pointer transform hover:scale-110 transition-all">
                            <svg className="w-5 h-5 text-black fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                         </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-[10px] font-bold uppercase tracking-widest text-orange-500/80">Module 0{m.id}</span>
                       <span className="text-xs opacity-30">•••</span>
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-orange-500 transition-colors">{m.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-6">
          {/* Notes Widget */}
          <div className="bg-[#111] rounded-3xl p-6 border border-white/5">
             <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold flex items-center gap-2 text-sm uppercase tracking-widest">
                   <span className="text-orange-500">📝</span> My Notes
                </h3>
                <span className="text-[9px] text-gray-500 font-bold uppercase">Auto-Saving</span>
             </div>
             <textarea 
               placeholder="Start typing your thoughts here..."
               className="w-full h-40 bg-transparent text-sm text-gray-400 leading-relaxed resize-none outline-none custom-scrollbar"
             ></textarea>
             <div className="grid grid-cols-2 gap-3 mt-6">
                <button className="bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-bold py-2 rounded-lg hover:bg-orange-500/20 transition-all uppercase tracking-widest">Export PDF</button>
                <button className="bg-white/5 text-gray-500 text-[10px] font-bold py-2 rounded-lg hover:bg-white/10 transition-all uppercase tracking-widest">Clear</button>
             </div>
          </div>

          {/* Help Widget */}
          <div className="bg-[#1a1512] rounded-3xl p-8 border border-orange-500/20 shadow-xl shadow-orange-500/5">
             <h4 className="font-bold mb-3">Need Help?</h4>
             <p className="text-xs text-gray-400 leading-relaxed mb-6">Our mentors are online and ready to guide you through the Clarity System.</p>
             <button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 rounded-xl transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 text-sm">
                <span>💬</span> Get Support
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
