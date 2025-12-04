import React from 'react';
import styled from 'styled-components';
import ExpenseForm from '../components/ExpenseForm';
import TransactionsList from '../components/TransactionsList';

const Wrapper = styled.div`
  padding:12px 18px;
`;

export default function ExpensesPage({ expenses, onAdd, onDelete, loading, saving }){
  const total = expenses.reduce((s,i)=> s + Number(i.amount||0), 0);
  return (
    <Wrapper>
      <h2>Expenses</h2>
      <div style={{background:'#fff', padding:12, borderRadius:12, marginBottom:12}}>
        <h3 style={{margin:0, textAlign:'center'}}>Total Expense: <span style={{color:'#FF6692'}}>${total}</span></h3>
      </div>

      <div style={{display:'flex', gap:16}}>
        <div style={{width:300}}>
          <ExpenseForm onSubmit={onAdd} loading={saving} />
        </div>
        <div style={{flex:1}}>
          <TransactionsList items={expenses} onDelete={(item) => onDelete(item._id || item.id)} loading={loading} />
        </div>
      </div>
    </Wrapper>
  );
}
