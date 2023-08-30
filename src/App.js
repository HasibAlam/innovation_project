import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './homepage.js';
import AuditPage from './Audit.js';
import Footer from './footer';
import Header from './header.js';
import './skulls-and-crossbones-font/fonts.css'; // Import the fonts CSS fil


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/audit" element={<AuditPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
