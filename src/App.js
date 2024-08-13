import React from 'react';
import './App.css';
import Consultant from './pages/consultant_list/cons_list_var';
import Staff from './pages/staff_list/staff';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Consultant />} />
          <Route path="/staff" element={<Staff />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
