import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar(){
  return (
    <aside className="d-flex flex-column gap-3 rounded-3 shadow-sm" style={{
      width:'260px',
      maxWidth:'100%',
      background:'linear-gradient(180deg, #faf5fb 0%, #f3eef6 100%)',
      padding:'28px 18px',
      boxShadow:'0 4px 12px rgba(0,0,0,0.04)'
    }}>
      <nav className="d-flex flex-column gap-2 mt-2">
        <NavLink 
          to="/" 
          end
          className={({isActive}) => `px-3 py-2 rounded-2 text-decoration-none d-flex gap-2 align-items-center fw-semibold ${isActive ? 'active-link' : 'text-muted'}`}
          style={{color: 'var(--muted)'}}
        >
           Dashboard
        </NavLink>
        <NavLink 
          to="/transactions"
          className={({isActive}) => `px-3 py-2 rounded-2 text-decoration-none d-flex gap-2 align-items-center fw-semibold ${isActive ? 'active-link' : 'text-muted'}`}
          style={{color: 'var(--muted)'}}
        >
           Transactions
        </NavLink>
        <NavLink 
          to="/incomes"
          className={({isActive}) => `px-3 py-2 rounded-2 text-decoration-none d-flex gap-2 align-items-center fw-semibold ${isActive ? 'active-link' : 'text-muted'}`}
          style={{color: 'var(--muted)'}}
        >
           Incomes
        </NavLink>
        <NavLink 
          to="/expenses"
          className={({isActive}) => `px-3 py-2 rounded-2 text-decoration-none d-flex gap-2 align-items-center fw-semibold ${isActive ? 'active-link' : 'text-muted'}`}
          style={{color: 'var(--muted)'}}
        >
           Expenses
        </NavLink>
      </nav>
    </aside>
  );
}
