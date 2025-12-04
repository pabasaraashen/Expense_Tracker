import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import api from './api';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';
import IncomesPage from './pages/IncomesPage';
import ExpensesPage from './pages/ExpensesPage';
import TransactionsList from './components/TransactionsList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Layout = styled.div`
  display:flex; gap:18px; padding:28px; min-height:calc(100vh - 40px); flex-wrap:wrap;
  @media (max-width:900px){ padding:12px; gap:12px }
`;
const Main = styled.main`
  flex:1;
  background: linear-gradient(180deg,var(--card-bg),#fbf6fb);
  border-radius:12px; padding:18px; min-width:300px;
  @media (max-width:900px){ border-radius:10px; padding:12px }
`;

function App(){
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=>{ fetchAll(); }, []);

  const fetchAll = async () => {
    setLoading(true); setError(null);
    try{
      const [inc, exp] = await Promise.all([
        api.get('/get-incomes'),
        api.get('/get-expenses')
      ]);
      setIncomes(inc.data || []);
      setExpenses(exp.data || []);
    }catch(err){ console.error(err); setError('Failed to load data'); }
    finally { setLoading(false); }
  };

  const handleAddIncome = async (payload) => {
    setSaving(true); setError(null);
    try{ await api.post('/add-income', payload); await fetchAll(); }
    catch(err){ console.error(err); setError('Failed to save income'); }
    finally{ setSaving(false); }
  };

  const handleAddExpense = async (payload) => {
    setSaving(true); setError(null);
    try{ await api.post('/add-expense', payload); await fetchAll(); }
    catch(err){ console.error(err); setError('Failed to save expense'); }
    finally{ setSaving(false); }
  };

  const handleDeleteIncome = async (id) => {
    setSaving(true); setError(null);
    try{ await api.delete(`/delete-income/${id}`); await fetchAll(); }
    catch(err){ console.error(err); setError('Failed to delete income'); }
    finally{ setSaving(false); }
  };

  const handleDeleteExpense = async (id) => {
    setSaving(true); setError(null);
    try{ await api.delete(`/delete-expense/${id}`); await fetchAll(); }
    catch(err){ console.error(err); setError('Failed to delete expense'); }
    finally{ setSaving(false); }
  };

  return (
    <BrowserRouter>
      <Layout>
        <Sidebar />
        <Main>
          {error && <div style={{color:'#ff4d4f', marginBottom:10}}>{error}</div>}
          <Routes>
            <Route path="/" element={<DashboardPage incomes={incomes} expenses={expenses} loading={loading} onDeleteIncome={handleDeleteIncome} onDeleteExpense={handleDeleteExpense} />} />
            <Route path="/incomes" element={<IncomesPage incomes={incomes} onAdd={handleAddIncome} onDelete={handleDeleteIncome} loading={loading} saving={saving} />} />
            <Route path="/expenses" element={<ExpensesPage expenses={expenses} onAdd={handleAddExpense} onDelete={handleDeleteExpense} loading={loading} saving={saving} />} />
            <Route path="/transactions" element={<div><h2 style={{fontSize:28}}>All Transactions</h2><div style={{maxHeight:600, overflowY:'auto'}}><TransactionsList items={[...incomes, ...expenses].sort((a,b)=> new Date(b.date)-new Date(a.date))} onDelete={() => {}} loading={loading} /></div></div>} />
          </Routes>
        </Main>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
