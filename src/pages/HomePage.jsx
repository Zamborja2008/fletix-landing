import React from 'react';
import Hero from '../components/sections/Hero';
import SaasCard from '../components/common/SaasCard';
import AddContactButton from '../components/common/AddContactButton';
import Footer from '../components/layout/Footer';
import saasProducts from '../data/saasProducts';

/**
 * Página Principal (Home)
 * Muestra el hero, botón de contacto, grid de productos SaaS y footer
 */
const HomePage = ({ onNavigate }) => {
  
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Botón Agregar Contacto - Visible de inmediato */}
      <div className="flex justify-center pb-6 sm:pb-8 px-4">
        <AddContactButton />
      </div>

      {/* Sección de Productos SaaS */}
      <div className="py-4 sm:py-6 px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Título de sección - Más compacto */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Nuestros <span className="text-cyan-400">Productos</span>
            </h2>
            {/*<p className="text-sm sm:text-base text-gray-400 px-4">
              Soluciones innovadoras para impulsar tu negocio
            </p>*/}
          </div>

          {/* Grid de tarjetas SaaS - Compacto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {saasProducts.map((saas, index) => (
              <SaasCard
                key={saas.id}
                saas={saas}
                index={index}
                onClick={() => onNavigate(saas.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer con redes sociales */}
      <Footer />
    </>
  );
};

export default HomePage;