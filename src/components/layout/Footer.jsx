import React from 'react';
import { Mail, Phone, MapPin, Users } from 'lucide-react';
import { FaTiktok, FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';

/**
 * Footer de FletiX
 * ESTANDARIZADA — Design tokens unificados
 * Cambios: badge rounded-full, padding unificado
 */
const Footer = () => {
  
  const socialLinks = [
    { 
      icon: <FaFacebook className="w-5 h-5" />,
      name: 'Facebook', 
      url: 'https://www.facebook.com/share/1BXnHHf8MP/',
      color: 'hover:bg-blue-600'
    },
    { 
      icon: <FaInstagram className="w-5 h-5" />,
      name: 'Instagram', 
      url: 'https://www.instagram.com/fletixapp?igsh=ZDM5YXQ4Y2ttM29u',
      color: 'hover:bg-pink-600'
    },
    { 
      icon: <FaTiktok className="w-5 h-5" />,
      name: 'TikTok', 
      url: 'https://www.tiktok.com/@fletixapp?_t=ZM-90WgMxp9uXb&_r=1',
      color: 'hover:bg-gray-900'
    },
    { 
      icon: <FaWhatsapp className="w-5 h-5" />,
      name: 'WhatsApp', 
      url: 'https://wa.me/51973337625',
      color: 'hover:bg-green-600'
    }
  ];

  return (
    <>
      {/* Sección de Redes Sociales */}
      <div className="py-10 md:py-14 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge — Estándar unificado */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Users className="w-4 h-4" />
            Síguenos
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
            Mantente Conectado con Fleti<span style={{ color: '#26A69A' }}>X</span>
          </h3>
          
          {/* Grid de redes sociales */}
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 rounded-xl bg-gray-800 ${social.color} 
                           flex items-center justify-center transition-all duration-300 
                           text-white hover:scale-105 shadow-lg`}
                title={social.name}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Principal */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Grid de columnas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            {/* Columna 1: Sobre FletiX */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Sobre FletiX</h4>
              <p className="text-sm leading-relaxed text-gray-400 mb-4">
                Plataforma digital tecnológica que conecta empresas con transportistas profesionales en todo el Perú.
              </p>
              <p className="text-sm text-gray-400">
                Optimiza tu cadena logística con soluciones digitales innovadoras.
              </p>
            </div>

            {/* Columna 2: Contacto */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Contacto</h4>
              <div className="space-y-3 text-sm">
                <a 
                  href="tel:+51973337625"
                  className="flex items-center gap-3 hover:text-blue-400 transition"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+51 973 337 625</span>
                </a>
                <a 
                  href="mailto:fletixapp.contacto@gmail.com"
                  className="flex items-center gap-3 hover:text-blue-400 transition"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>fletixapp.contacto@gmail.com</span>
                </a>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Lima, Perú</span>
                </div>
              </div>
            </div>

            {/* Columna 3: Enlaces Rápidos */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/brochure-fletix.pdf" target="_blank" className="hover:text-blue-400 transition">
                    Descargar Brochure
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-blue-400 transition">
                    Características
                  </a>
                </li>
                <li>
                  <a href="#seguridad" className="hover:text-blue-400 transition">
                    Seguridad
                  </a>
                </li>
                <li>
                  <a href="#como-funciona" className="hover:text-blue-400 transition">
                    Cómo Funciona
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/51973337625" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                    Solicitar Demo
                  </a>
                </li>
                <li>
                  <a href="https://play.google.com/store/apps/details?id=com.corebugcode.fletix" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                    Descargar App
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Línea divisoria */}
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
              <p>
                © 2025 FletiX. Todos los derechos reservados.
              </p>
              <p>
                Desarrollado por <span className="text-blue-400 font-semibold">FletiX App</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;