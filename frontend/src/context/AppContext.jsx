import React, { createContext, useReducer } from 'react';
import { SEED_PROBLEMS, SEED_PROJECTS, SEED_NOTIFICATIONS } from '../data/seed';

export const AppContext = createContext(null);

const initialState = {
  role: null, // 'citizen' | 'university' | 'industry' | 'government'
  currentUniversity: "u1",
  currentIndustry: "i1",
  view: "landing",
  viewParams: {},
  problems: SEED_PROBLEMS,
  projects: SEED_PROJECTS,
  notifications: SEED_NOTIFICATIONS,
  citizenPoints: 280,
  studentCredits: 140,
  language: "en",
};

export function dashboardFor(role) {
  if (role === "citizen")    return "citizen-dashboard";
  if (role === "university") return "university-dashboard";
  if (role === "industry")   return "industry-dashboard";
  if (role === "government") return "gov-dashboard";
  return "landing";
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_ROLE":       return { ...state, role: action.role, view: dashboardFor(action.role) };
    case "NAV":            return { ...state, view: action.view, viewParams: action.params || {} };
    case "ADD_PROBLEM":    return { ...state, problems: [action.problem, ...state.problems] };
    case "UPDATE_PROBLEM": return { ...state, problems: state.problems.map(p => p.id === action.id ? { ...p, ...action.patch } : p) };
    case "UPVOTE":         return { ...state, problems: state.problems.map(p => p.id === action.id ? { ...p, upvotes: p.upvotes + 1 } : p) };
    case "ADD_PROJECT":    return { ...state, projects: [action.project, ...state.projects] };
    case "UPDATE_PROJECT": return { ...state, projects: state.projects.map(p => p.id === action.id ? { ...p, ...action.patch } : p) };
    case "ADD_NOTIFICATION": return { ...state, notifications: [{ ...action.n, id: "n"+Date.now() }, ...state.notifications] };
    case "MARK_READ":      return { ...state, notifications: state.notifications.map(n => n.id === action.id ? { ...n, unread:false } : n) };
    case "SET_LANG":       return { ...state, language: action.lang };
    default: return state;
  };
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  React.useEffect(() => {
    fetch('http://localhost:5000/api/problems')
      .then(res => res.json())
      .then(data => {
        // Hydrate state with backend data
        data.forEach(p => dispatch({ type: "ADD_PROBLEM", problem: p }));
      })
      .catch(err => console.error("API error:", err));
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
