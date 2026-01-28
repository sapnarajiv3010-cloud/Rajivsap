
import React from 'react';

interface LandingScreenProps {
  onEnroll: () => void;
}

const LandingScreen: React.FC<LandingScreenProps> = ({ onEnroll }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative px-4 py-20 text-center max-w-5xl mx-auto">
        <span className="inline-block px-3 py-1 bg-orange-500/10 text-orange-500 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
          Mastery Certification
        </span>
        <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6">
          Master the Art of Connection | <span className="text-orange-500 italic">संबंधों में स्पष्टता लाएं</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          A revolutionary framework to bring surgical clarity to your social life, professional influence, and personal relationships.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button 
            onClick={onEnroll}
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 px-10 rounded-lg transition-all text-lg shadow-lg shadow-orange-500/20"
          >
            Enroll in the Program →
          </button>
          <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-10 rounded-lg transition-all text-lg border border-white/10">
            Watch Trailer
          </button>
        </div>

        {/* Video Placeholder */}
        <div className="relative group max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-cyan-500 text-[10px] font-bold px-2 py-0.5 rounded-sm">New: 2024 Clarity Framework</span>
          </div>
          <img 
            src="https://picsum.photos/seed/course-trailer/1200/675" 
            className="w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity duration-500"
            alt="Course Trailer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-500 rounded-full flex items-center justify-center pl-1 cursor-pointer transform hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-black fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10">
            <div className="h-full bg-orange-500 w-[35%]"></div>
          </div>
        </div>
      </section>

      {/* Feature Badges */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
        {[
          { icon: '📹', title: '4K Video', desc: 'High-definition content' },
          { icon: '♾️', title: 'Lifetime Access', desc: 'Learn at your own pace' },
          { icon: '📥', title: 'Worksheets', desc: '25+ Downloadable assets' },
          { icon: '🏆', title: 'Certificate', desc: 'Professional accreditation' },
        ].map((feat, i) => (
          <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-xl text-center hover:bg-white/[0.07] transition-colors">
            <div className="text-3xl mb-4 text-orange-500">{feat.icon}</div>
            <h3 className="font-bold mb-1">{feat.title}</h3>
            <p className="text-xs text-gray-500 uppercase tracking-wider">{feat.desc}</p>
          </div>
        ))}
      </section>

      {/* Hidden Barriers */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">The Hidden Barriers</h2>
          <p className="text-gray-500">Most people fail at interactions because of these 3 invisible walls.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: '⚠️', title: 'Social Anxiety', desc: 'That choking feeling in crowded rooms or before important meetings. We dismantle the root fear.' },
            { icon: '💬', title: 'Miscommunication', desc: 'The gap between what you say and what they hear. Master the bridge of clarity.' },
            { icon: '🛡️', title: 'Lack of Confidence', desc: 'Being walked over or feeling invisible. Build an unshakeable presence that commands respect.' },
          ].map((item, i) => (
            <div key={i} className="glass p-8 rounded-xl relative overflow-hidden group">
              <div className="text-orange-500 text-2xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-orange-500/5 rounded-tl-full group-hover:bg-orange-500/10 transition-colors"></div>
            </div>
          ))}
        </div>
      </section>

      {/* The Bridge to Clarity (Timeline) */}
      <section className="max-w-7xl mx-auto px-4 py-32 text-center">
        <h2 className="text-3xl font-bold mb-2">The Bridge to Clarity</h2>
        <span className="text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase">Transformation Journey</span>
        
        <div className="mt-20 relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 px-10">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 hidden md:block"></div>
          
          {[
            { label: 'Confusion', icon: '?', color: 'text-gray-500' },
            { label: 'HIS System', icon: '⚛️', color: 'text-cyan-400', active: true, sub: 'The Blueprint' },
            { label: 'Total Clarity', icon: '✨', color: 'text-orange-500' },
          ].map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center">
              <div className={`w-20 h-20 rounded-full border border-white/10 flex items-center justify-center text-3xl mb-6 bg-[#0c0c0c] ${step.active ? 'ring-4 ring-cyan-500/20 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.3)]' : ''}`}>
                <span className={step.color}>{step.icon}</span>
              </div>
              <h3 className={`font-bold ${step.active ? 'text-white' : 'text-gray-500'}`}>{step.label}</h3>
              {step.sub && <p className="text-xs text-cyan-500/70 mt-1 uppercase tracking-wider">{step.sub}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Course Curriculum & Right Sidebar */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold">Course Curriculum</h2>
            <p className="text-sm text-gray-500">4 Modules • 24 Lessons • 12h Total</p>
          </div>
          <div className="space-y-4">
            {[
              { mod: 1, title: 'Foundational Clarity', desc: 'Establish core principles of interaction and cognitive load management.' },
              { mod: 2, title: 'Non-Verbal Synchronization', desc: 'Aligning physical cues with verbal intent for maximum impact.' },
              { mod: 3, title: 'Conflict Resolution Architecture', desc: 'Strategic frameworks for de-escalation and finding mutual ground.' },
              { mod: 4, title: 'Sustained Behavioral Change', desc: 'Integrating the clarity system into your daily workflow.' },
            ].map((m, i) => (
              <div key={i} className={`p-6 rounded-xl border border-white/5 bg-white/5 flex items-center justify-between group cursor-pointer hover:border-orange-500/30 transition-all ${i === 1 ? 'ring-1 ring-orange-500/50 bg-orange-500/[0.02]' : ''}`}>
                <div className="flex gap-6 items-center">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl ${i === 1 ? 'bg-orange-500 text-black' : 'bg-orange-500/10 text-orange-500'}`}>
                    {i === 0 ? '💎' : i === 1 ? '🎯' : i === 2 ? '🤝' : '📈'}
                  </div>
                  <div>
                    <h4 className="font-bold">Module {m.mod}: {m.title}</h4>
                    <p className="text-sm text-gray-400 mt-1">{m.desc}</p>
                  </div>
                </div>
                <div className="text-gray-500 group-hover:text-white transition-colors">→</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#151515] rounded-2xl p-8 border border-white/10 self-start">
          <h3 className="text-xl font-bold mb-8">Is this program right for you?</h3>
          
          <div className="mb-8">
            <span className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase mb-4 block">Ideal For</span>
            <ul className="space-y-4">
              {[
                'Team Leaders seeking to reduce operational friction and miscommunication.',
                'UX Designers and Product Managers presenting complex systems.',
                'Project Managers managing remote, asynchronous teams.'
              ].map((text, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-300">
                  <span className="text-cyan-500">✓</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <span className="text-[10px] font-bold tracking-widest text-red-400 uppercase mb-4 block">Not For</span>
            <ul className="space-y-4">
              {[
                'Individuals seeking "get rich quick" hacks or manipulation tactics.',
                'Purely technical training without a human-interaction component.'
              ].map((text, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-500">
                  <span className="text-red-500/50">✕</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <button 
            onClick={onEnroll}
            className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20"
          >
            Secure Your Seat
          </button>
          <p className="text-center text-[10px] text-gray-500 mt-4 uppercase tracking-widest">30-Day Money Back Guarantee</p>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-white/5 py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Trusted by Interaction Experts</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Discover how the Human Interaction Clarity System builds authority and handles objections with evidence-backed insights.</p>
            <div className="flex justify-center gap-4 mt-8">
               <button className="bg-orange-500 text-black px-6 py-2 rounded font-bold text-sm">See Proof</button>
               <button className="bg-white/5 border border-white/10 px-6 py-2 rounded font-bold text-sm">How it Works</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            {[
              { name: 'Saran Chen', role: 'CONFLICT RESOLUTION SPECIALIST', content: 'The data-driven approach to human interaction provides insights I never thought possible. It completely removed the guesswork.' },
              { name: 'Alex Rivera', role: 'PRODUCT LEAD', content: 'Unmatched clarity. Finally a toolkit that understands the nuance of complex communication.' },
              { name: 'Elara Vance', role: 'UX RESEARCHER', content: 'The insights provided on non-verbal cues changed how I conduct user interviews.' },
              { name: 'Marcus Thorne', role: 'STRATEGIC NEGOTIATOR', content: 'We integrated this into our sales pipeline and saw an immediate 22% increase in conversion rates.' },
            ].map((t, i) => (
              <div key={i} className="bg-black p-6 rounded-xl border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <img src={`https://picsum.photos/seed/${i}/40/40`} className="w-10 h-10 rounded-full" alt={t.name} />
                  <div>
                    <h5 className="font-bold text-sm">{t.name}</h5>
                    <p className="text-[9px] text-orange-500 font-bold tracking-widest">{t.role}</p>
                  </div>
                </div>
                <div className="text-orange-500 text-xs mb-3">★★★★★</div>
                <p className="text-gray-400 text-xs leading-relaxed italic">"{t.content}"</p>
              </div>
            ))}
          </div>

          <div className="text-center">
             <h3 className="text-2xl font-bold mb-2">Clarity Analysis in Action</h3>
             <p className="text-gray-500 text-sm mb-12">Visual proof of how our system identifies emotional peaks, conversation flow, and decision-making triggers.</p>
             <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: 'SENTIMENT VELOCITY', color: 'from-cyan-500/20' },
                  { title: 'ENGAGEMENT HEATMAP', color: 'from-orange-500/20', active: true },
                  { title: 'NUANCE DETECTION', color: 'from-purple-500/20' },
                ].map((p, i) => (
                  <div key={i} className={`h-48 rounded-2xl bg-gradient-to-t ${p.color} to-transparent border border-white/10 flex flex-col justify-end p-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      {i === 1 && <div className="w-32 h-32 bg-orange-500/40 rounded-full blur-3xl"></div>}
                      {i === 0 && <div className="w-full h-px bg-cyan-500/40 transform rotate-12"></div>}
                    </div>
                    <h4 className="font-bold text-xs tracking-widest relative z-10">{p.title}</h4>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Pricing Section (Limited Offer) */}
      <section className="max-w-4xl mx-auto px-4 py-32">
        <div className="relative border-2 border-orange-500/30 rounded-3xl p-1 bg-gradient-to-b from-orange-500/10 to-transparent">
          <div className="bg-[#0c0c0c] rounded-[calc(1.5rem-4px)] p-12 text-center">
            <span className="inline-block px-3 py-1 bg-orange-500 text-black rounded-full text-[10px] font-bold tracking-widest uppercase mb-8 -mt-16 mx-auto border-4 border-[#0c0c0c]">
              Limited Time Offer
            </span>
            <h2 className="text-4xl font-bold mb-4">Invest in Yourself Today</h2>
            <div className="flex items-center justify-center gap-4 mb-8">
               <span className="text-2xl text-gray-500 line-through">₹4,999</span>
               <span className="text-6xl font-black text-orange-500">₹999</span>
            </div>
            <p className="text-gray-400 mb-10 max-w-md mx-auto">Get lifetime access to the complete L3-module system, private community, and monthly live coaching.</p>
            
            <div className="max-w-xs mx-auto text-left space-y-4 mb-12">
               {['12+ Hours of HD Content', 'Downloadable Workbooks & Cheat Sheets', 'Access to VIP WhatsApp Group'].map((check, i) => (
                 <div key={i} className="flex items-center gap-3">
                   <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-[10px] text-black font-bold">✓</div>
                   <span className="text-sm font-medium">{check}</span>
                 </div>
               ))}
            </div>

            <button 
              onClick={onEnroll}
              className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-5 rounded-2xl transition-all text-xl shadow-2xl shadow-orange-500/40"
            >
              Get Instant Access Now
            </button>
            <p className="text-gray-600 text-[10px] mt-6 italic tracking-wider">30-Day No Money Back Guarantee - Pay Up If You Fail To Action</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 py-20 pb-40">
        <h2 className="text-3xl font-bold text-center mb-4">The Clarity FAQ</h2>
        <p className="text-center text-gray-500 mb-16">Everything you need to know about the system.</p>
        <div className="space-y-4">
          {[
            { q: 'How does the system detect subtle human nuances?', a: 'Our proprietary engine uses a combination of micro-expression analysis and acoustic prosody tracking. It measures over 40 distinct vocal parameters to identify intent that words alone can\'t convey.', open: true },
            { q: 'Is my interaction data kept private and encrypted?' },
            { q: 'Can this be used for real-time live coaching?' },
            { q: 'What is the typical ROI for sales teams?' },
            { q: 'Does it support multiple languages?' },
          ].map((faq, i) => (
            <div key={i} className={`p-6 rounded-xl border border-white/5 transition-all ${faq.open ? 'bg-white/5 border-orange-500/30 ring-1 ring-orange-500/20' : 'bg-black/40'}`}>
              <div className="flex justify-between items-center cursor-pointer">
                <h4 className={`font-bold text-sm ${faq.open ? 'text-orange-500' : 'text-gray-300'}`}>{faq.q}</h4>
                <span className="text-gray-500">{faq.open ? '−' : '+'}</span>
              </div>
              {faq.open && <p className="mt-4 text-xs text-gray-400 leading-relaxed">{faq.a}</p>}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <p className="text-gray-400 mb-6">Still have questions?</p>
           <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-10 rounded-full transition-all text-sm">
             Chat with an Expert
           </button>
        </div>
      </section>
    </div>
  );
};

export default LandingScreen;
