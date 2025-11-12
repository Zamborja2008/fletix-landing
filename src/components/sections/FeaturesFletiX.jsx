import React from 'react';
import { Truck, Users, Package, Zap, UserPlus, CircleDollarSign } from 'lucide-react';

/**
 * Sección de Características de FletiX - Versión Profesional
 * Fondo blanco, diseño limpio tipo eFletex
 */
const FeaturesFletiX = () => {
  
  const features = [
    {
      icon: UserPlus,
      title: 'Registro Gratuito',
      description: 'Accede sin costo a la base de datos de proveedores logísticos más grande del Perú',
      color: 'blue'
    },
    {
      icon: Truck,
      title: 'Publicación de Servicios',
      description: 'Aumenta tu visibilidad y haz que clientes potenciales te contacten directamente',
      color: 'orange'
    },
    {
      icon: CircleDollarSign,
      title: 'Cotización Inteligente',
      description: 'Sistema automatizado para cotizar rutas y optimizar tus precios de transporte',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Red de Transportistas',
      description: 'Conecta con miles de transportistas verificados y certificados a nivel nacional',
      color: 'orange'
    },
    {
      icon: Package,
      title: 'Dimensionamiento de Carga',
      description: 'Calcula automáticamente el tipo de vehículo ideal según tu mercadería',
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'Disponibilidad en Tiempo Real',
      description: 'Publica la disponibilidad de tus vehículos y encuentra carga al instante',
      color: 'orange'
    }
  ];

  return (
    <div className="py-16 sm:py-20 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Título de sección - más profesional */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-lg font-semibold mb-4">
            BENEFICIOS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            ¿Por qué elegir <span className="text-blue-600">FletiX</span>?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Soluciones integrales diseñadas para llevar tu operación logística al siguiente nivel
          </p>
        </div>

        {/* Grid de características - diseño limpio sin efectos glow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isBlue = feature.color === 'blue';
            
            return (
              <div
                key={index}
                className="group p-6 sm:p-8 rounded-xl bg-gray-50 border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
              >
                {/* Icono profesional */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-lg ${isBlue ? 'bg-blue-600' : 'bg-orange-500'} flex items-center justify-center text-white mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                
                {/* Título */}
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                
                {/* Descripción */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA adicional */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="https://wa.me/51973337625"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg"
          >
            Solicitar Presentación Comercial
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturesFletiX;