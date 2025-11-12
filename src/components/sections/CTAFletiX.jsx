import React from 'react';
import { Download, Phone } from 'lucide-react';

/**
 * CTA Final de FletiX - Versión Profesional
 * Diseño limpio y corporativo
 */
const CTAFletiX = () => {
  
  return (
    <div className="py-20 sm:py-24 md:py-28 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Título principal */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
          ¿Listo para Optimizar tu Logística?
        </h2>
        
        {/* Subtítulo */}
        <p className="text-xl sm:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
          Únete a cientos de empresas que ya confían en FletiX para sus operaciones de transporte
        </p>

        {/* Botones principales */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://play.google.com/store/apps/details?id=com.corebugcode.fletix"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-white text-blue-900 font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
          >
            <Download className="w-5 h-5" />
            <span>Descargar Ahora</span>
          </a>

          <a
            href="https://wa.me/51973337625?text=Hola%20FletiX,%20quiero%20solicitar%20una%20demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-green-600 text-white font-bold text-lg hover:bg-green-700 transition-all duration-300 shadow-lg"
          >
            <Phone className="w-5 h-5" />
            <span>Contactar Ventas</span>
          </a>
        </div>

        {/* Elementos de confianza */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-blue-100">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Sin costo de registro</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Soporte 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Implementación inmediata</span>
          </div>
        </div>

        {/* Texto de contacto */}
        <div className="mt-10 pt-8 border-t border-blue-500/30">
          <p className="text-blue-100 text-sm">
            ¿Tienes preguntas? Contáctanos al{' '}
            <a href="tel:+51973337625" className="font-bold hover:underline">
              +51 973 337 625
            </a>
            {' '}o escríbenos a{' '}
            <a href="mailto:core.bugcode@gmail.com" className="font-bold hover:underline">
              core.bugcode@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTAFletiX;