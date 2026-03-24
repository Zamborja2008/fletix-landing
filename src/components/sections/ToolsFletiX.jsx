import React from 'react';
import { Calculator, Truck, ArrowRight, CheckCircle, Wrench } from 'lucide-react';

/**
 * Sección de Herramientas — FletiX
 * ESTANDARIZADA — Design tokens unificados
 */
const ToolsFletiX = () => {

  const tools = [
    {
      icon: Calculator,
      title: "Cotizador de Rutas",
      description: "Estima la tarifa de tu flete en 7 simples pasos. Calcula costos de combustible, peajes, seguros, depreciación y más.",
      features: [
        "Wizard guiado paso a paso",
        "Cálculo de seguro y depreciación",
        "Resultado en soles por viaje"
      ],
      accentColor: "blue",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: Truck,
      title: "Dimensionador de Carga",
      description: "¿No sabes qué vehículo necesitas? Ingresa el peso, volumen y dimensiones de tu carga, y te recomendamos el vehículo óptimo.",
      features: [
        "Desde furgón 1TN hasta cama baja 30TN",
        "Factor de seguridad del 5% incluido",
        "Recomendación instantánea"
      ],
      accentColor: "orange",
      gradient: "from-orange-500 to-orange-700"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="herramientas">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — Estándar unificado */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Wrench className="w-4 h-4" />
            100% gratuitas
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Herramientas inteligentes para tu operación
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Toma mejores decisiones logísticas con nuestras calculadoras 
            profesionales — disponibles para todos los usuarios, sin costo.
          </p>
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <div 
                key={index}
                className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md 
                           transition-all duration-300 border border-gray-100"
              >
                {/* Header con gradiente */}
                <div className={`bg-gradient-to-r ${tool.gradient} p-6 text-white`}>
                  {/* Icono — Estándar: w-12 h-12 rounded-xl */}
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center 
                                justify-center mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{tool.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {tool.description}
                  </p>
                </div>
                
                {/* Features list */}
                <div className="p-6 bg-white">
                  <ul className="space-y-3">
                    {tool.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="https://play.google.com/store/apps/details?id=com.corebugcode.fletix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 
                               bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold 
                               text-sm hover:bg-gray-800 transition-colors duration-200"
                  >
                    Usar herramienta
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ToolsFletiX;