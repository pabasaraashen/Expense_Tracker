import React from 'react';

export default function TransactionsList({ items=[], onDelete, loading }){
  if(loading) return <div>Loading...</div>;
  if(!items.length) return <div style={{padding:12}}>No items</div>;

  return (
    <div>
      {items.map(it=> (
        <div key={it._id || it.id} style={{display:'flex',justifyContent:'space-between', padding:8, borderBottom:'1px solid #f0f0f0'}}>
          <div>
            <div style={{display:'flex', alignItems:'center', gap:8}}>
              <div style={{fontWeight:700}}>{it.title}</div>
              {/* badge: determine kind */}
              {(() => {
                const kind = it._kind || (it.type ? (String(it.type).toLowerCase().includes('income') ? 'income' : 'expense') : 'expense');
                const bg = kind === 'income' ? 'var(--positive)' : 'var(--danger)';
                return (
                  <span style={{background:bg, color:'#fff', padding:'2px 8px', borderRadius:8, fontSize:12, fontWeight:700}}>{kind === 'income' ? 'Income' : 'Expense'}</span>
                )
              })()}
            </div>
            <div style={{fontSize:12, color:'#888'}}>{new Date(it.date).toLocaleDateString()}</div>
          </div>
          <div style={{display:'flex', gap:8, alignItems:'center'}}>
            <div style={{fontWeight:700}}>${it.amount}</div>
            {onDelete && <button onClick={()=> onDelete(it)}>Delete</button>}
          </div>
        </div>
      ))}
    </div>
  );
}
