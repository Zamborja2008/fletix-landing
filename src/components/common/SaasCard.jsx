import React from 'react';
import { Download } from 'lucide-react';

/**
 * Tarjeta de producto SaaS - DISEÑO HORIZONTAL COMPACTO
 * Logo más grande a la izquierda → Info derecha → Botón centro abajo
 * Todas las tarjetas con la MISMA ALTURA
 */
const SaasCard = ({ saas, onClick, index }) => {
  const { name, tagline, description, logo, color, downloadLinks } = saas;
  
  return (
    <div
      className="group relative h-full"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Efecto glow hover */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${color.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10 hidden sm:block`} 
      />
      
      {/* Tarjeta principal - ALTURA FIJA para todas */}
      <div 
        onClick={onClick}
        className="relative h-full min-h-[180px] p-4 sm:p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 cursor-pointer hover:scale-[1.02] hover:shadow-xl active:scale-95 flex flex-col"
      >
        {/* Layout horizontal: Logo + Info */}
        <div className="flex items-start gap-4 flex-1 mb-4">
          
          {/* Logo a la IZQUIERDA - MÁS GRANDE */}
          <div className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-gradient-to-br ${color.gradient} flex items-center justify-center shadow-lg overflow-hidden`}>
            {logo && logo.length <= 4 ? (
              <span className="text-3xl sm:text-4xl">{logo}</span>
            ) : (
              <img 
                src={logo} 
                alt={`${name} logo`} 
                className="w-full h-full object-contain p-2" 
              />
            )}
          </div>

          {/* Info a la DERECHA - Alineada con el logo */}
          <div className="flex-1 min-w-0 flex flex-col justify-center">
            {/* Nombre */}
            <h3 className={`text-xl sm:text-2xl font-bold mb-1 bg-gradient-to-r ${color.gradient} bg-clip-text text-transparent leading-tight`}>
              {name}
            </h3>

            {/* Tagline */}
            <p className="text-gray-300 text-xs sm:text-sm font-medium mb-2 leading-tight">
              {tagline}
            </p>

            {/* Descripción - Limitada a 2 líneas */}
            <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>
        </div>

        {/* Botón y texto CENTRADOS abajo */}
        <div className="flex flex-col items-center gap-2">
          {/* Botón Play Store */}
          <a
            href={downloadLinks.playStore}
            onClick={(e) => e.stopPropagation()}
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r ${color.gradient} hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-semibold text-white text-sm group-hover:scale-105`}
          >
            <Download className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Descargar</span>
          </a>

          {/* Indicador de click */}
          <div className="text-xs text-gray-500 flex items-center gap-1">
            <span>Toca para ver más</span>
            <span className="text-cyan-400">→</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaasCard;