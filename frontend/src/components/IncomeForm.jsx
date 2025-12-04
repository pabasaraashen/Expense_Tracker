import React, { useState } from 'react';

export default function IncomeForm({ onSubmit, loading }){
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0,10));
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const submit = (e) =>{
    e.preventDefault();
    if(!amount || !category || !description) return;
    onSubmit({ title, amount: Number(amount), date, category, description });
    setAmount(''); setDescription('');
  };

  return (
    <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:12}}>
      <label style={{fontSize:16, fontWeight:600, display:'flex', flexDirection:'column', gap:4}}>
        Title
        <input value={title} onChange={e=>setTitle(e.target.value)} style={{fontSize:16, padding:'8px 10px'}} />
      </label>
      <label style={{fontSize:16, fontWeight:600, display:'flex', flexDirection:'column', gap:4}}>
        Amount
        <input value={amount} onChange={e=>setAmount(e.target.value)} type="number" style={{fontSize:16, padding:'8px 10px'}} />
      </label>
      <label style={{fontSize:16, fontWeight:600, display:'flex', flexDirection:'column', gap:4}}>
        Category
        <input value={category} onChange={e=>setCategory(e.target.value)} style={{fontSize:16, padding:'8px 10px'}} />
      </label>
      <label style={{fontSize:16, fontWeight:600, display:'flex', flexDirection:'column', gap:4}}>
        Description
        <input value={description} onChange={e=>setDescription(e.target.value)} style={{fontSize:16, padding:'8px 10px'}} />
      </label>
      <label style={{fontSize:16, fontWeight:600, display:'flex', flexDirection:'column', gap:4}}>
        Date
        <input value={date} onChange={e=>setDate(e.target.value)} type="date" style={{fontSize:16, padding:'8px 10px'}} />
      </label>
      <button type="submit" disabled={loading} style={{padding:'10px 16px', background:'#1a1a1a', color:'#fff', fontSize:16, fontWeight:700}}>{loading? 'Saving...':'Add Income'}</button>
    </form>
  );
}
