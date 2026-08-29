import React from 'react';
import SidebarLayout from '../components/SidebarLayout';

export default function CitizenDashboard() {
  return (
    <SidebarLayout activeTab="dashboard" roleTitle="Citizen Portal" userName="Rahul Kumar">
      <div className="max-w-4xl mx-auto">
        
        {/* Voice Agent Hero */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white shadow-lg mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Report an issue with your voice</h2>
            <p className="text-amber-100 max-w-md">Speak in Hindi, Santhali, or English. Our AI will automatically translate and categorize your problem.</p>
          </div>
          <button className="w-24 h-24 bg-white text-amber-500 rounded-full shadow-xl flex flex-col items-center justify-center hover:scale-105 transition-transform group animate-pulse">
            <span className="text-4xl group-hover:text-amber-600">🎤</span>
            <span className="text-[10px] font-bold mt-1 text-gray-500">TAP TO SPEAK</span>
          </button>
        </div>

        <div className="flex gap-6">
          <div className="flex-1">
            <div className="flex justify-between items-end mb-4">
              <h2 className="text-lg font-bold text-gray-900">Your Submitted Reports</h2>
              <button className="text-xs font-semibold text-amber-600 hover:underline">View All</button>
            </div>
            
            <div className="space-y-4">
              {[
                { title: 'Broken Handpump in Sector 4', status: 'In Progress', date: 'Oct 12, 2026', color: 'bg-green-100 text-green-700' },
                { title: 'Potholes on Main Road', status: 'Resolved', date: 'Sep 28, 2026', color: 'bg-gray-100 text-gray-600' },
                { title: 'Streetlight completely off', status: 'Submitted', date: 'Oct 14, 2026', color: 'bg-amber-100 text-amber-700' }
              ].map((r, idx) => (
                <div key={idx} className="bg-white border rounded-xl p-4 shadow-sm flex justify-between items-center hover:border-amber-400 transition cursor-pointer">
                  <div>
                    <h3 className="font-bold text-gray-800">{r.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">Submitted on {r.date}</p>
                  </div>
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${r.color}`}>{r.status}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-72 shrink-0 space-y-6">
            <div className="bg-white border rounded-xl p-5 shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto text-2xl font-bold mb-3">
                280
              </div>
              <h3 className="font-bold text-gray-900">Karma Points</h3>
              <p className="text-xs text-gray-500 mt-1">You are in the top 10% of active citizens in Ranchi.</p>
            </div>
            <button className="w-full py-3 bg-white border-2 border-dashed border-gray-300 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition">
              + Manually Type Issue
            </button>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
