import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     Home 
     <Link to="/infinite-site/account">Account</Link>

     <BrowserRouter>
      <Routes>
        <Route path="/infinite-site/account" element={<div> Account </div>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
