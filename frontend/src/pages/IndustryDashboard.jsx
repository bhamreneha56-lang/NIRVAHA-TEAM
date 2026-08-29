import React from 'react';
import SidebarLayout from '../components/SidebarLayout';

export default function IndustryDashboard() {
  return (
    <SidebarLayout activeTab="dashboard" roleTitle="Industry Commitment" userName="Tata Steel CSR">
      <div className="flex justify-between items-end mb-6">
        <p className="text-gray-500 text-sm">Overview of your ongoing funded projects and collective industry impact.</p>
        <button className="px-4 py-2 bg-green-800 text-white text-sm font-bold rounded shadow-sm hover:bg-green-900">+ Fund New Project</button>
      </div>

      <div className="flex gap-6 items-start">
        <div className="flex-1 space-y-4">
          <h2 className="text-lg font-bold text-gray-900">Your Funded Projects <span className="text-xs text-green-700 font-semibold ml-4 cursor-pointer hover:underline">View All</span></h2>
          
          <div className="bg-white border rounded-lg p-4 shadow-sm flex gap-4">
            <div className="w-48 h-28 bg-gray-200 rounded shrink-0 object-cover overflow-hidden">
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=200&auto=format&fit=crop" alt="Hospital" className="w-full h-full object-cover"/>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg text-gray-900 leading-tight">Rural Health Infrastructure<br/>Upgrade</h3>
                  <span className="px-2 py-0.5 bg-green-800 text-white text-[10px] rounded-full font-bold uppercase">Active</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Building primary care centers in 3 districts.</p>
              </div>
              <div>
                <div className="flex justify-between text-xs font-semibold text-gray-700 mb-1">
                  <span>Milestone 2/4 Funded</span>
                  <span className="text-gray-400 font-normal">50% Complete</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-800 w-1/2"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-4 shadow-sm flex gap-4">
            <div className="w-48 h-28 bg-gray-200 rounded shrink-0 object-cover overflow-hidden">
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=200&auto=format&fit=crop" alt="Classroom" className="w-full h-full object-cover"/>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg text-gray-900 leading-tight">Digital Literacy Initiative</h3>
                  <span className="px-2 py-0.5 bg-amber-500 text-white text-[10px] rounded-full font-bold uppercase">Pending Review</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Providing tablets and internet access to remote schools.</p>
              </div>
              <div>
                <div className="flex justify-between text-xs font-semibold text-gray-700 mb-1">
                  <span>Milestone 1/3 Funded</span>
                  <span className="text-gray-400 font-normal">33% Complete</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-700 w-1/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 shrink-0 space-y-6 mt-10">
          <div className="bg-green-900 text-white rounded-xl p-5 shadow-lg">
            <div className="flex gap-2 items-center text-green-100 mb-2">
              <span>?</span>
              <h3 className="font-bold text-lg leading-tight">Social Impact<br/>Scorecard</h3>
            </div>
            <p className="text-xs text-green-200 mb-6">Your total contribution impact</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="text-2xl font-bold">1,200</div>
                <div className="text-[10px] text-green-200 uppercase tracking-wide">Lives Impacted</div>
              </div>
              <div>
                <div className="text-2xl font-bold">4</div>
                <div className="text-[10px] text-green-200 uppercase tracking-wide">Villages Transformed</div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-green-700/50">
              <div className="text-3xl font-bold">?4.5Cr</div>
              <div className="text-[10px] text-green-200 uppercase tracking-wide mt-1">Total Funds Disbursed</div>
            </div>
          </div>

          <div className="bg-white border rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-2"><span>??</span> Public Ledger</h3>
            <p className="text-xs text-gray-500 mb-4 leading-tight">Recent collective industry contributions.</p>
            
            <div className="space-y-4">
              {[
                { name: 'Tata Steel Foundation', cause: 'Clean Water Project', amount: '?50L' },
                { name: 'Adani Group', cause: 'Solar Grid Expansion', amount: '?1.2Cr' },
                { name: 'Wipro Cares', cause: 'Education Scholarship', amount: '?25L' },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center text-sm">
                  <div>
                    <div className="font-semibold text-gray-800">{item.name}</div>
                    <div className="text-[10px] text-gray-500">{item.cause}</div>
                  </div>
                  <div className="font-bold text-green-700">{item.amount}</div>
                </div>
              ))}
            </div>
            
            <button className="w-full py-2 mt-4 text-xs font-semibold text-gray-600 border rounded hover:bg-gray-50 transition">View Full Ledger</button>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
