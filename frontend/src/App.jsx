import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';
import IncomesPage from './pages/IncomesPage';
import ExpensesPage from './pages/ExpensesPage';

function App(){
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-r from-pink-50 via-purple-50 to-pink-50 p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <Sidebar />
          </div>
          <main className="col-span-9">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/transactions" element={<div>Transactions view coming soon</div>} />
              <Route path="/incomes" element={<IncomesPage />} />
              <Route path="/expenses" element={<ExpensesPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
