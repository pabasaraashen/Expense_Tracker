import React, { useEffect, useState } from 'react';
// using Tailwind for layout and global styling
import api from './api';
import IncomeForm from './components/IncomeForm';
import ExpenseForm from './components/ExpenseForm';
import TransactionsList from './components/TransactionsList';
import DashboardChart from './components/DashboardChart';
import Spinner from './components/Spinner';

// layout handled with Tailwind classes below

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
    }catch(err){
      console.error(err);
      setError('Failed to load data');
    } finally { setLoading(false); }
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
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow mt-8">
      <h1 className="text-2xl font-semibold mb-4">Expense Tracker</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="flex gap-6 items-start">
        <div className="flex-1">
          <h3 className="text-lg font-medium mb-2">Add Income</h3>
          <IncomeForm onSubmit={handleAddIncome} loading={saving} />

          <h3 className="text-lg font-medium mt-6 mb-2">Add Expense</h3>
          <ExpenseForm onSubmit={handleAddExpense} loading={saving} />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-medium mb-2">Overview</h3>
          {loading ? <Spinner /> : <DashboardChart incomes={incomes} expenses={expenses} />}

          <h3 className="text-lg font-medium mt-6 mb-2">Incomes</h3>
          <TransactionsList items={incomes} onDelete={handleDeleteIncome} loading={loading} />

          <h3 className="text-lg font-medium mt-6 mb-2">Expenses</h3>
          <TransactionsList items={expenses} onDelete={handleDeleteExpense} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default App;
