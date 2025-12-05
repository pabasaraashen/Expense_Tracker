import React, { useEffect, useState } from 'react';
import api from './api';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';
import IncomesPage from './pages/IncomesPage';
import ExpensesPage from './pages/ExpensesPage';
import TransactionsList from './components/TransactionsList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
      <div className="d-flex gap-3 p-4 min-vh-100 flex-wrap" style={{minHeight:'calc(100vh - 40px)'}}>
        <Sidebar />
        <main className="flex-grow-1 rounded-3 p-3" style={{background:'linear-gradient(180deg,var(--card-bg),#fbf6fb)', minWidth:'300px'}}>
          {error && <div className="text-danger mb-2">{error}</div>}
          <Routes>
            <Route path="/" element={<DashboardPage incomes={incomes} expenses={expenses} loading={loading} onDeleteIncome={handleDeleteIncome} onDeleteExpense={handleDeleteExpense} />} />
            <Route path="/incomes" element={<IncomesPage incomes={incomes} onAdd={handleAddIncome} onDelete={handleDeleteIncome} loading={loading} saving={saving} />} />
            <Route path="/expenses" element={<ExpensesPage expenses={expenses} onAdd={handleAddExpense} onDelete={handleDeleteExpense} loading={loading} saving={saving} />} />
            <Route path="/transactions" element={<div><h2 style={{fontSize:28}}>All Transactions</h2><div style={{maxHeight:600, overflowY:'auto'}}><TransactionsList items={[...incomes, ...expenses].sort((a,b)=> new Date(b.date)-new Date(a.date))} onDelete={() => {}} loading={loading} /></div></div>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
