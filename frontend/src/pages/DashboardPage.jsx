import React from 'react';
import styled from 'styled-components';
import DashboardChart from '../components/DashboardChart';
import TransactionsList from '../components/TransactionsList';

const Wrapper = styled.div`
  padding: 12px 18px;
`;

const Header = styled.h2`
  margin:0 0 18px 0; color:#222260;
`;

const Row = styled.div`
  display:flex; gap:18px; align-items:flex-start;
`;

const Col = styled.div`
  flex:1;
`;

export default function DashboardPage({ incomes, expenses, loading, onDeleteIncome, onDeleteExpense }){
  // derive totals
  const totalIncome = incomes.reduce((s,i)=> s + Number(i.amount || 0), 0);
  const totalExpense = expenses.reduce((s,e)=> s + Number(e.amount || 0), 0);
  const balance = totalIncome - totalExpense;

  return (
    <Wrapper>
      <Header>All Transactions</Header>
      <Row>
        <Col style={{flex:2}}>
          <DashboardChart incomes={incomes} expenses={expenses} />
        </Col>
        <Col style={{flex:1}}>
          <div style={{background:'#fff', padding:12, borderRadius:12}}>
            <h4 style={{margin:0}}>Recent History</h4>
            {/* show merged recent incomes+expenses */}
            {(() => {
              const merged = [
                ...incomes.map(i => ({...i, _kind: 'income'})),
                ...expenses.map(e => ({...e, _kind: 'expense'}))
              ].sort((a,b)=> new Date(b.date) - new Date(a.date));
              const recent = merged.slice(0,5);
              return (
                <TransactionsList items={recent} onDelete={(item) => {
                  if(item._kind === 'income') return onDeleteIncome(item._id || item.id);
                  return onDeleteExpense(item._id || item.id);
                }} />
              );
            })()}
          </div>
        </Col>
      </Row>

      <Row style={{marginTop:18}}>
        <Col>
          <div style={{background:'#fff', padding:18, borderRadius:12}}>
            <h4>Total Income</h4>
            <div style={{fontSize:28, fontWeight:700}}>${totalIncome}</div>
          </div>
        </Col>
        <Col>
          <div style={{background:'#fff', padding:18, borderRadius:12}}>
            <h4>Total Expense</h4>
            <div style={{fontSize:28, fontWeight:700}}>${totalExpense}</div>
          </div>
        </Col>
      </Row>

      <div style={{marginTop:20, textAlign:'center'}}>
        <div style={{display:'inline-block', background:'#fff', padding:18, borderRadius:12}}>
          <h4>Total Balance</h4>
          <div style={{fontSize:32, fontWeight:800, color: balance<0? '#ff4d4f':'#42AD00'}}>${balance}</div>
        </div>
      </div>
    </Wrapper>
  );
}
