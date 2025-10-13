/**
 * Configuración de todos los productos SaaS de CoreBug Code
 * 
 * CÓMO AGREGAR LOGOS:
 * 1. Guarda tu logo en: src/assets/logos/nombre-logo.png
 * 2. Importa arriba: import fletixLogo from '../assets/logos/fletix.png';
 * 3. Usa en logo: logo: fletixLogo
 * 
 * O usa un emoji temporal: logo: '🚚'
 */

// IMPORTA TUS LOGOS AQUÍ (descomenta cuando tengas las imágenes)
import fletixLogo from '../assets/logos/logo_fletix.png';
// import saas2Logo from '../assets/logos/saas2.png';
// import saas3Logo from '../assets/logos/saas3.png';

const saasProducts = [
  {
    id: 'fletix',
    name: 'FletiX',
    tagline: 'Potenciando Conexiones',
    description: 'Conecta proveedores, empresas y clientes en tiempo real',
    
    // CAMBIA ESTO por tu logo real cuando lo tengas:
    logo: fletixLogo, // O usa: logo: fletixLogo (después de importar)
    
    // Colores del gradiente (puedes cambiarlos)
    color: {
      from: 'cyan-400',
      to: 'blue-500',
      gradient: 'from-cyan-400 to-blue-500'
    },
    
    // Links de descarga (reemplaza con tus URLs reales)
    downloadLinks: {
      playStore: 'https://play.google.com/store/apps/details?id=com.corebugcode.fletix', // Cambia por tu link real
      //appStore: 'https://apps.apple.com/', // Cambia por tu link real
      apkDirect: '#' // Link directo a APK
    },
    
    // Características del producto
    features: [
      {
        title: 'Regístrate gratis',
        description: 'Accede a la base de datos de proveedores más grande del Perú',
        icon: 'userplus'
      },
      {
        title: 'Publica y encuentra servicios',
        description: 'Haz que otros te contacten mas rápido',
        icon: 'truck'
      },
      {
        title: 'Cotiza rutas',
        description: 'No pierdas dinero y cotiza tus servicios de transporte',
        icon: 'CircleDollarSign'
      },
      {
        title: 'Dimensiona tu carga',
        description: 'Elige el tipo de unidad correcta para tu mercadería',
        icon: 'Combine'
      },
      {
        title: 'Disponibilidad inmediata',
        description: 'Publica la disponibilidad de tus vehiculos en tu ciudad',
        icon: 'TruckElectric'
      },
      {
        title: 'Cambia de perfil',
        description: 'Puedes elegir cuándo gustes ser empresa o proveedor',
        icon: 'UsersRound'
      }
    ],
    
    // Estadísticas para mostrar
    stats: [
      { number: '10K+', label: 'Transportistas Activos' },
      { number: '50K+', label: 'Envíos Completados' },
      { number: '99%', label: 'Satisfacción del Cliente' }
    ]
  },
  
  // SEGUNDO SAAS (Próximamente)
  {
    id: 'saas2',
    name: 'Próximamente',
    tagline: 'Nueva innovación en desarrollo',
    description: 'Estamos trabajando en algo increíble',
    logo: '🚀',
    color: {
      from: 'purple-400',
      to: 'pink-500',
      gradient: 'from-purple-400 to-pink-500'
    },
    downloadLinks: {
      playStore: '#',
      appStore: '#',
      apkDirect: '#'
    },
    features: [],
    stats: []
  },
  
  // TERCER SAAS (Próximamente)
  /* {
    id: 'saas3',
    name: 'Próximamente',
    tagline: 'El futuro está cerca',
    description: 'Pronto revelaremos más detalles',
    logo: '✨',
    color: {
      from: 'green-400',
      to: 'emerald-500',
      gradient: 'from-green-400 to-emerald-500'
    },
    downloadLinks: {
      playStore: '#',
      appStore: '#',
      apkDirect: '#'
    },
    features: [],
    stats: []
  }*/
];

export default saasProducts;