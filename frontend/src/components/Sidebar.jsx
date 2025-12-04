import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Aside = styled.aside`
  width: 260px;
  max-width: 100%;
  background: linear-gradient(180deg, #faf5fb 0%, #f3eef6 100%);
  padding: 28px 18px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.04);
  display:flex;
  flex-direction:column;
  gap:20px;

  @media (max-width: 900px){
    width:100%;
    flex-direction:row;
    align-items:center;
    padding:12px;
    gap:12px;
    border-radius:10px;
  }
`;

const Profile = styled.div`
  display:flex;
  gap:12px;
  align-items:center;
`;

const Avatar = styled.div`
  width:56px; height:56px; border-radius:50%; background:var(--card-bg); display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--text);
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
`;

const Name = styled.div`
  font-weight:800; color:var(--text);
`;

const Menu = styled.nav`
  display:flex; flex-direction:column; gap:8px; margin-top:8px;

  @media (max-width:900px){
    flex-direction:row; margin-left:8px; gap:8px; align-items:center;
  }
`;

const MenuItem = styled(NavLink)`
  padding:10px 12px; border-radius:8px; color:var(--muted); text-decoration:none; display:flex; gap:10px; align-items:center; font-weight:600;
  &.active { background:#efe7f6; color:var(--text); }
  @media (max-width:900px){ padding:8px 10px; font-size:14px }
`;

export default function Sidebar(){
  return (
    <Aside>
      

      <Menu>
        <MenuItem to="/"> Dashboard</MenuItem>
        <MenuItem to="/transactions"> Transactions</MenuItem>
        <MenuItem to="/incomes"> Incomes</MenuItem>
        <MenuItem to="/expenses"> Expenses</MenuItem>
      </Menu>

    </Aside>
  );
}
