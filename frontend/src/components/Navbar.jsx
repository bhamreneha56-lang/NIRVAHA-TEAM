import React, { useContext } from 'react';
import { AppContext, dashboardFor } from '../context/AppContext';

export function Logo({ size=36 }) {
  return (
    <div className="flex items-center gap-2.5">
      <div style={{ width:size, height:size }} className="rounded-xl bg-gradient-to-br from-green-700 to-green-500 grid place-items-center shadow-sm">
        <svg viewBox="0 0 24 24" width={size*0.6} height={size*0.6} fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 20 L12 4 L21 20" />
          <path d="M7 14 H17" />
          <circle cx="12" cy="14" r="1.2" fill="white" />
        </svg>
      </div>
      <div className="leading-tight">
        <div className="font-serif font-bold text-green-800 text-lg">NavKarya</div>
        <div className="text-[10px] uppercase tracking-widest text-green-600 font-semibold">Solution Bridge · Jharkhand</div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const { state, dispatch } = useContext(AppContext);
  const unread = state.notifications.filter(n => n.to === state.role && n.unread).length;
  const roleLabel = { citizen:"Citizen", university:"University", industry:"Industry Partner", government:"Government Official" }[state.role] || "";

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center gap-4">
        <button onClick={() => dispatch({ type:"NAV", view:"landing" })} className="shrink-0"><Logo /></button>
        <div className="flex-1" />
        {state.role && (
          <>
            <button onClick={() => dispatch({ type:"NAV", view: dashboardFor(state.role) })} className="hidden md:inline text-sm font-medium text-gray-700 hover:text-green-700">Dashboard</button>
            <div className="hidden md:flex items-center gap-2 pl-3 border-l border-green-100">
              <div className="leading-tight">
                <div className="text-xs text-gray-500">Signed in as</div>
                <div className="text-sm font-semibold text-gray-900">{roleLabel}</div>
              </div>
              <button onClick={() => dispatch({ type:"SET_ROLE", role:null })} className="ml-2 text-xs font-medium text-gray-500 hover:text-gray-900 underline">Switch role</button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
