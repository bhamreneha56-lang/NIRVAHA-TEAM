import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Landing() {
  const { dispatch } = useContext(AppContext);
  
  const roles = [
    { role:"citizen", t:"Citizen", d:"Report local problems and track their resolution status transparently.", icon:"👨‍👩‍👧‍👦" },
    { role:"university", t:"University", d:"Propose innovative solutions to reported civic and technical challenges.", icon:"🎓" },
    { role:"industry", t:"Industry / CSR", d:"Fund impactful projects and drive measurable corporate social responsibility.", icon:"🏭" },
    { role:"government", t:"Government", d:"Track progress, allocate resources, and oversee state-wide initiatives.", icon:"🏛️" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-orange-200">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-slate-100 bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg shadow-sm grid place-items-center font-bold text-white relative overflow-hidden">
             <div className="absolute top-0 w-full h-1/3 bg-[#FF9933]"></div>
             <div className="absolute top-1/3 w-full h-1/3 bg-white"></div>
             <div className="absolute bottom-0 w-full h-1/3 bg-[#138808]"></div>
             <span className="relative z-10 text-slate-900 text-xs drop-shadow-md">N</span>
          </div>
          <div>
            <div className="font-extrabold text-slate-900 text-sm tracking-tight leading-none">NIRVAHA</div>
            <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">Govt. of Jharkhand</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 font-semibold text-sm text-slate-600">
          <a href="#" className="text-green-800 border-b-2 border-green-700 pb-1">Portal</a>
          <a href="#" className="hover:text-slate-900 transition">Reports</a>
          <a href="#" className="hover:text-slate-900 transition">Help</a>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
            <input type="text" placeholder="Search..." className="pl-9 pr-4 py-1.5 bg-slate-100 border border-slate-200 rounded-lg text-xs font-semibold focus:ring-2 focus:ring-green-500/20 w-48" />
          </div>
          <button className="text-[10px] font-bold border border-slate-200 bg-white px-3 py-1.5 rounded-md hover:bg-slate-50 shadow-sm text-slate-600 uppercase tracking-wide">Language: EN/HI</button>
          <button className="text-[10px] font-bold bg-orange-500 text-white px-4 py-1.5 rounded-md shadow-sm hover:bg-orange-600 uppercase tracking-wide">Role Switcher</button>
          <div className="w-7 h-7 rounded-full bg-slate-200 border border-slate-300"></div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="relative pt-24 pb-16 px-4 text-center overflow-hidden border-b border-slate-100">
        {/* Network / Map faint background */}
        <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '40px' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-orange-50/50 via-white to-green-50/50 rounded-full blur-[80px] pointer-events-none -z-10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#004225] mb-6 leading-tight drop-shadow-sm tracking-tight">
            Collaborative Problem Solving for Jharkhand
          </h1>
          
          <p className="text-sm md:text-base text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Connecting citizens, universities, and industries to track, fund, and solve real-world challenges across the state.
          </p>

          <div className="flex items-center justify-center gap-4">
            <button className="bg-[#004225] hover:bg-black text-white px-8 py-2.5 rounded-lg font-bold shadow-lg transition-transform hover:-translate-y-0.5 text-sm">Get Started</button>
            <button className="bg-white border border-[#004225]/20 hover:border-[#004225]/50 text-[#004225] px-8 py-2.5 rounded-lg font-bold shadow-sm transition-all text-sm">Learn More</button>
          </div>
        </div>
      </div>

      {/* STATS RIBBON */}
      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-3 divide-x divide-slate-200 text-center">
           <div>
             <div className="text-2xl font-black text-[#004225] mb-1">12,450</div>
             <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Problems Reported</div>
           </div>
           <div>
             <div className="text-2xl font-black text-[#004225] mb-1">420</div>
             <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Projects Completed</div>
           </div>
           <div>
             <div className="text-2xl font-black text-[#004225] mb-1">24</div>
             <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Districts Covered</div>
           </div>
        </div>
      </div>

      {/* ROLES SECTION */}
      <div className="py-20 px-4 bg-white relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-xl font-extrabold text-slate-800">Enter the Portal</h2>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map(r => (
            <button 
              key={r.role} 
              onClick={() => dispatch({ type:"SET_ROLE", role:r.role })}
              className="text-left bg-white rounded-xl border border-slate-200 p-6 hover:border-[#004225] transition-all shadow-sm hover:shadow-xl relative overflow-hidden group"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">{r.icon}</div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">{r.t}</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6 h-12">{r.d}</p>
              <div className="text-[10px] font-bold text-slate-400 group-hover:text-[#004225] flex items-center transition-colors uppercase tracking-widest">
                Enter Portal <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* MAP / DENSITY SECTION */}
      <div className="bg-slate-50 border-t border-slate-100 py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 mb-4">Statewide Challenge Density</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-sm">
              Monitor real-time issue reporting and resolution progress across major districts including Ranchi, Jamshedpur, and Dhanbad.
            </p>
            <button className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-5 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-colors border border-slate-300 shadow-sm">
              <span>📖</span> View Full Map
            </button>
          </div>
          <div className="bg-white p-3 rounded-2xl shadow-lg border border-slate-200">
            {/* Fake Map UI block imitating the image */}
            <div className="bg-slate-50 rounded-xl border border-slate-100 h-64 flex flex-col p-4 relative overflow-hidden">
               <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'radial-gradient(circle at center, black 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
               
               <div className="text-center relative z-10 mb-4">
                 <h4 className="text-sm font-bold text-slate-800">Jharkhand Activity Overview: Real-time Insights</h4>
                 <p className="text-[9px] text-slate-400 mt-1">Live density tracking across districts based on severity</p>
               </div>

               <div className="flex-1 relative z-10 flex items-center justify-center">
                  <div className="w-full max-w-[250px] aspect-video bg-slate-200/50 rounded-lg border border-slate-200 relative">
                     {/* Mock Heatmap dots */}
                     <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-400 rounded-full blur-[2px] animate-pulse"></div>
                     <div className="absolute top-1/2 left-2/3 w-6 h-6 bg-amber-400 rounded-full blur-[3px] animate-pulse delay-75"></div>
                     <div className="absolute bottom-1/4 left-1/2 w-8 h-8 bg-green-400 rounded-full blur-[4px] animate-pulse delay-150"></div>
                     <div className="absolute inset-0 flex items-center justify-center text-slate-300 text-6xl opacity-50">🗺️</div>
                  </div>
               </div>

               <div className="absolute bottom-4 left-4 bg-white border border-slate-200 rounded-lg p-2 shadow-sm text-[9px] font-bold text-slate-600 space-y-1 z-10">
                 <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500"></div> High Density</div>
                 <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-amber-500"></div> Medium</div>
                 <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div> Low</div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-8 px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-slate-800 text-sm tracking-tight">NIRVAHA</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-800 transition-colors">Accessibility Statement</a>
            <a href="#" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-800 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-800 transition-colors">Contact Us</a>
          </div>
          <div>© 2026 Govt. of Jharkhand. All Rights Reserved.</div>
        </div>
      </footer>
      
      {/* Global Chatbot floating on Landing Page too */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-orange-500 rounded-full shadow-2xl grid place-items-center text-white text-2xl hover:scale-110 transition-transform">
          💬
        </button>
      </div>
    </div>
  );
}
