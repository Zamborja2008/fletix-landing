import React from 'react';
import { Download, UserPlus, ArrowRight } from 'lucide-react';
import fletixLogo from '../../assets/logos/logo_fletix.png';

/**
 * OPCIÓN C: Hero Moderno
 * Split Screen: Logo/Visual izquierda → Info/Botones derecha
 */
const HeroModerno = () => {
  return (
    <div className="min-h-screen flex items-center px-4 py-12">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Grid de 2 columnas en desktop, stack en móvil */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* IZQUIERDA: Logo y Visual */}
          <div className="flex flex-col items-center justify-center relative">
            {/* Círculo de fondo */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
            
            {/* Logo container */}
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-500 p-1 shadow-2xl animate-float">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                  <img 
                    src={fletixLogo} 
                    alt="FletiX logo" 
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>
              </div>
              
              {/* Badges flotantes */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce">
                ¡Nuevo!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-cyan-400 text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                10K+ usuarios
              </div>
            </div>
          </div>

          {/* DERECHA: Contenido */}
          <div className="text-center md:text-left">
            {/* Badge superior */}
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-400 text-sm font-semibold">Plataforma de Logística</span>
            </div>

            {/* Título */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                FletiX
              </span>
            </h1>

            {/* Tagline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-bold mb-4">
              Logística inteligente
            </h2>

            {/* Descripción */}
            <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
              Conecta transportistas y empresas en tiempo real. Optimiza rutas, reduce costos y escala tu negocio con tecnología de punta.
            </p>

            {/* Lista de beneficios */}
            <ul className="space-y-3 mb-10 text-left">
              {[
                'Rastreo GPS en tiempo real',
                'Optimización automática de rutas',
                'Red verificada de transportistas',
                'Analytics y reportes avanzados'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="https://play.google.com/store/apps"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5" />
                <span>Descargar Ahora</span>
              </a>
              <button className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <UserPlus className="w-5 h-5" />
                <span>Agregar Contacto</span>
              </button>
            </div>

            {/* Powered by */}
            <div className="text-sm text-gray-500">
              Desarrollado por <span className="text-cyan-400 font-semibold">Core Bug Code</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroModerno;