import React from 'react';
import IncomeForm from '../components/IncomeForm';
import TransactionsList from '../components/TransactionsList';

export default function IncomesPage({ incomes, onAdd, onDelete, loading, saving }){
  const total = incomes.reduce((s,i)=> s + Number(i.amount||0), 0);
  return (
    <div className="p-3">
      <h2 style={{fontSize:28, marginBottom:8}}>Incomes</h2>
      
      <div className="row g-3">
        <div className="col-12 col-lg-6">
          <IncomeForm onSubmit={onAdd} loading={saving} />
          <div className="bg-white p-3 rounded-3 mb-3">
            <h3 className="text-center" style={{margin:25, fontSize:18}}>Total Income: <span style={{color:'#14b324', fontSize:28, fontWeight:800}}>${total}</span></h3>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div style={{maxHeight:500, overflowY:'auto'}}>
            <TransactionsList items={incomes} onDelete={(item) => onDelete(item._id || item.id)} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
}
