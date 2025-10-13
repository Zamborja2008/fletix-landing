import React from 'react';
import { Truck, Users, Package, Zap,UserPlus, CircleDollarSign } from 'lucide-react';

/**
 * Sección de Características de FletiX
 */
const FeaturesFletiX = () => {
  
  const features = [
    {
      icon: UserPlus,
      title: 'Regístrate gratis',
      description: 'Accede a la base de datos de proveedores más grande del Perú'
    },
    {
      icon: Truck,
      title: 'Publica y encuentra servicios',
      description: 'Haz que otros te contacten mas rápido',
    },
    {
      icon: CircleDollarSign,
      title: 'Cotiza rutas',
      description: 'No pierdas dinero y cotiza tus servicios de transporte',
    },
    {
      icon: Users,
      title: 'Red de Transportistas',
      description: 'Conecta con miles de transportistas verificados y confiables'
    },
    {
      icon: Package,
      title: 'Dimensiona tu carga',
      description: 'Elige el tipo de unidad correcta para tu mercadería',
    },
    {
      icon: Zap,
      title: 'Disponibilidad inmediata',
      description: 'Publica la disponibilidad de tus vehiculos en tu ciudad',
    }
  ];

  return (
    <div className="py-16 sm:py-20 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Título de sección */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            ¿Por qué elegir <span className="text-cyan-400">FletiX</span>?
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Características diseñadas para llevar tu logística al siguiente nivel
          </p>
        </div>

        {/* Grid de características */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <div
                key={index}
                className="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-xl"
              >
                {/* Icono */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                
                {/* Título */}
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                  {feature.title}
                </h3>
                
                {/* Descripción */}
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesFletiX;