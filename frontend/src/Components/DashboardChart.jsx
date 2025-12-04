import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import moment from 'moment';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function aggregateByMonth(items){
  const map = new Map();
  items.forEach(i => {
    const month = moment(i.date).format('YYYY-MM');
    map.set(month, (map.get(month) || 0) + Number(i.amount));
  });
  const entries = Array.from(map.entries()).sort((a,b) => a[0].localeCompare(b[0]));
  return entries;
}

export default function DashboardChart({ incomes = [], expenses = [] }){
  const inc = aggregateByMonth(incomes);
  const exp = aggregateByMonth(expenses);

  // build unified x axis
  const months = Array.from(new Set([...inc.map(i=>i[0]), ...exp.map(e=>e[0])])).sort();
  const incMap = new Map(inc);
  const expMap = new Map(exp);

  const data = {
    labels: months.map(m => moment(m + '-01').format('MMM YYYY')),
    datasets: [
      { label: 'Incomes', data: months.map(m => incMap.get(m) || 0), backgroundColor: '#42AD00' },
      { label: 'Expenses', data: months.map(m => expMap.get(m) || 0), backgroundColor: '#FF6692' }
    ]
  };

  const options = { responsive:true, plugins:{ legend:{ position:'top' } } };

  return <div style={{marginTop:20}}><Bar data={data} options={options} /></div>;
}
