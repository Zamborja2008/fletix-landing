import React, { useState, useEffect } from 'react';
import { Download, CheckCircle, Menu, X } from 'lucide-react';
import { FaWhatsapp, FaFilePdf } from 'react-icons/fa';
import fletixLogo from '../../assets/logos/logo_fletix.png';
import imagen1 from '../../assets/images/hero/transportistas.png';
import imagen4 from '../../assets/images/hero/dashboard.png';

/**
 * Hero FletiX con Carrusel de Imágenes de Fondo
 * 100% Responsive - Adaptado a todos los tamaños
 */
const HeroFletiX = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // AQUÍ PONES TUS IMÁGENES - Reemplaza estos imports con tus imágenes reales
  const slides = [
    {
      // IMAGEN 1: Importa tu imagen aquí
      // import imagen1 from '../../assets/images/transportistas.jpg';
      image: imagen1, // PLACEHOLDER - REEMPLÁZALO
      title: 'Red de transportistas verificados y certificados',
      alt: 'Transportistas verificados'
    },
    {
      // IMAGEN 2: Importa tu imagen aquí
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&h=1080&fit=crop', // PLACEHOLDER - REEMPLÁZALO
      title: 'Mayor visibilidad para tus servicios logísticos',
      alt: 'Visibilidad de servicios'
    },
    {
      // IMAGEN 3: Importa tu imagen aquí
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1920&h=1080&fit=crop', // PLACEHOLDER - REEMPLÁZALO
      title: 'Cotización automatizada de rutas en tiempo real',
      alt: 'Cotización de rutas'
    },
    {
      // IMAGEN 4: Importa tu imagen aquí
      image: imagen4, // PLACEHOLDER - REEMPLÁZALO
      title: 'Dashboard con analytics y reportes avanzados',
      alt: 'Dashboard analytics'
    }
  ];

  // Cambio automático de slides cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* ========================================
          NAVBAR SUPERIOR - Fondo Claro - RESPONSIVE
          ======================================== */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
          
          {/* Navbar Principal */}
          <div className="flex items-center justify-between">
            
            {/* Logo y Badge Izquierda */}
            <div className="flex items-center gap-2 sm:gap-4">
              <img 
                src={fletixLogo} 
                alt="FletiX" 
                className="h-10 sm:h-12 md:h-14"
              />
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                  Fleti<span style={{ color: '#26A69A' }}>X</span>
                </h1>
                <p className="text-[8px] sm:text-xs text-blue-600 font-semibold uppercase">
                  Plataforma Logística
                </p>
              </div>
            </div>

            {/* Botones Desktop (> 768px) */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.corebugcode.fletix"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>Descargar App</span>
              </a>

              <a
                href="https://wa.me/51973337625?text=Hola%20FletiX,%20quiero%20más%20información"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold text-sm transition shadow-lg"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Escríbenos</span>
              </a>

              <a
                href="/brochure-fletix.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold text-sm transition"
              >
                <FaFilePdf className="w-4 h-4" />
                <span>Brochure</span>
              </a>
            </div>

            {/* Botón Menú Móvil (< 768px) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Menú Móvil Desplegable */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 animate-fade-in">
              <div className="flex flex-col gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.corebugcode.fletix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition shadow-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Download className="w-5 h-5" />
                  <span>Descargar App</span>
                </a>

                <a
                  href="https://wa.me/51973337625?text=Hola%20FletiX,%20quiero%20más%20información"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition shadow-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Escríbenos por WhatsApp</span>
                </a>

                <a
                  href="/brochure-fletix.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaFilePdf className="w-5 h-5" />
                  <span>Descargar Brochure</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ========================================
          CARRUSEL DE IMÁGENES DE FONDO
          ======================================== */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Imagen de fondo */}
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay oscuro para legibilidad - Más oscuro en móvil */}
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/80 via-black/70 to-black/40 md:from-black/70 md:via-black/50 md:to-transparent" />
          </div>
        ))}
      </div>

      {/* ========================================
          CONTENIDO PRINCIPAL - RESPONSIVE
          ======================================== */}
      <div className="relative z-10 min-h-screen flex flex-col">
        
        {/* Espaciado para navbar - Ajustado por tamaño */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contenedor principal */}
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            
            {/* Layout: Stack en móvil, Grid en desktop */}
            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              
              {/* ========================================
                  IZQUIERDA: Texto del Slide Actual
                  ======================================== */}
              <div className="text-center md:text-left">
                <h2 
                  key={currentSlide}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 md:mb-8 animate-fade-in text-white drop-shadow-2xl"
                  style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
                >
                  {slides[currentSlide].title}
                </h2>

                {/* Trust Indicators */}
                <div className="flex flex-col gap-3 md:gap-4 items-center md:items-start">
                  {[
                    'Potenciando conexiones',
                    'Encuentra proveedores a nivel nacional',
                    'Encuentra servicios logísticos a nivel nacional'
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-2 md:gap-3 text-sm sm:text-base md:text-lg lg:text-xl text-white" 
                      style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}
                    >
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-400 flex-shrink-0 drop-shadow-lg" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ========================================
                  DERECHA: Nube Flotante - RESPONSIVE
                  ======================================== */}
              <div className="flex justify-center items-center w-full">
                <div className="relative max-w-sm md:max-w-md w-full">
                  {/* Nube/Círculo con fondo blanco */}
                  <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl animate-float">
                    <div className="text-center">
                      {/* Icono o decoración superior */}
                      <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                        </svg>
                      </div>

                      {/* Frase Principal - Responsive */}
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                        Conectamos Empresas con Transportistas de Confianza
                      </h3>

                      {/* Decoración inferior */}
                      <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t-2 border-blue-200">
                        <div className="flex justify-center gap-2">
                          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-600"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Efecto de sombra/resplandor */}
                  <div className="absolute inset-0 bg-blue-400/20 rounded-2xl md:rounded-3xl blur-2xl -z-10 scale-110"></div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ========================================
            INDICADORES DE SLIDES (Puntos) - RESPONSIVE
            ======================================== */}
        <div className="pb-6 md:pb-8 flex justify-center gap-2 md:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white w-6 md:w-8' 
                  : 'w-2 md:w-3 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default HeroFletiX;