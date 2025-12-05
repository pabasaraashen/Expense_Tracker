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
    <form onSubmit={submit} className="d-flex flex-column gap-3">
      <div className="mb-2">
        <label className="form-label fw-semibold">Title</label>
        <input value={title} onChange={e=>setTitle(e.target.value)} className="form-control" style={{fontSize:16}} />
      </div>
      <div className="mb-2">
        <label className="form-label fw-semibold">Amount</label>
        <input value={amount} onChange={e=>setAmount(e.target.value)} type="number" className="form-control" style={{fontSize:16}} />
      </div>
      <div className="mb-2">
        <label className="form-label fw-semibold">Category</label>
        <input value={category} onChange={e=>setCategory(e.target.value)} className="form-control" style={{fontSize:16}} />
      </div>
      <div className="mb-2">
        <label className="form-label fw-semibold">Description</label>
        <input value={description} onChange={e=>setDescription(e.target.value)} className="form-control" style={{fontSize:16}} />
      </div>
      <div className="mb-2">
        <label className="form-label fw-semibold">Date</label>
        <input value={date} onChange={e=>setDate(e.target.value)} type="date" className="form-control" style={{fontSize:16}} />
      </div>
      <button type="submit" disabled={loading} className="btn btn-dark fw-bold" style={{fontSize:16}}>{loading? 'Saving...':'Add Income'}</button>
    </form>
  );
}
