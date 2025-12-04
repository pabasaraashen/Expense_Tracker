import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DashboardChart({ incomes=[], expenses=[] }){
  const totalInc = incomes.reduce((s,i)=> s + Number(i.amount || 0), 0);
  const totalExp = expenses.reduce((s,e)=> s + Number(e.amount || 0), 0);
  const data = {
    labels: ['Incomes','Expenses'],
    datasets:[{ data: [totalInc, totalExp], backgroundColor:['#347d06','#bf0606'] }]
  };
  return <div style={{width: '100%', maxWidth:420}}><Doughnut data={data} /></div>;
}
