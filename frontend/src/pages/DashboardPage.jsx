import React from 'react';
import DashboardChart from '../components/DashboardChart';
import TransactionsList from '../components/TransactionsList';

export default function DashboardPage({ incomes, expenses, loading, onDeleteIncome, onDeleteExpense }){
  // derive totals
  const totalIncome = incomes.reduce((s,i)=> s + Number(i.amount || 0), 0);
  const totalExpense = expenses.reduce((s,e)=> s + Number(e.amount || 0), 0);
  const balance = totalIncome - totalExpense;

  return (
    <div className="p-3">
      <h2 className="mb-3" style={{color:'#222260'}}>Dashboard</h2>
      <div className="row g-3">
        <div className="col-12 col-lg-6">
          <div className="d-flex align-items-center justify-content-center" style={{minHeight:220}}>
            <DashboardChart incomes={incomes} expenses={expenses} />
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="bg-white p-3 rounded-3">
            <h4 className="m-0">Recent History</h4>
            <div className="hide-scrollbar mt-2" style={{maxHeight:300, overflowY:'auto'}}>
              {/* show merged recent incomes+expenses */}
              {(() => {
                const merged = [
                  ...incomes.map(i => ({...i, _kind: 'income'})),
                  ...expenses.map(e => ({...e, _kind: 'expense'}))
                ].sort((a,b)=> new Date(b.date) - new Date(a.date));
                const recent = merged.slice(0,10);
                return (
                  <TransactionsList items={recent} loading={loading} />
                );
              })()}
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3 mt-3 text-center">
        <div className="col-12 col-md-6">
          <div className="p-3 rounded-3" style={{background:'#e8e8e8'}}>
            <h4>Total Income</h4>
            <div style={{fontSize:28, fontWeight:700}}>${totalIncome}</div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="p-3 rounded-3" style={{background:'#e8e8e8'}}>
            <h4>Total Expense</h4>
            <div style={{fontSize:28, fontWeight:700}}>${totalExpense}</div>
          </div>
        </div>
      </div>

      <div className="mt-3 text-center">
        <div className="p-3 rounded-3" style={{background:'#e8e8e8'}}>
          <h4>Total Balance</h4>
          <div style={{fontSize:32, fontWeight:800, color: balance<0? '#ff4d4f':'#347d06'}}>${balance}</div>
        </div>
      </div>
      
    </div>
  );
}
