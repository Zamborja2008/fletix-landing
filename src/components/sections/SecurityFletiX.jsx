import React from 'react';
import { Shield, Lock, FileCheck, Eye, UserX, Server } from 'lucide-react';

/**
 * Sección de Seguridad — FletiX
 * ESTANDARIZADA — Design tokens unificados
 */
const SecurityFletiX = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Datos encriptados en servidor",
      description: "Teléfonos, DNI y datos sensibles se encriptan en nuestros servidores. Nunca viajan en texto plano a ningún dispositivo."
    },
    {
      icon: FileCheck,
      title: "Cumplimiento Ley 29733",
      description: "Operamos bajo la Ley de Protección de Datos Personales del Perú. Cada acceso a información de contacto queda auditado."
    },
    {
      icon: Shield,
      title: "Empresas verificadas",
      description: "Validamos RUC con SUNAT y documentos de identidad con RENIEC antes de que una empresa pueda operar en la plataforma."
    },
    {
      icon: Eye,
      title: "Auditoría de accesos",
      description: "Cada vez que alguien accede a datos de contacto, queda registrado: quién, cuándo y qué información consultó."
    },
    {
      icon: UserX,
      title: "Eliminación segura",
      description: "Si eliminas tu cuenta, tus datos se anonimizan inmediatamente y se borran completamente en un máximo de 90 días."
    },
    {
      icon: Server,
      title: "Operaciones protegidas",
      description: "Postulaciones, créditos y registros usan transacciones atómicas. Cero duplicados, cero datos corruptos."
    }
  ];

  return (
    <section className="py-10 md:py-14 bg-white" id="seguridad">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header — Estándar unificado */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Shield className="w-4 h-4" />
            Seguridad certificada
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tu información está protegida
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            En FletiX la seguridad no es un extra — es la base de todo. 
            Cumplimos con la normativa peruana y aplicamos estándares 
            de seguridad de nivel empresarial.
          </p>
        </div>

        {/* Grid de features de seguridad */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 
                           hover:shadow-md hover:border-green-100 transition-all duration-300"
              >
                {/* Icono — Estándar: w-12 h-12 rounded-xl */}
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center 
                              text-green-600 mb-4">
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

        {/* Badge de infraestructura */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-200 
                          rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600 font-medium">
              Infraestructura en Google Cloud Platform — Firebase + Cloud Functions
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SecurityFletiX;