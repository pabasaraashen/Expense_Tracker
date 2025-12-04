import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import api from './api';
import IncomeForm from './components/IncomeForm';
import ExpenseForm from './components/ExpenseForm';
import TransactionsList from './components/TransactionsList';
import DashboardChart from './components/DashboardChart';
import Spinner from './components/Spinner';

const Container = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 24px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
`;

const Row = styled.div`
  display:flex;
  gap:16px;
  align-items:flex-start;
`;

const Column = styled.div`
  flex:1;
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
    <Container>
      <h1>Expense Tracker</h1>
      {error && <div style={{color:'#ff4d4f', marginBottom:10}}>{error}</div>}
      <Row>
        <Column>
          <h3>Add Income</h3>
          <IncomeForm onSubmit={handleAddIncome} loading={saving} />

          <h3 style={{marginTop:20}}>Add Expense</h3>
          <ExpenseForm onSubmit={handleAddExpense} loading={saving} />
        </Column>

        <Column>
          <h3>Overview</h3>
          {loading ? <Spinner /> : <DashboardChart incomes={incomes} expenses={expenses} />}

          <h3 style={{marginTop:20}}>Incomes</h3>
          <TransactionsList items={incomes} onDelete={handleDeleteIncome} loading={loading} />

          <h3 style={{marginTop:20}}>Expenses</h3>
          <TransactionsList items={expenses} onDelete={handleDeleteExpense} loading={loading} />
        </Column>
      </Row>
    </Container>
  );
}

export default App;
