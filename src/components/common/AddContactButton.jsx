import React from 'react';
import { UserPlus } from 'lucide-react';

/**
 * Botón para agregar contacto (vCard)
 * Al hacer click, descarga un archivo .vcf que el móvil puede abrir
 * y agregar a contactos automáticamente
 */
const AddContactButton = () => {
  
  // CONFIGURA TUS DATOS AQUÍ:
  const contactInfo = {
    name: 'CoreBugCode',
    company: 'CoreBugCode',
    phone: '+51973337625',
    email: 'core.bugcode@gmail.com',
    //website: 'https://corebug.com',
    //address: 'Jesus Maria, Lima, Peru' 
  };

  // Generar archivo vCard (.vcf)
  const generateVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
ORG:${contactInfo.company}
TEL;TYPE=CELL:${contactInfo.phone}
EMAIL:${contactInfo.email}
URL:${contactInfo.website}
ADR:;;${contactInfo.address}
END:VCARD`;

    return vcard;
  };

  // Función para descargar el vCard
  const handleAddContact = () => {
    const vcard = generateVCard();
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CoreBug_Code.vcf'; // Nombre del archivo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleAddContact}
      className="inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/50 text-sm sm:text-base"
      title="Agregar a contactos"
    >
      <UserPlus className="w-4 h-4 sm:w-5 sm:h-5" />
      <span>Agregar Contacto</span>
    </button>
  );
};

export default AddContactButton;