import React from 'react';
import HeroFletiX from '../components/sections/HeroFletiX';
import FeaturesFletiX from '../components/sections/FeaturesFletiX';
import StatsFletiX from '../components/sections/StatsFletiX';
import CTAFletiX from '../components/sections/CTAFletiX';
import Footer from '../components/layout/Footer';

/**
 * Landing Page completa de FletiX
 * Página única enfocada 100% en FletiX
 */
const FletiXLandingPage = () => {
  return (
    <>
      {/* Hero principal con logo y CTAs */}
      <HeroFletiX />

      {/* Características del producto */}
      <FeaturesFletiX />

      {/* Estadísticas 
      <StatsFletiX />*/}

      {/* CTA Final */}
      <CTAFletiX />

      {/* Footer con redes sociales */}
      <Footer />
    </>
  );
};

export default FletiXLandingPage;