import React from 'react';
import styled from 'styled-components';
import IncomeForm from '../components/IncomeForm';
import TransactionsList from '../components/TransactionsList';

const Wrapper = styled.div`
  padding:12px 18px;
`;

export default function IncomesPage({ incomes, onAdd, onDelete, loading, saving }){
  const total = incomes.reduce((s,i)=> s + Number(i.amount||0), 0);
  return (
    <Wrapper>
      <h2 style={{fontSize:28, marginBottom:8}}>Incomes</h2>
      <div style={{background:'#fff', padding:16, borderRadius:12, marginBottom:12}}>
        <h3 style={{margin:0, textAlign:'center', fontSize:18}}>Total Income: <span style={{color:'#42AD00', fontSize:28, fontWeight:800}}>${total}</span></h3>
      </div>

      <div style={{display:'flex', gap:16}}>
        <div style={{flex:1}}>
          <IncomeForm onSubmit={onAdd} loading={saving} />
        </div>
        <div style={{flex:1}}>
          <TransactionsList items={incomes} onDelete={(item) => onDelete(item._id || item.id)} loading={loading} />
        </div>
      </div>
    </Wrapper>
  );
}
