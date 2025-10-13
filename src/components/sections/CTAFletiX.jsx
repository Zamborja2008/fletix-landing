import React from 'react';
import { Send, Download } from 'lucide-react';

/**
 * Sección CTA Final de FletiX
 */
const CTAFletiX = () => {
  return (
    <div className="py-16 sm:py-20 md:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Título */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
          ¿Listo para hacer<span className="text-cyan-400"> crecer</span> tú red de clientes?
        </h2>
        
        {/* Descripción */}
        <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12 px-4 max-w-2xl mx-auto">
          Únete a las empresas que ya confían en FletiX
        </p>
        
        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.corebugcode.fletix"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold text-lg sm:text-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            <Send className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            <span>Comenzar Ahora</span>
          </a>
          
           {/*<a
            href="https://apps.apple.com/"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold text-lg sm:text-xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <Download className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>Descargar App</span>
          </a>*/}
        </div>

        {/* Texto adicional */}
        <div className="mt-8 sm:mt-10 text-sm sm:text-base text-gray-500">
          Sin costo
        </div>
      </div>
    </div>
  );
};

export default CTAFletiX;