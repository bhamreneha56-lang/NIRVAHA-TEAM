import React, { useContext } from 'react';
import SidebarLayout from '../components/SidebarLayout';
import { AppContext } from '../context/AppContext';

export default function GovDashboard() {
  const { state } = useContext(AppContext);
  const totalSubmissions = state.problems.length;
  
  return (
    <SidebarLayout activeTab="dashboard" roleTitle="Command Center" userName="Secretary, IT">
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl border shadow-sm">
          <div className="text-sm font-semibold text-gray-500 uppercase">Submissions</div>
          <div className="text-3xl font-bold text-gray-900 mt-1">12,450</div>
          <div className="text-xs text-green-600 mt-2 font-medium">? 12% vs last month</div>
        </div>
        <div className="bg-white p-4 rounded-xl border shadow-sm">
          <div className="text-sm font-semibold text-gray-500 uppercase">Active Projects</div>
          <div className="text-3xl font-bold text-gray-900 mt-1">420</div>
          <div className="text-xs text-green-600 mt-2 font-medium">? 5% vs last month</div>
        </div>
        <div className="bg-white p-4 rounded-xl border shadow-sm">
          <div className="text-sm font-semibold text-gray-500 uppercase">Resolved</div>
          <div className="text-3xl font-bold text-gray-900 mt-1">385</div>
          <div className="text-xs text-green-600 mt-2 font-medium">? 8% vs last month</div>
        </div>
        <div className="bg-white p-4 rounded-xl border shadow-sm border-amber-200 bg-amber-50/30">
          <div className="text-sm font-semibold text-gray-500 uppercase">Funding Mobilized</div>
          <div className="text-3xl font-bold text-gray-900 mt-1">?4.2Cr</div>
          <div className="text-xs text-gray-500 mt-2 font-medium">Total allocation tracked</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="col-span-2 bg-white rounded-xl border shadow-sm p-4 h-96 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg text-gray-800">Jharkhand Operations Heatmap</h2>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs border rounded shadow-sm bg-white">All Categories</button>
              <button className="px-3 py-1 text-xs border rounded shadow-sm bg-white">All Statuses</button>
            </div>
          </div>
          <div className="flex-1 bg-gray-100 rounded-lg flex items-center justify-center">
            {/* Map Placeholder */}
            <span className="text-gray-400 font-semibold">[3D Map Rendering Area]</span>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-xl border shadow-sm p-4 h-44 flex flex-col">
            <h2 className="font-bold text-sm text-gray-800 mb-2">Submissions by Category</h2>
            <div className="flex-1 flex items-end gap-2 justify-between mt-2">
              {[60, 40, 90, 80, 50].map((h, i) => (
                <div key={i} className="w-full bg-green-800 rounded-t-sm" style={{height: h + '%'}}></div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-gray-500 uppercase">
              <span>Agri</span><span>Tech</span><span>Edu</span><span>Health</span><span>Infra</span>
            </div>
          </div>
          <div className="bg-white rounded-xl border shadow-sm p-4 h-44 flex flex-col">
            <h2 className="font-bold text-sm text-gray-800 mb-2">Project Pipeline Status</h2>
            <div className="flex-1 flex flex-col items-center justify-center gap-2">
               <div className="w-full max-w-[200px] bg-[#a8baaf] text-white text-xs font-bold text-center py-1 rounded-full">Submitted (1,200)</div>
               <div className="w-[85%] max-w-[170px] bg-[#7a9583] text-white text-xs font-bold text-center py-1 rounded-full">Routed (850)</div>
               <div className="w-[70%] max-w-[140px] bg-green-800 text-white text-xs font-bold text-center py-1 rounded-full shadow-lg">In Progress (420)</div>
               <div className="w-[55%] max-w-[110px] bg-amber-500 text-white text-xs font-bold text-center py-1 rounded-full">Completed (385)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border shadow-sm p-4">
          <h2 className="font-bold text-lg text-gray-800 mb-4">Performance Leaderboard</h2>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="pb-2">Rank</th>
                <th className="pb-2">Entity</th>
                <th className="pb-2">Type</th>
                <th className="pb-2">Score</th>
                <th className="pb-2">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                { rank: 1, name: 'Ranchi District', type: 'District', score: 94.2 },
                { rank: 2, name: 'IIT ISM Dhanbad', type: 'University', score: 91.8 },
                { rank: 3, name: 'East Singhbhum', type: 'District', score: 88.5 }
              ].map(r => (
                <tr key={r.rank}>
                  <td className="py-3 font-semibold">{r.rank}</td>
                  <td className="py-3 font-medium">{r.name}</td>
                  <td className="py-3 text-gray-500">{r.type}</td>
                  <td className="py-3 font-bold">{r.score}</td>
                  <td className="py-3"><span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-sm">EXCELLENT</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white rounded-xl border shadow-sm p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg text-gray-800 flex items-center gap-2"><span>??</span> Future Roadmap</h2>
            <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 font-semibold">Q3-Q4 2024</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="border rounded-lg p-3 bg-gray-50">
              <div className="flex gap-2 items-center mb-2">
                <div className="w-8 h-8 rounded bg-amber-100 text-amber-600 grid place-items-center">??</div>
                <h3 className="font-bold text-sm text-gray-900">Blockchain Audit</h3>
              </div>
              <p className="text-[10px] text-gray-500 leading-tight">Immutable ledger integration for transparent fund tracking and proposal validation.</p>
            </div>
            <div className="border rounded-lg p-3 bg-gray-50">
              <div className="flex gap-2 items-center mb-2">
                <div className="w-8 h-8 rounded bg-blue-100 text-blue-600 grid place-items-center">??</div>
                <h3 className="font-bold text-sm text-gray-900">Smart Escrow</h3>
              </div>
              <p className="text-[10px] text-gray-500 leading-tight">Automated milestone-based fund disbursement utilizing smart contracts.</p>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
