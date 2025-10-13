import React from 'react';
import { Mail } from 'lucide-react';
import { FaTiktok, FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  
  // Configuración de redes sociales - CAMBIA LOS LINKS POR LOS REALES
  const socialLinks = [
    { 
      icon: <FaTiktok className="w-5 h-5 sm:w-6 sm:h-6" />,
      name: 'TikTok', 
      color: 'from-slate-800 to-slate-950', 
      url: 'https://www.tiktok.com/@fletixapp?_t=ZM-90WgMxp9uXb&_r=1'
    },
    { 
      icon: <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />,
      name: 'Instagram', 
      color: 'from-pink-500 to-purple-600', 
      url: 'https://www.instagram.com/fletixapp?igsh=ZDM5YXQ4Y2ttM29u'
    },
    { 
      icon: <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />,
      name: 'WhatsApp', 
      color: 'from-green-500 to-green-700', 
      url: 'https://wa.me/51973337625'
    },
    { 
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />, 
      name: 'Email', 
      color: 'from-cyan-500 to-blue-600', 
      url: 'mailto:core.bugcode@gmail.com'
    },
    { 
      icon: <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6" />,
      name: 'Facebook', 
      color: 'from-blue-600 to-blue-800', 
      url: 'https://www.facebook.com/share/1BXnHHf8MP/' // CAMBIA ESTO
    }
  ];

  return (
    <>
      {/* Sección de Redes Sociales */}
      <div className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-b from-transparent via-cyan-950/20 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
            Conéctate con <span className="text-cyan-400">FletiX</span>
          </h3>
          
          {/* Grid de redes sociales - responsive */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg text-white text-xl sm:text-2xl`}
                title={social.name}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          {/* Email de contacto */}
          <p className="mt-6 sm:mt-8 text-gray-400 text-sm sm:text-base">
            core.bugcode@gmail.com {/* CAMBIA ESTO */}
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6 sm:py-8 px-4 border-t border-cyan-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm sm:text-base mb-2">
            © 2025 FletiX. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs sm:text-sm">
            Desarrollado por <span className="text-cyan-400 font-semibold">Core Bug Code</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;