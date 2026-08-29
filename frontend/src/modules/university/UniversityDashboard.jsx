import React, { useState } from 'react';
import SidebarLayout from '../shared/SidebarLayout';

export default function UniversityDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    if (activeTab === 'challenges') {
      return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 min-h-[500px]">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Open Challenges Pool</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 border border-slate-200 rounded-xl hover:border-blue-400 cursor-pointer transition">
               <div className="flex justify-between items-start mb-4">
                 <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md font-bold text-xs uppercase">Agriculture</span>
                 <span className="text-xs font-bold text-slate-400">Match: 95%</span>
               </div>
               <h3 className="font-bold text-lg mb-2">Smart Irrigation System for Hazaribagh</h3>
               <p className="text-slate-500 text-sm mb-4">Farmers are losing 30% of crop yield due to unpredicted water shortages.</p>
               <button className="w-full py-2 bg-slate-900 text-white rounded-lg font-bold text-sm">Form Team & Apply</button>
            </div>
            <div className="p-6 border border-slate-200 rounded-xl hover:border-blue-400 cursor-pointer transition">
               <div className="flex justify-between items-start mb-4">
                 <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-md font-bold text-xs uppercase">Education</span>
                 <span className="text-xs font-bold text-slate-400">Match: 82%</span>
               </div>
               <h3 className="font-bold text-lg mb-2">Digital Literacy in Tribal Schools</h3>
               <p className="text-slate-500 text-sm mb-4">Lack of accessible tech education for students in rural Dumka.</p>
               <button className="w-full py-2 bg-slate-900 text-white rounded-lg font-bold text-sm">Form Team & Apply</button>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === 'proposals') {
      return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 min-h-[500px]">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Your Submitted Proposals</h2>
          <div className="p-10 text-center border-2 border-dashed border-slate-200 rounded-xl">
             <div className="text-4xl mb-4">📝</div>
             <h3 className="font-bold text-lg text-slate-800">No Proposals Drafted</h3>
             <p className="text-sm text-slate-500 max-w-sm mx-auto">You haven't formed any teams or submitted research proposals yet.</p>
          </div>
        </div>
      );
    }

    if (activeTab === 'analytics') {
      return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 min-h-[500px]">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Institution Analytics</h2>
          <div className="grid grid-cols-3 gap-6">
             <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
               <div className="text-4xl font-black text-slate-800">0</div>
               <div className="text-sm font-bold text-slate-500 mt-2">Active Projects</div>
             </div>
             <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
               <div className="text-4xl font-black text-slate-800">0</div>
               <div className="text-sm font-bold text-slate-500 mt-2">Students Engaged</div>
             </div>
             <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
               <div className="text-4xl font-black text-slate-800">0</div>
               <div className="text-sm font-bold text-slate-500 mt-2">Patents Filed</div>
             </div>
          </div>
        </div>
      );
    }

    if (activeTab === 'settings') {
      return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">University Profile</h2>
          <form className="space-y-4">
            <div><label className="text-sm font-bold text-slate-700">Institution Name</label><input type="text" defaultValue="IIT ISM Dhanbad" className="w-full p-3 border border-slate-200 rounded-lg mt-1" /></div>
            <div><label className="text-sm font-bold text-slate-700">Research Focus Areas (Comma separated)</label><input type="text" defaultValue="Mining, Earth Sciences, Computer Science" className="w-full p-3 border border-slate-200 rounded-lg mt-1" /></div>
            <button type="button" className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold mt-4">Save Profile</button>
          </form>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-16 flex flex-col items-center justify-center text-center mt-10">
        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center text-5xl mb-6 border border-blue-100">
          🔍
        </div>
        <h2 className="text-xl font-bold text-slate-900 mb-2">No Challenges Assigned Yet</h2>
        <p className="text-slate-500 max-w-lg mx-auto mb-8">
          The AI Intelligence module hasn't routed any verified problems to your institution yet. 
          Once citizens report issues matching your faculty's expertise (e.g. Mining, Earth Sciences, Computer Science), they will appear here for multidisciplinary team formation.
        </p>
        <button onClick={() => setActiveTab('challenges')} className="bg-slate-900 hover:bg-black text-white px-6 py-3 rounded-xl font-bold shadow-md transition-all">
          Browse Open Challenges Pool
        </button>
      </div>
    );
  };

  return (
    <SidebarLayout 
      activeTab={activeTab} 
      setActiveTab={setActiveTab} 
      roleTitle="University Research Portal" 
      userName="IIT ISM Dhanbad"
    >
      {renderContent()}
    </SidebarLayout>
  );
}
