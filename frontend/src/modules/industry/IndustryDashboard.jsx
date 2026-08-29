import React, { useState } from 'react';
import SidebarLayout from '../shared/SidebarLayout';

export default function IndustryDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    if (activeTab === 'challenges') {
      return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 min-h-[500px]">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Investment & Mentorship Marketplace</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 border border-slate-200 rounded-xl hover:border-orange-400 cursor-pointer transition">
               <div className="flex justify-between items-start mb-4">
                 <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md font-bold text-xs uppercase">Agriculture • BIT Mesra Team</span>
                 <span className="text-xs font-bold text-slate-400">Ask: ₹5L</span>
               </div>
               <h3 className="font-bold text-lg mb-2">Smart Irrigation System Pilot</h3>
               <p className="text-slate-500 text-sm mb-4">University prototype ready for field testing. Seeking CSR funding for pilot deployment across 10 villages.</p>
               <div className="flex gap-2">
                 <button className="flex-1 py-2 bg-orange-500 text-white rounded-lg font-bold text-sm hover:bg-orange-600 transition">Fund Project</button>
                 <button className="flex-1 py-2 bg-slate-900 text-white rounded-lg font-bold text-sm hover:bg-black transition">Offer Mentorship</button>
               </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === 'proposals') {
      return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 min-h-[500px]">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Sponsored Projects Portfolio</h2>
          <div className="p-10 text-center border-2 border-dashed border-slate-200 rounded-xl">
             <div className="text-4xl mb-4">📈</div>
             <h3 className="font-bold text-lg text-slate-800">No Active Investments</h3>
             <p className="text-sm text-slate-500 max-w-sm mx-auto">You are not currently sponsoring or mentoring any active university projects.</p>
          </div>
        </div>
      );
    }

    if (activeTab === 'analytics') {
      return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 min-h-[500px]">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">CSR & ESG Impact Reporting</h2>
          <div className="grid grid-cols-3 gap-6">
             <div className="p-6 bg-orange-50 rounded-xl border border-orange-100">
               <div className="text-4xl font-black text-orange-800">0</div>
               <div className="text-sm font-bold text-orange-600 mt-2">SDG Goals Met</div>
             </div>
             <div className="p-6 bg-orange-50 rounded-xl border border-orange-100">
               <div className="text-4xl font-black text-orange-800">0</div>
               <div className="text-sm font-bold text-orange-600 mt-2">Tech Transfers</div>
             </div>
             <div className="p-6 bg-orange-50 rounded-xl border border-orange-100">
               <div className="text-4xl font-black text-orange-800">0%</div>
               <div className="text-sm font-bold text-orange-600 mt-2">Fund Utilization</div>
             </div>
          </div>
        </div>
      );
    }

    if (activeTab === 'settings') {
      return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Organization Profile</h2>
          <form className="space-y-4">
            <div><label className="text-sm font-bold text-slate-700">Company Name</label><input type="text" defaultValue="Tata Steel Foundation" className="w-full p-3 border border-slate-200 rounded-lg mt-1" /></div>
            <div><label className="text-sm font-bold text-slate-700">Industry Sector</label><input type="text" defaultValue="Manufacturing & Mining" className="w-full p-3 border border-slate-200 rounded-lg mt-1" /></div>
            <div><label className="text-sm font-bold text-slate-700">CSR Annual Budget Pool (INR)</label><input type="text" defaultValue="₹50,000,000" className="w-full p-3 border border-slate-200 rounded-lg mt-1" /></div>
            <button type="button" className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold mt-4">Save Configuration</button>
          </form>
        </div>
      );
    }
    
    return (
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-6">
           <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-16 flex flex-col items-center justify-center text-center">
             <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center text-5xl mb-6 border border-orange-100">
               🌱
             </div>
             <h2 className="text-xl font-bold text-slate-900 mb-2">Your Impact Portfolio is Empty</h2>
             <p className="text-slate-500 max-w-lg mx-auto mb-8">
               You haven't funded or mentored any projects yet. Browse the challenge marketplace to find university-backed proposals that align with your CSR goals in Jharkhand.
             </p>
             <button onClick={() => setActiveTab('challenges')} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5">
               Explore Funding Opportunities →
             </button>
           </div>
        </div>
        
        <div className="space-y-6">
           <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 text-8xl">🎯</div>
             <h3 className="font-extrabold text-lg mb-2 relative z-10">Social Impact Scorecard</h3>
             <p className="text-sm text-slate-400 mb-8 relative z-10">Your total contribution tracking</p>
             
             <div className="grid grid-cols-2 gap-6 mb-8 relative z-10">
               <div>
                 <div className="text-3xl font-black mb-1">0</div>
                 <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Lives Impacted</div>
               </div>
               <div>
                 <div className="text-3xl font-black mb-1">0</div>
                 <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Villages</div>
               </div>
             </div>
             
             <div className="pt-6 border-t border-slate-800 relative z-10">
               <div className="text-4xl font-black mb-1 text-orange-400">₹0</div>
               <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Total Funds Disbursed</div>
             </div>
           </div>
        </div>
      </div>
    );
  };

  return (
    <SidebarLayout 
      activeTab={activeTab} 
      setActiveTab={setActiveTab} 
      roleTitle="Industry & CSR Collaboration" 
      userName="Tata Steel Foundation"
    >
      {renderContent()}
    </SidebarLayout>
  );
}
