import React from 'react';
import { Download, Phone, CheckCircle } from 'lucide-react';

/**
 * CTA Final de FletiX
 * ESTANDARIZADA — Design tokens unificados
 * Cambios: max-w-6xl, SVGs reemplazados por Lucide, padding unificado
 */
const CTAFletiX = () => {

  const trustItems = [
    'Sin costo de registro',
    'Soporte 24/7',
    'Implementación inmediata'
  ];

  return (
    <section className="py-10 md:py-14 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Título principal */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          ¿Listo para Optimizar tu Logística?
        </h2>
        
        {/* Subtítulo */}
        <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Únete a las empresas que ya confían en FletiX para sus operaciones de transporte y más.
        </p>

        {/* Botones principales */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://play.google.com/store/apps/details?id=com.corebugcode.fletix"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl 
                       bg-white text-blue-900 font-bold text-base 
                       hover:bg-gray-100 transition-all duration-300 shadow-xl"
          >
            <Download className="w-5 h-5" />
            <span>Descargar Ahora</span>
          </a>

          <a
            href="https://wa.me/51973337625?text=Hola%20FletiX,%20quiero%20solicitar%20una%20demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl 
                       bg-green-600 text-white font-bold text-base 
                       hover:bg-green-700 transition-all duration-300 shadow-lg"
          >
            <Phone className="w-5 h-5" />
            <span>Contactar Ventas</span>
          </a>
        </div>

        {/* Elementos de confianza — Lucide CheckCircle en vez de SVG inline */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-blue-100">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Texto de contacto */}
        <div className="mt-10 pt-8 border-t border-blue-500/30">
          <p className="text-blue-100 text-sm">
            ¿Tienes preguntas? Contáctanos al{' '}
            <a href="tel:+51973337625" className="font-bold hover:underline text-white">
              +51 973 337 625
            </a>
            {' '}o escríbenos a{' '}
            <a href="mailto:fletixapp.contacto@gmail.com" className="font-bold hover:underline text-white">
              fletixapp.contacto@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTAFletiX;