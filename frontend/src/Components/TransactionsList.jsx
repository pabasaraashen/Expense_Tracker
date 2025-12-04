import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const List = styled.ul`
  margin-top:10px;
  display:flex;
  flex-direction:column;
  gap:8px;
`;

const Item = styled.li`
  padding:10px;
  border:1px solid #eee;
  border-radius:6px;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

const Small = styled.div`
  color:#666;
  font-size:0.9rem;
`;

const Btn = styled.button`
  padding:6px 8px;
  border-radius:6px;
  border:0;
  background:#ff4d4f;
  color:#fff;
  cursor:pointer;
`;

export default function TransactionsList({ items = [], onDelete, loading }){
  if(loading) return <div>Loading...</div>;
  return (
    <List>
      {items.length === 0 && <div>No items</div>}
      {items.map(i => (
        <Item key={i._id || i.id}>
          <div>
            <div><strong>{i.title}</strong></div>
            <Small>{i.category} • {moment(i.date).format('MMM D, YYYY')}</Small>
          </div>
          <div style={{display:'flex', gap:8, alignItems:'center'}}>
            <div style={{marginRight:8}}>{i.amount}</div>
            <Btn onClick={() => onDelete(i._id || i.id)}>Delete</Btn>
          </div>
        </Item>
      ))}
    </List>
  );
}
