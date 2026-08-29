import React, { useState } from 'react';
import SidebarLayout from '../shared/SidebarLayout';

export default function GovDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    if (activeTab === 'challenges') {
      return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 min-h-[500px]">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Challenge Verification Queue</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 text-sm">
                  <th className="pb-3 font-semibold">AI Priority</th>
                  <th className="pb-3 font-semibold">Problem Title</th>
                  <th className="pb-3 font-semibold">Suggested Domain</th>
                  <th className="pb-3 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-100">
                  <td className="py-4"><span className="px-2 py-1 bg-red-100 text-red-700 rounded-md font-bold text-xs">High</span></td>
                  <td className="py-4 font-bold text-slate-800">Dengue outbreak in Morabadi</td>
                  <td className="py-4">Healthcare</td>
                  <td className="py-4"><button className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold">Review</button></td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-md font-bold text-xs">Medium</span></td>
                  <td className="py-4 font-bold text-slate-800">Broken Handpump</td>
                  <td className="py-4">Water Management</td>
                  <td className="py-4"><button className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold">Review</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    if (activeTab === 'proposals') {
      return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 min-h-[500px]">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">University Proposals & Projects</h2>
          <div className="p-10 text-center border-2 border-dashed border-slate-200 rounded-xl">
             <div className="text-4xl mb-4">📑</div>
             <h3 className="font-bold text-lg text-slate-800">No Proposals Yet</h3>
             <p className="text-sm text-slate-500 max-w-sm mx-auto">Universities have not submitted formal project proposals for the verified challenges yet.</p>
          </div>
        </div>
      );
    }

    if (activeTab === 'analytics') {
      return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 min-h-[500px]">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Statewide Analytics</h2>
          <div className="grid grid-cols-2 gap-6">
             <div className="border border-slate-200 rounded-xl p-6 flex flex-col items-center">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Problems by Domain</h3>
                <div className="w-32 h-32 rounded-full border-[12px] border-slate-100 flex items-center justify-center relative">
                   <div className="absolute inset-0 border-[12px] border-orange-500 rounded-full" style={{clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0)'}}></div>
                </div>
             </div>
             <div className="border border-slate-200 rounded-xl p-6 flex flex-col items-center justify-end">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Monthly Submissions</h3>
                <div className="flex items-end gap-3 h-32 w-full justify-center">
                   <div className="w-8 bg-slate-200 rounded-t-sm h-1/4"></div>
                   <div className="w-8 bg-slate-200 rounded-t-sm h-2/4"></div>
                   <div className="w-8 bg-slate-200 rounded-t-sm h-1/3"></div>
                   <div className="w-8 bg-orange-400 rounded-t-sm h-full"></div>
                </div>
             </div>
          </div>
        </div>
      );
    }

    if (activeTab === 'settings') {
      return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Department Settings</h2>
          <form className="space-y-4">
            <div><label className="text-sm font-bold text-slate-700">Official Name</label><input type="text" defaultValue="Secretary, IT Dept" className="w-full p-3 border border-slate-200 rounded-lg mt-1" /></div>
            <div><label className="text-sm font-bold text-slate-700">Department</label><input type="text" defaultValue="Information Technology" className="w-full p-3 border border-slate-200 rounded-lg mt-1" /></div>
            <button type="button" className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold mt-4">Save Configuration</button>
          </form>
        </div>
      );
    }
    
    return (
      <>
      {/* Top Metrics Row */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-500 text-5xl">📄</div>
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Submissions</div>
          <div className="text-4xl font-black text-slate-900 mt-1">0</div>
          <div className="flex items-center gap-1 text-xs text-slate-400 mt-3 font-semibold">
            <span>Awaiting first submission</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-500 text-5xl">⚙️</div>
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Active Projects</div>
          <div className="text-4xl font-black text-slate-900 mt-1">0</div>
          <div className="flex items-center gap-1 text-xs text-slate-400 mt-3 font-semibold">
            <span>No projects deployed yet</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-500 text-5xl">🎓</div>
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">HEI Participation</div>
          <div className="text-4xl font-black text-slate-900 mt-1">12</div>
          <div className="flex items-center gap-1 text-xs text-green-600 mt-3 font-semibold">
            <span>Universities onboarded</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-6 rounded-2xl shadow-lg relative overflow-hidden group text-white">
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-125 transition-transform duration-500 text-5xl">₹</div>
          <div className="text-[11px] font-bold text-amber-100 uppercase tracking-widest mb-1">Industry Funds Mobilized</div>
          <div className="text-4xl font-black mt-1">₹0</div>
          <div className="flex items-center gap-1 text-xs text-amber-50 mt-3 font-semibold">
            <span>CSR pool waiting for projects</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 mb-8">
        
        {/* Empty State Heatmap */}
        <div className="col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col h-[450px]">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="font-extrabold text-lg text-slate-900">Live Operations Heatmap</h2>
              <p className="text-sm text-slate-500">Real-time geographical distribution of verified problems.</p>
            </div>
            <div className="flex gap-2 bg-slate-100 p-1 rounded-lg">
              <button className="px-4 py-1.5 text-xs font-bold bg-white rounded shadow-sm text-slate-800">All Districts</button>
              <button className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-800">Critical Only</button>
            </div>
          </div>
          <div className="flex-1 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at center, black 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
             <div className="text-center z-10">
                <div className="text-4xl mb-3 opacity-50">🗺️</div>
                <h3 className="font-bold text-slate-700">Waiting for Data</h3>
                <p className="text-sm text-slate-400 mt-1">The 3D heatmap will render once citizens start submitting reports.</p>
             </div>
          </div>
        </div>
        
        {/* Right column */}
        <div className="space-y-8 h-[450px] flex flex-col">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex-1 flex flex-col">
            <h2 className="font-extrabold text-sm text-slate-900 uppercase tracking-widest mb-4">Domain Analysis</h2>
            <div className="flex-1 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 rounded-full border-4 border-slate-100 flex items-center justify-center text-slate-300 mb-3">
                <span className="text-xl">📊</span>
              </div>
              <p className="text-sm font-medium text-slate-400">No AI classifications yet.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex-1 flex flex-col">
            <h2 className="font-extrabold text-sm text-slate-900 uppercase tracking-widest mb-4">Pipeline Status</h2>
            <div className="flex-1 flex flex-col items-center justify-center gap-3 w-full">
               <div className="w-full bg-slate-100 text-slate-400 text-[11px] font-bold tracking-widest uppercase text-center py-2.5 rounded-lg border border-slate-200">Submitted (0)</div>
               <div className="w-[85%] bg-slate-100 text-slate-400 text-[11px] font-bold tracking-widest uppercase text-center py-2.5 rounded-lg border border-slate-200">Routed (0)</div>
               <div className="w-[70%] bg-slate-100 text-slate-400 text-[11px] font-bold tracking-widest uppercase text-center py-2.5 rounded-lg border border-slate-200">In Progress (0)</div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  };

  return (
    <SidebarLayout 
      activeTab={activeTab} 
      setActiveTab={setActiveTab} 
      roleTitle="Master Command Center" 
      userName="Secretary, IT Dept"
    >
      {renderContent()}
    </SidebarLayout>
  );
}
