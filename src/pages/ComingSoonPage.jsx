import React from 'react';
import { ArrowLeft } from 'lucide-react';
import saasProducts from '../data/saasProducts';

/**
 * Página "Próximamente" para SaaS en desarrollo
 */
const ComingSoonPage = ({ saasId, onNavigate }) => {
  const saas = saasProducts.find(s => s.id === saasId);
  
  if (!saas) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Botón Volver */}
      <button
        onClick={() => onNavigate('home')}
        className="fixed top-4 left-4 sm:top-8 sm:left-8 z-50 flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group text-sm sm:text-base"
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-semibold">Volver</span>
      </button>

      {/* Contenido central */}
      <div className="text-center max-w-2xl">
        {/* Logo */}
        <div className={`w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br ${saas.color.gradient} flex items-center justify-center shadow-2xl mb-6 sm:mb-8 mx-auto animate-float overflow-hidden`}>
            {saas.logo && saas.logo.length <= 4 ? (
                <span className="text-5xl sm:text-6xl">{saas.logo}</span>
            ) : (
                <img 
                src={saas.logo} 
                alt={`${saas.name} logo`} 
                className="w-full h-full object-contain p-3" 
                />
            )}
            </div>
        
        {/* Nombre */}
        <h1 className={`text-5xl sm:text-6xl md:text-7xl font-black mb-4 sm:mb-6 bg-gradient-to-r ${saas.color.gradient} bg-clip-text text-transparent px-4`}>
          {saas.name}
        </h1>
        
        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-6 sm:mb-8 px-4">
          {saas.tagline}
        </p>
        
        {/* Descripción */}
        <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12 px-4">
          {saas.description}
        </p>
        
        {/* Mensaje */}
        <div className="text-cyan-400 text-base sm:text-lg">
          Mantente atento a nuestras novedades 🚀
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;