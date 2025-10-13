import React from 'react';
import { Download } from 'lucide-react';

/**
 * Componente Button reutilizable
 * 
 * @param {string} variant - 'primary' | 'secondary' | 'outline'
 * @param {string} gradient - Clases de gradiente de Tailwind
 * @param {string} href - URL del enlace
 * @param {function} onClick - Función al hacer click
 * @param {node} children - Contenido del botón
 * @param {node} icon - Icono (opcional)
 */
const Button = ({ 
  variant = 'primary', 
  gradient = 'from-cyan-400 to-blue-500',
  href,
  onClick,
  children,
  icon,
  className = ''
}) => {
  
  // Estilos base (mobile-first)
  const baseStyles = "inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400/50";
  
  // Estilos según variante
  const variantStyles = {
    primary: `bg-gradient-to-r ${gradient} text-white hover:shadow-2xl hover:shadow-cyan-500/50`,
    secondary: 'bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20',
    outline: `border-2 border-current bg-gradient-to-r ${gradient} bg-clip-text text-transparent hover:bg-clip-border`
  };
  
  const finalClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  // Si tiene href, renderizar como <a>
  if (href) {
    return (
      <a 
        href={href}
        className={finalClassName}
        onClick={onClick}
      >
        {icon || <Download className="w-4 h-4 sm:w-5 sm:h-5" />}
        <span>{children}</span>
      </a>
    );
  }
  
  // Si no, renderizar como <button>
  return (
    <button 
      className={finalClassName}
      onClick={onClick}
    >
      {icon && icon}
      <span>{children}</span>
    </button>
  );
};

export default Button;