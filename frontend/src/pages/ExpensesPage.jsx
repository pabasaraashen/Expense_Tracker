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
      <h2 style={{fontSize:28, marginBottom:8}}>Expenses</h2>
      

      <div style={{display:'flex', gap:16}}>
        <div style={{flex:1}}>
          <ExpenseForm onSubmit={onAdd} loading={saving} />
          <div style={{background:'#fff', padding:16, borderRadius:12, marginBottom:12}}>
        <h3 style={{margin:0, textAlign:'center', fontSize:18}}>Total Expense: <span style={{color:'#d61d1a', fontSize:28, fontWeight:800}}>${total}</span></h3>
      </div>
        </div>
        <div style={{flex:1}}>
          <TransactionsList items={expenses} onDelete={(item) => onDelete(item._id || item.id)} loading={loading} />
        </div>
      </div>
    </Wrapper>
  );
}
