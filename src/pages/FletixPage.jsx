import React from 'react';
import { ArrowLeft, Truck, MapPin, Clock, Users, CircleDollarSign, Combine, UsersRound, TruckElectric, UserPlus, Package, BarChart3, Send } from 'lucide-react';
import Button from '../components/common/Button';
import Footer from '../components/layout/Footer';
import saasProducts from '../data/saasProducts';

/**
 * Página detallada de FletiX
 * Muestra características, stats y CTAs
 */
const FletixPage = ({ onNavigate }) => {
  const fletix = saasProducts.find(s => s.id === 'fletix');
  
  // Mapeo de iconos por nombre
  const iconMap = {
    truck: Truck,
    map: MapPin,
    clock: Clock,
    users: Users,
    package: Package,
    chart: BarChart3,
    userplus: UserPlus,
    CircleDollarSign: CircleDollarSign,
    Combine: Combine,
    TruckElectric: TruckElectric,
    UsersRound : UsersRound
  };

  return (
    <>
      {/* Botón Volver */}
      <button
        onClick={() => onNavigate('home')}
        className="fixed top-4 left-4 sm:top-8 sm:left-8 z-50 flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group text-sm sm:text-base"
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-semibold">Volver</span>
      </button>

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Logo flotante */}
          <div className="mb-6 sm:mb-8 inline-block">
            <div className={`w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br ${fletix.color.gradient} flex items-center justify-center shadow-2xl animate-float overflow-hidden`}>
                {fletix.logo && fletix.logo.length <= 4 ? (
                <span className="text-5xl sm:text-6xl">{fletix.logo}</span>
                ) : (
                <img 
                    src={fletix.logo} 
                    alt={`${fletix.name} logo`} 
                    className="w-full h-full object-contain p-3" 
                />
                )}
            </div>
            </div>

          {/* Nombre */}
          <h1 className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-4 sm:mb-6 bg-gradient-to-r ${fletix.color.gradient} bg-clip-text text-transparent`}>
            {fletix.name}
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 sm:mb-8 font-medium px-4">
            {fletix.tagline}
          </p>

          {/* Descripción */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            La plataforma revolucionaria que conecta transportistas, empresas y clientes en tiempo real.
          </p>

          {/* Botones de descarga - Stack en móvil */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
            <Button 
              href={fletix.downloadLinks.playStore}
              gradient={fletix.color.gradient}
            >
              Descargar en Google Play
            </Button>
            <Button 
              href={fletix.downloadLinks.appStore}
              variant="secondary"
              icon={<span className="text-xl sm:text-2xl">🍎</span>}
            >
              Descargar en App Store
            </Button>
          </div>
        </div>
      </div>

      {/* Características */}
      <div className="py-16 sm:py-20 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
            Características <span className="text-cyan-400">Principales</span>
          </h2>

          {/* Grid responsive de características */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {fletix.features.map((feature, i) => {
              const IconComponent = iconMap[feature.icon];
              
              return (
                <div
                  key={i}
                  className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105"
                >
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${fletix.color.gradient} flex items-center justify-center text-white mb-4 sm:mb-6`}>
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-b from-transparent via-cyan-950/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 text-center">
            {fletix.stats.map((stat, i) => (
              <div key={i} className="p-6 sm:p-8">
                <div className={`text-5xl sm:text-6xl font-black mb-3 sm:mb-4 bg-gradient-to-r ${fletix.color.gradient} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="text-lg sm:text-xl text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-16 sm:py-20 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
            ¿Listo para <span className="text-cyan-400">revolucionar</span> tu logística?
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12 px-4">
            Únete a miles de empresas que ya confían en FletiX
          </p>
          <Button
            href={fletix.downloadLinks.playStore}
            gradient={fletix.color.gradient}
            icon={<Send className="w-5 h-5 sm:w-6 sm:h-6" />}
            className="text-lg sm:text-xl"
          >
            Comenzar Ahora
          </Button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default FletixPage;