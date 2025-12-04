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
      <h2>Incomes</h2>
      <div style={{background:'#fff', padding:12, borderRadius:12, marginBottom:12}}>
        <h3 style={{margin:0, textAlign:'center'}}>Total Income: <span style={{color:'#42AD00'}}>${total}</span></h3>
      </div>

      <div style={{display:'flex', gap:16}}>
        <div style={{width:300}}>
          <IncomeForm onSubmit={onAdd} loading={saving} />
        </div>
        <div style={{flex:1}}>
          <TransactionsList items={incomes} onDelete={(item) => onDelete(item._id || item.id)} loading={loading} />
        </div>
      </div>
    </Wrapper>
  );
}
