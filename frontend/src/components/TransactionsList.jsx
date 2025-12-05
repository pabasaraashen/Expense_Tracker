import React from 'react';

export default function TransactionsList({ items=[], onDelete, loading }){
  if(loading) return <div className="p-3">Loading...</div>;
  if(!items.length) return <div className="p-3">No items</div>;

  return (
    <div className="list-group">
      {items.map(it=> (
        <div key={it._id || it.id} className="list-group-item d-flex justify-content-between align-items-center border-bottom">
          <div>
            <div className="d-flex align-items-center gap-2">
              <div className="fw-bold" style={{fontSize:18}}>{it.title}</div>
            </div>
            <div className="text-muted" style={{fontSize:14}}>{new Date(it.date).toLocaleDateString()}</div>
          </div>
          <div className="d-flex align-items-center" style={{gap:200}}>
            <div className="fw-bolder" style={{fontSize:18}}>${it.amount}</div>
              {onDelete && (
                <button onClick={()=> onDelete(it)} className="btn btn-sm rounded-2" style={{background:'#cf0606', color:'#fff', border:'none'}}>Delete</button>
              )}
          </div>
        </div>
      ))}
    </div>
  );
}
