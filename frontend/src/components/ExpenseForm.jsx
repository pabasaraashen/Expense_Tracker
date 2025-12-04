import React, { useState } from 'react';

export default function ExpenseForm({ onSubmit, loading }){
  const [title, setTitle] = useState('Groceries');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0,10));
  const [category, setCategory] = useState('Groceries');
  const [description, setDescription] = useState('');

  const submit = (e) =>{
    e.preventDefault();
    if(!amount || !category || !description) return;
    onSubmit({ title, amount: Number(amount), date, category, description });
    setAmount(''); setDescription('');
  };

  return (
    <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:8}}>
      <label>Title<input value={title} onChange={e=>setTitle(e.target.value)} /></label>
      <label>Amount<input value={amount} onChange={e=>setAmount(e.target.value)} type="number" /></label>
      <label>Category<input value={category} onChange={e=>setCategory(e.target.value)} /></label>
      <label>Description<input value={description} onChange={e=>setDescription(e.target.value)} /></label>
      <label>Date<input value={date} onChange={e=>setDate(e.target.value)} type="date" /></label>
      <button type="submit" disabled={loading} style={{padding:8}}>{loading? 'Saving...':'Add Expense'}</button>
    </form>
  );
}
