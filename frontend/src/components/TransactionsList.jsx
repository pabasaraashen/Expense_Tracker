import React from 'react';

export default function TransactionsList({ items=[], onDelete, loading }){
  if(loading) return <div style={{padding:16}}>Loading...</div>;
  if(!items.length) return <div style={{padding:16}}>No items</div>;

  return (
    <div>
      {items.map(it=> (
        <div key={it._id || it.id} style={{display:'flex',justifyContent:'space-between', padding:'12px 8px', borderBottom:'1px solid #f0f0f0'}}>
          <div>
            <div style={{display:'flex', alignItems:'center', gap:10}}>
              <div style={{fontWeight:700, fontSize:18}}>{it.title}</div>
              
            </div>
            <div style={{fontSize:14, color:'var(--muted)'}}>{new Date(it.date).toLocaleDateString()}</div>
          </div>
          <div style={{display:'flex', gap:200, alignItems:'center'}}>
            <div style={{fontWeight:800, fontSize:18}}>${it.amount}</div>
              {onDelete && (
                <button onClick={()=> onDelete(it)} style={{padding:'6px 10px', background:'#cf0606', color:'#fff', border:'none', borderRadius:8, cursor:'pointer'}}>Delete</button>
              )}
          </div>
        </div>
      ))}
    </div>
  );
}
