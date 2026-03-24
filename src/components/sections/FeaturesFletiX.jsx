import React from 'react';
import { Truck, Users, Zap, UserPlus, CircleDollarSign, Package, Star, CheckCircle, ArrowRight } from 'lucide-react';

/**
 * Sección de Características de FletiX — FUSIONADA con Tools
 * Las cards de Cotización y Dimensionamiento incluyen detalle expandido
 */
const FeaturesFletiX = () => {

  // Cards estándar (4)
  const standardFeatures = [
    {
      icon: UserPlus,
      title: 'Registro Gratuito',
      description: 'Accede sin costo a la base de datos de proveedores logísticos más grande del Perú.',
      color: 'blue'
    },
    {
      icon: Truck,
      title: 'Publicación de Servicios',
      description: 'Aumenta tu visibilidad y haz que clientes potenciales te contacten directamente.',
      color: 'orange'
    },
    {
      icon: Users,
      title: 'Red de Transportistas',
      description: 'Conecta con transportistas verificados y certificados a nivel nacional.',
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'Disponibilidad en Tiempo Real',
      description: 'Publica la disponibilidad de tus vehículos y encuentra carga al instante.',
      color: 'orange'
    }
  ];

  // Cards destacadas con detalle (2) — antes eran Tools
  const toolFeatures = [
    {
      icon: CircleDollarSign,
      title: 'Cotizador de Rutas',
      description: 'Estima la tarifa de tu flete en 7 simples pasos con constantes reales del mercado peruano.',
      color: 'blue',
      highlights: [
        'Wizard guiado paso a paso',
        'Cálculo de seguro y depreciación',
        'Resultado en soles por viaje'
      ]
    },
    {
      icon: Package,
      title: 'Dimensionador de Carga',
      description: 'Ingresa peso, volumen y dimensiones de tu carga y te recomendamos el vehículo óptimo.',
      color: 'orange',
      highlights: [
        'Desde furgón 1TN hasta cama baja 30TN',
        'Factor de seguridad del 5% incluido',
        'Recomendación instantánea'
      ]
    }
  ];

  const colorMap = {
    blue: { iconBg: 'bg-blue-600', hoverBorder: 'hover:border-blue-100' },
    orange: { iconBg: 'bg-orange-500', hoverBorder: 'hover:border-orange-100' }
  };

  return (
    <section className="py-10 md:py-14 px-4 bg-white" id="features">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4" />
            Beneficios
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir Fleti<span style={{ color: '#26A69A' }}>X</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluciones integrales diseñadas para llevar tu operación logística al siguiente nivel.
          </p>
        </div>

        {/* Grid superior — 4 cards estándar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {standardFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            const colors = colorMap[feature.color];
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm
                           hover:shadow-md ${colors.hoverBorder} transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4
                                 ${colors.iconBg} group-hover:scale-105 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Grid inferior — 2 cards destacadas (herramientas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {toolFeatures.map((tool, index) => {
            const IconComponent = tool.icon;
            const colors = colorMap[tool.color];
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl border border-gray-100 shadow-sm
                           hover:shadow-md ${colors.hoverBorder} transition-all duration-300 overflow-hidden`}
              >
                {/* Header de la card */}
                <div className="p-6 pb-0">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0
                                     ${colors.iconBg} group-hover:scale-105 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-gray-900">
                          {tool.title}
                        </h3>
                        <span className="text-xs font-semibold bg-green-50 text-green-700 px-2 py-0.5 rounded-full">
                          Gratis
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Lista de highlights */}
                <div className="p-6 pt-4">
                  <ul className="space-y-2 mb-5">
                    {tool.highlights.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://play.google.com/store/apps/details?id=com.corebugcode.fletix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 
                               hover:text-blue-800 transition-colors duration-200"
                  >
                    Usar herramienta
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://wa.me/51973337625"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white 
                      px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-lg"
          >
            Solicitar Presentación Comercial
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesFletiX;