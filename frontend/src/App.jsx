import React, { useState, useEffect } from 'react';
import Landing from './pages/Landing';
import { AppContext, AppProvider } from './context/AppContext';

import CitizenDashboard from './modules/citizen/CitizenDashboard';
import GovDashboard from './modules/government/GovDashboard';
import UniversityDashboard from './modules/university/UniversityDashboard';
import IndustryDashboard from './modules/industry/IndustryDashboard';

function AppContent() {
  const { state, dispatch } = React.useContext(AppContext);

  useEffect(() => {
    fetch('http://localhost:5000/api/problems')
      .then(r => r.json())
      .then(data => {
        data.forEach(p => dispatch({ type: "ADD_PROBLEM", problem: p }));
      })
      .catch(console.error);
  }, []);

  if (!state.role) return <Landing />;
  
  if (state.role === 'citizen') return <CitizenDashboard />;
  if (state.role === 'government') return <GovDashboard />;
  if (state.role === 'university') return <UniversityDashboard />;
  if (state.role === 'industry') return <IndustryDashboard />;
  
  return <Landing />;
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
