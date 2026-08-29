import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function SidebarLayout({ children, activeTab, roleTitle, userName }) {
  const { dispatch } = useContext(AppContext);
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: '⊞' },
    { id: 'challenges', label: 'Challenges', icon: '📄' },
    { id: 'proposals', label: 'Proposals', icon: '📋' },
    { id: 'analytics', label: 'Analytics', icon: '📊' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col justify-between shadow-sm">
        <div>
          <div className="p-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-green-700 text-white rounded grid place-items-center font-bold">A</div>
            <div className="leading-tight">
              <div className="font-bold text-gray-900">Antigravity</div>
              <div className="text-xs text-gray-500">Govt. of Jharkhand</div>
            </div>
          </div>
          <nav className="px-4 space-y-2 mt-4">
            {tabs.map(t => (
              <button 
                key={t.id} 
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition ${activeTab === t.id ? 'bg-amber-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <span className={activeTab === t.id ? 'text-white' : 'text-gray-400'}>{t.icon}</span>
                {t.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t">
          <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-bold shadow-md mb-4">Report Issue</button>
          <div className="space-y-3 text-sm text-gray-500 px-2">
            <button className="flex items-center gap-2 hover:text-gray-900"><span>♿</span> Accessibility</button>
            <button className="flex items-center gap-2 hover:text-gray-900"><span>🛡️</span> Privacy</button>
          </div>
          <button onClick={() => dispatch({ type: 'SET_ROLE', role: null })} className="mt-4 text-xs text-gray-400 underline w-full text-left px-2">Switch Role</button>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-20 bg-white/80 backdrop-blur border-b flex items-center justify-between px-8 shrink-0">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{roleTitle}</h1>
            <p className="text-sm text-gray-500">Real-time overview of state initiatives and platform metrics.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex bg-gray-100 rounded-full p-1">
              <button className="px-4 py-1.5 bg-white shadow rounded-full text-sm font-semibold text-gray-800">Official</button>
              <button className="px-4 py-1.5 rounded-full text-sm font-medium text-gray-500">Admin</button>
            </div>
            <button className="px-4 py-1.5 border rounded-full text-sm font-medium text-gray-700 bg-white shadow-sm">Language: EN/HI</button>
            <div className="text-sm text-gray-600 border-l pl-4">Signed in as <strong className="text-gray-900">{userName}</strong></div>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-8">
          {children}
        </div>
      </main>
      
      {/* Global Chatbot Widget */}
      <div className="fixed bottom-6 right-6">
        <button className="w-14 h-14 bg-amber-500 rounded-full shadow-2xl grid place-items-center text-white text-2xl hover:scale-110 transition-transform">
          💬
        </button>
      </div>
    </div>
  );
}
