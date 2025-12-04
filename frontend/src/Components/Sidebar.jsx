import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar(){
  const linkClass = ({isActive}) => `flex items-center gap-3 p-3 rounded-lg hover:bg-white/40 ${isActive? 'bg-white/50 font-semibold' : 'text-gray-600'}`;

  return (
    <aside className="w-72 bg-gradient-to-b from-pink-50 via-purple-50 to-pink-50 rounded-lg p-6 sticky top-6 h-[calc(100vh-48px)]">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-full bg-indigo-200 flex items-center justify-center text-xl">M</div>
        <div>
          <div className="font-semibold text-lg">Mike</div>
          <div className="text-sm text-gray-500">Your Money</div>
        </div>
      </div>

      <nav className="flex flex-col gap-2">
        <NavLink to="/" className={linkClass} end>
          <span className="text-xl">📊</span>
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/transactions" className={linkClass}>
          <span className="text-xl">📃</span>
          <span>View Transactions</span>
        </NavLink>
        <NavLink to="/incomes" className={linkClass}>
          <span className="text-xl">💰</span>
          <span>Incomes</span>
        </NavLink>
        <NavLink to="/expenses" className={linkClass}>
          <span className="text-xl">🧾</span>
          <span>Expenses</span>
        </NavLink>
      </nav>

      <div className="mt-auto text-sm text-gray-500">↪ Sign Out</div>
    </aside>
  );
}
