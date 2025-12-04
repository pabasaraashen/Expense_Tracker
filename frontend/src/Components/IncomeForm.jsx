import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Form = styled.form`
  display:flex;
  flex-direction:column;
  gap:8px;
`;

const Input = styled.input`
  padding:8px;
  border:1px solid #e6e9ef;
  border-radius:6px;
`;

const Textarea = styled.textarea`
  padding:8px;
  border:1px solid #e6e9ef;
  border-radius:6px;
`;

const Button = styled.button`
  padding:8px 12px;
  border-radius:6px;
  border:0;
  background:#42AD00;
  color:#fff;
  cursor:pointer;
`;

export default function IncomeForm({ onSubmit, loading }){
  const [form, setForm] = useState({ title:'', amount:'', date: moment().format('YYYY-MM-DD'), category:'', description:'' });
  const [error, setError] = useState(null);

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const submit = async (e) => {
    e.preventDefault();
    setError(null);
    // simple validation
    if(!form.title || !form.amount || !form.date || !form.category) return setError('Please fill required fields');
    if(Number(form.amount) <= 0) return setError('Amount must be > 0');
    // normalize date to ISO
    const payload = { ...form, date: moment(form.date).toISOString() };
    await onSubmit(payload);
    setForm({ title:'', amount:'', date: moment().format('YYYY-MM-DD'), category:'', description:'' });
  }

  return (
    <Form onSubmit={submit}>
      {error && <div style={{color:'#ff0000'}}>{error}</div>}
      <Input name="title" placeholder="Title*" value={form.title} onChange={handleChange} />
      <Input name="amount" placeholder="Amount*" type="number" step="0.01" value={form.amount} onChange={handleChange} />
      <Input name="date" placeholder="Date*" type="date" value={form.date} onChange={handleChange} />
      <Input name="category" placeholder="Category*" value={form.category} onChange={handleChange} />
      <Textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} rows={3} />
      <Button type="submit" disabled={loading}>{loading ? 'Saving...' : 'Add Income'}</Button>
    </Form>
  );
}
