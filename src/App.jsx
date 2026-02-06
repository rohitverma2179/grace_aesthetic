import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar.jsx';
import Footer from './component/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';

function App() {
  return (
    <Router>
      <div className="antialiased text-luxury-dark min-h-screen flex flex-col">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;