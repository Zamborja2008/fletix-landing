import React from 'react';
import FletiXLandingPage from './pages/FletiXLandingPage';
import './App.css';

/**
 * Componente principal de la aplicación
 * Landing Page enfocada 100% en FletiX
 */
function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      
      {/* Orbes luminosos de fondo */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
        <div 
          className="absolute bottom-20 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" 
          style={{ animationDelay: '1s' }} 
        />
        <div 
          className="absolute top-1/2 left-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" 
          style={{ animationDelay: '2s' }} 
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10">
        <FletiXLandingPage />
      </div>
    </div>
  );
}

export default App;