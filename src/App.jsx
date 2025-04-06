import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './components/HomePage';
import TemplateShowcase from './components/TemplateShowcase';
import TemplateDetailPage from './components/TemplateDetailPage';
import ContactPage from './components/ContactPage';
import DemoPage from './components/DemoPage';
import ReskillPage from './components/ReskillPage';
import PricingPage from './components/PricingPage';

const App = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/template-list" element={<TemplateShowcase />} />
            <Route path="/template/:id" element={<TemplateDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/reskill" element={<ReskillPage />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App; 