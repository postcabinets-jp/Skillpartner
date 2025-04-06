import React from 'react';
import HeroSection from '../components/HomePage/HeroSection';
import FeaturesSection from '../components/HomePage/FeaturesSection';
import TemplatesPreview from '../components/HomePage/TemplatesPreview';
import Testimonials from '../components/HomePage/Testimonials';
import PricingSection from '../components/HomePage/PricingSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesSection />
      <TemplatesPreview />
      <Testimonials />
      <PricingSection />
      {/* 他のセクションは後で追加 */}
    </div>
  );
};

export default HomePage; 