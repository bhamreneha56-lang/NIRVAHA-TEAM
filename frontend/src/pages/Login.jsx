import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Login() {
  const { dispatch } = useContext(AppContext);
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <div className="text-center mb-10">
        <div className="text-xs font-bold uppercase tracking-widest text-orange-600">Demo access</div>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">Choose your role</h1>
        <p className="text-gray-500 mt-2">Pick a role to see its tailored dashboard.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          { role:"citizen",    t:"Citizen",             d:"Report problems, track status, earn points.", icon:"👤" },
          { role:"university", t:"University / Faculty",d:"Review problems, form teams, submit proposals.", icon:"🎓" },
          { role:"industry",   t:"Industry / CSR",      d:"Browse fundable projects, commit funding.", icon:"🏭" },
          { role:"government", t:"Government Official", d:"State-wide analytics & oversight.", icon:"🏛️" },
        ].map(r => (
          <button key={r.role} onClick={() => dispatch({ type:"SET_ROLE", role:r.role })}
            className="text-left bg-white rounded-2xl border border-gray-200 p-6 hover:border-green-500 transition shadow-sm hover:shadow-md">
            <div className="text-3xl mb-4">{r.icon}</div>
            <div className="text-xl font-bold text-gray-900">{r.t}</div>
            <div className="text-sm text-gray-500 mt-1">{r.d}</div>
            <div className="mt-4 text-green-700 text-sm font-semibold">Enter →</div>
          </button>
        ))}
      </div>
    </div>
  );
}
