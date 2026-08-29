import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Landing() {
  const { dispatch } = useContext(AppContext);
  
  const roles = [
    { role:"citizen", t:"Citizen", d:"Report problems via voice, track status, earn Karma points.", icon:"👨‍👩‍👧‍👦" },
    { role:"university", t:"University", d:"Review challenges, form AI-matched teams, submit proposals.", icon:"🎓" },
    { role:"industry", t:"Industry & CSR", d:"Browse fundable projects, mentor teams, commit funding.", icon:"🏭" },
    { role:"government", t:"Government", d:"State-wide analytics, challenge verification, pipeline oversight.", icon:"🏛️" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col relative overflow-hidden">
      {/* 3D Faint Tiranga Mesh Background behind everything */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-orange-300/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[50%] bg-green-400/15 rounded-full blur-[100px] pointer-events-none z-0"></div>
      
      {/* Top Navigation Bar */}
      <nav className="relative z-50 w-full bg-white/40 backdrop-blur-md border-b border-white/50 px-8 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg shadow-sm grid place-items-center font-extrabold text-sm relative overflow-hidden border border-slate-200">
             <div className="absolute top-0 w-full h-1/3 bg-[#E37000]"></div>
             <div className="absolute top-1/3 w-full h-1/3 bg-white"></div>
             <div className="absolute bottom-0 w-full h-1/3 bg-[#0E6B06]"></div>
             <span className="relative z-10 text-slate-900 drop-shadow-[0_1px_1px_rgba(255,255,255,1)]">N</span>
          </div>
          <span className="font-extrabold text-slate-900 tracking-tight text-lg">NIRVAHA</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
          <a href="#" className="text-orange-600">Home</a>
          <a href="#" className="hover:text-orange-500 transition">Features</a>
          <a href="#" className="hover:text-orange-500 transition">Modules</a>
          <a href="#" className="hover:text-orange-500 transition">Impact</a>
          <a href="#" className="hover:text-orange-500 transition">Partners</a>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="text-sm font-bold text-slate-600 hover:text-slate-900">EN / HI</button>
          <button onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })} className="px-5 py-2 bg-slate-900 hover:bg-black text-white rounded-lg text-sm font-bold shadow-md transition-all">
            Access Portals
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12 w-full relative z-10 flex-1 flex flex-col">
        
        {/* Header Section */}
        <div className="text-center mb-16 mt-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 leading-tight drop-shadow-sm">
            NIRVAHA <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 font-extrabold mt-3 inline-block text-3xl md:text-4xl tracking-tight">
              Turning Voices into Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            A civic-tech ecosystem uniting Jharkhand's citizens, universities, and industries. 
            Report community issues, match with experts, and deploy sustainable solutions.
          </p>
        </div>

        {/* Role Selection */}
        <div className="mt-auto pb-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Select Your Portal</h2>
            <p className="text-gray-500 mt-2">Experience the platform from 4 distinct stakeholder perspectives.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map(r => (
              <button 
                key={r.role} 
                onClick={() => dispatch({ type:"SET_ROLE", role:r.role })}
                className="group text-left bg-white rounded-2xl border border-gray-200 p-6 hover:border-amber-400 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-50 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                
                <div className="text-4xl mb-5 relative z-10">{r.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 relative z-10">{r.t}</h3>
                <p className="text-sm text-gray-500 leading-snug relative z-10">{r.d}</p>
                
                <div className="mt-6 flex items-center text-amber-600 text-sm font-bold relative z-10">
                  Enter Portal <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Global Chatbot floating on Landing Page too */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-amber-500 rounded-full shadow-2xl grid place-items-center text-white text-2xl hover:scale-110 transition-transform">
          💬
        </button>
      </div>
    </div>
  );
}
