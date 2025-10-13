import React from 'react';
import { Download, UserPlus, ArrowRight } from 'lucide-react';
import fletixLogo from '../../assets/logos/logo_fletix.png';

/**
 * Hero principal de FletiX - Split Screen Moderno
 * Logo/Visual izquierda → Info/Botones derecha
 */
const HeroFletiX = () => {
  
  // Función para descargar vCard
  const handleAddContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:1.0
FN:FletiX - Core Bug Code
ORG:Core Bug Code
TEL;TYPE=CELL:+51973337625
EMAIL:core.bugcode@gmail.com
URL:https://corebug.com
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'FletiX_Contacto.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen flex items-center px-4 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Grid de 2 columnas en desktop, stack en móvil */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          
          {/* IZQUIERDA: Logo y Visual */}
          <div className="flex flex-col items-center justify-center relative order-2 md:order-1">
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
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg animate-bounce">
                ¡Disponible!
              </div>
              {/* <div className="absolute -bottom-4 -left-4 bg-cyan-400 text-black px-4 py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg">
                10K+ usuarios
              </div>*/}
            </div>
          </div>

          {/* DERECHA: Contenido */}
          <div className="text-center md:text-left order-1 md:order-2">
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
              Potenciando Conexiones
            </h2>

            {/* Descripción */}
            <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
              Conecta proveedores y empresas en tiempo real.
            </p>

            {/* Lista de beneficios */}
            <ul className="space-y-3 mb-10 inline-block text-left">
              {[
                'Publica y encuentra servicios logísticos',
                'Da mayor visibilidad a tus servicios, conectándote con clientes reales.',
                'Cotiza rutas en tiempo real',
                'Analytics y reportes avanzados'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 text-sm sm:text-base">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center md:justify-start">
              <a
                href="https://play.google.com/store/apps/details?id=com.corebugcode.fletix"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5" />
                <span>Descargar Ahora</span>
              </a>
              <button 
                onClick={handleAddContact}
                className="inline-flex items-center justify-center gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-base sm:text-lg hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
              >
                <UserPlus className="w-5 h-5" />
                <span>Agregar Contacto</span>
              </button>
            </div>

            {/* Powered by */}
            <div className="text-xs sm:text-sm text-gray-500">
              Desarrollado por <span className="text-cyan-400 font-semibold">Core Bug Code</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroFletiX;