import React from 'react';
import SidebarLayout from '../components/SidebarLayout';

export default function UniversityDashboard() {
  return (
    <SidebarLayout activeTab="dashboard" roleTitle="University Portal" userName="Dr. Verma (BIT Mesra)">
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-5 rounded-xl border shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl">??</div>
          <div>
            <div className="text-2xl font-bold text-gray-900">24</div>
            <div className="text-xs text-gray-500 uppercase font-semibold">Active Student Teams</div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-xl">??</div>
          <div>
            <div className="text-2xl font-bold text-gray-900">12</div>
            <div className="text-xs text-gray-500 uppercase font-semibold">Matched Challenges</div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl">??</div>
          <div>
            <div className="text-2xl font-bold text-gray-900">?1.8Cr</div>
            <div className="text-xs text-gray-500 uppercase font-semibold">Research Grants</div>
          </div>
        </div>
      </div>

      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
          <h2 className="font-bold text-lg text-gray-800">AI-Matched Challenges for Your Faculty</h2>
          <button className="text-xs bg-white border px-3 py-1.5 rounded shadow-sm font-semibold text-gray-600">Filter: AI Match &gt; 80%</button>
        </div>
        <div className="divide-y">
          {[
            { match: '98%', title: 'Offline-first PDS authentication sync for remote areas', dept: 'Computer Science', priority: 'High' },
            { match: '92%', title: 'Low-cost bio-toilet retrofit for rural schools', dept: 'Civil Engineering', priority: 'Medium' },
            { match: '87%', title: 'Predictive analytics for crop disease using drones', dept: 'Agricultural Tech', priority: 'Urgent' },
          ].map((c, idx) => (
            <div key={idx} className="p-5 flex justify-between items-center hover:bg-gray-50 transition">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full border-4 border-green-100 flex items-center justify-center font-bold text-green-700 text-sm">{c.match}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{c.title}</h3>
                  <div className="flex gap-3 mt-1">
                    <span className="text-xs text-gray-500">Matching Dept: <strong className="text-gray-700">{c.dept}</strong></span>
                    <span className="text-xs text-red-500 font-semibold">{c.priority} Priority</span>
                  </div>
                </div>
              </div>
              <button className="px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-gray-800 transition">Form Team</button>
            </div>
          ))}
        </div>
      </div>
    </SidebarLayout>
  );
}
