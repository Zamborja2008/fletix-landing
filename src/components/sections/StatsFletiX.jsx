import React from 'react';

/**
 * Sección de Estadísticas de FletiX
 */
const StatsFletiX = () => {
  
  const stats = [
    { number: '10K+', label: 'Transportistas Activos', sublabel: 'Verificados y confiables' },
    { number: '50K+', label: 'Envíos Completados', sublabel: 'Con éxito garantizado' },
    { number: '99%', label: 'Satisfacción', sublabel: 'De nuestros clientes' }
  ];

  return (
    <div className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-b from-transparent via-cyan-950/20 to-transparent">
      <div className="max-w-6xl mx-auto">
        
        {/* Título opcional */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Números que <span className="text-cyan-400">hablan por sí solos</span>
          </h2>
        </div>

        {/* Grid de estadísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
            >
              {/* Número */}
              <div className="text-5xl sm:text-6xl md:text-7xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {stat.number}
              </div>
              
              {/* Label principal */}
              <div className="text-xl sm:text-2xl text-white font-bold mb-2">
                {stat.label}
              </div>
              
              {/* Sublabel */}
              <div className="text-sm sm:text-base text-gray-400">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsFletiX;