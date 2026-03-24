import React from 'react';
import { UserPlus, Building2, Search, Handshake, ArrowRight, Route } from 'lucide-react';

/**
 * Sección Cómo Funciona — FletiX
 * ESTANDARIZADA — Design tokens unificados
 */
const HowItWorksFletiX = () => {

  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Crea tu cuenta",
      description: "Regístrate con tu correo o Google. Verificamos tu identidad con DNI, CE o RUC para garantizar un marketplace seguro.",
      color: "blue"
    },
    {
      number: "02",
      icon: Building2,
      title: "Registra tu empresa",
      description: "Completa los datos de tu empresa. Validamos tu RUC con SUNAT automáticamente para que todos los participantes sean confiables.",
      color: "blue"
    },
    {
      number: "03",
      icon: Search,
      title: "Publica o busca servicios",
      description: "¿Necesitas transporte? Publica tu servicio. ¿Ofreces logística? Encuentra cargas disponibles y postula con tu mejor oferta.",
      color: "blue"
    },
    {
      number: "04",
      icon: Handshake,
      title: "Conecta y opera",
      description: "Revisa postulantes o contra-ofertas, accede a datos de contacto verificados y cierra el trato. Así de simple.",
      color: "orange"
    }
  ];

  const colorMap = {
    blue: {
      iconBg: "bg-blue-600",
      number: "text-gray-500",
      accent: "border-blue-500"
    },
    orange: {
      iconBg: "bg-orange-500",
      number: "text-gray-500",
      accent: "border-orange-500"
    }
  };

  return (
    <section className="py-10 md:py-14 bg-gradient-to-r from-blue-600 to-blue-800" id="como-funciona">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — Estándar unificado */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Route className="w-4 h-4" />
            Paso a paso
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Cómo funciona Fleti<span style={{ color: '#26A69A' }}>X</span>?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            En 4 pasos conectas tu empresa con los mejores 
            proveedores logísticos del Perú — o encuentras la carga ideal 
            para tu flota.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const colors = colorMap[step.color];
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Flecha conectora — solo desktop, no en el último */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-3 z-10">
                    <ArrowRight className="w-6 h-6 text-gray-500" />
                  </div>
                )}
                
                <div className={`border-t-4 ${colors.accent} bg-white rounded-2xl p-6 
                                shadow-sm hover:shadow-md transition-all duration-300 h-full`}>
                  {/* Número grande decorativo */}
                  <span className={`text-5xl font-black ${colors.number} select-none leading-none`}>
                    {step.number}
                  </span>
                  
                  {/* Icono — Estándar: w-12 h-12 rounded-xl */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center 
                                  text-white ${colors.iconBg} mt-3 mb-4`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cards de perfiles */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Perfil Empresa</h3>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Publica servicios de transporte que necesites, recibe postulaciones 
              de proveedores verificados, compara ofertas y elige la mejor opción.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center text-white">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Perfil Proveedor</h3>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Encuentra cargas disponibles en tiempo real, postula con tu tarifa y
              envía contra-ofertas. Sin intermediarios.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksFletiX;