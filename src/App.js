import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PropertyPage from './pages/PropertyPage'; 
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/property/:id?" element={<PropertyPage />} />
            <Route path='*' component={ErrorPage} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
