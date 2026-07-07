/**
 * Proyectos del portafolio.
 * - Los campos de la tarjeta: title, description, tech, demoUrl, repoUrl.
 * - Los campos de la página de detalle (/proyecto/:id): longDescription,
 *   features, credentials, screenshots, year, category, role.
 * demoUrl / repoUrl / credentials son opcionales: si no existen, no se muestran.
 * Para añadir capturas: coloca imágenes en src/assets/images e impórtalas
 * en el array `screenshots` (cada item: { src, alt }).
 */
import guiasAppHome from '@/assets/images/guias-app-home.webp'
import guiasAppBusqueda from '@/assets/images/guias-app-busqueda.webp'
import guiasAppAlgoritmos from '@/assets/images/guias-app-algoritmos.webp'
import guiasAppAlertas from '@/assets/images/guias-app-alertas.webp'
import guiasAppAsistente from '@/assets/images/guias-app-asistente.webp'
import guiasAdminGuias from '@/assets/images/guias-admin-guias.webp'
import guiasAdminCasos from '@/assets/images/guias-admin-casos.webp'
import guiasAdminAlgoritmos from '@/assets/images/guias-admin-algoritmos.webp'
import lingualeapInicio from '@/assets/images/lingualeap-inicio.webp'
import lingualeapNiveles from '@/assets/images/lingualeap-niveles.webp'
import lingualeapTemas from '@/assets/images/lingualeap-temas.webp'
import lingualeapHabla from '@/assets/images/lingualeap-habla.webp'
import lingualeapPreguntas from '@/assets/images/lingualeap-preguntas.webp'
import redInicio from '@/assets/images/red-ventas-inicio.webp'
import redAdmin from '@/assets/images/red-ventas-admin.webp'
import redLider from '@/assets/images/red-ventas-lider.webp'
import redLiderEquipo from '@/assets/images/red-ventas-lider-equipo.webp'
import redVendedor from '@/assets/images/red-ventas-vendedor.webp'
import redVendedorPedidos from '@/assets/images/red-ventas-vendedor-pedidos.webp'
import redReportes from '@/assets/images/red-ventas-reportes.webp'

export const projects = [
  {
    id: 'guias-clinicas',
    title: 'Guías Clínicas',
    description:
      'Sistema clínico full-stack multiplataforma: app móvil, panel web y API .NET. Guías, algoritmos de decisión, alertas, búsqueda inteligente y casos clínicos.',
    tech: ['React Native', 'Expo', '.NET 9', 'C#', 'PostgreSQL', 'React'],
    demoUrl: 'https://guias-clinicas-panel-admin.onrender.com',
    repoUrl: 'https://github.com/Arkanys54/guias-clinicas-app',
    apkUrl:
      'https://github.com/Arkanys54/guias-clinicas-app/releases/download/v1.0/Guias-clinicas.apk',
    featured: true,
    year: '2026',
    category: 'Sistema full-stack multiplataforma',
    role: 'Desarrollo full-stack (móvil, web y API)',
    longDescription: [
      'Plataforma clínica de apoyo a la decisión con tres componentes integrados: una app móvil (React Native / Expo), un panel de administración web (React + Vite) y una API REST (.NET 9) sobre PostgreSQL.',
      'Permite consultar guías clínicas, ejecutar algoritmos de decisión paso a paso, recibir alertas clínicas con notificaciones push, buscar hallazgos con una búsqueda inteligente tolerante a errores, practicar con casos clínicos interactivos y consultar un asistente clínico con IA.',
      'La API está desplegada en Render con base de datos PostgreSQL en Neon, autenticación por JWT y roles diferenciados (administrador, empresa y usuario).',
    ],
    features: [
      'App móvil multiplataforma (Android/iOS) con Expo',
      'Algoritmos clínicos ejecutables paso a paso',
      'Búsqueda inteligente de hallazgos (tolerante a errores)',
      'Alertas clínicas con notificaciones push',
      'Casos clínicos interactivos para entrenamiento',
      'Asistente clínico con IA',
      'API REST .NET 9 + PostgreSQL con autenticación JWT',
      'Panel de administración web (React)',
    ],
    credentials: [
      { role: 'Admin (panel web + app)', email: 'admin@demo.com', password: 'Admin123*' },
      { role: 'Usuario (app móvil)', email: 'usuario@demo.com', password: 'Usuario123*' },
    ],
    screenshots: [
      { src: guiasAppHome, alt: 'App móvil — pantalla de inicio de guías clínicas' },
      { src: guiasAppBusqueda, alt: 'App móvil — búsqueda inteligente' },
      { src: guiasAppAlgoritmos, alt: 'App móvil — algoritmos clínicos' },
      { src: guiasAppAlertas, alt: 'App móvil — alertas clínicas' },
      { src: guiasAppAsistente, alt: 'App móvil — asistente clínico' },
      { src: guiasAdminGuias, alt: 'Panel admin — gestión de guías' },
      { src: guiasAdminCasos, alt: 'Panel admin — casos clínicos' },
      { src: guiasAdminAlgoritmos, alt: 'Panel admin — editor de algoritmos clínicos' },
    ],
    note: 'El panel web y la API están en el plan gratuito de Render: la primera carga tras inactividad puede tardar ~50 s en “despertar”. La app móvil se distribuye como APK (compilado con EAS).',
    links: [
      { label: 'API en vivo (Swagger)', url: 'https://guias-clinicas-api.onrender.com/swagger' },
      { label: 'Repositorio API (.NET)', url: 'https://github.com/Arkanys54/guias-clinicas-api' },
      { label: 'Repositorio panel web', url: 'https://github.com/Arkanys54/guias-clinicas-panel-admin' },
    ],
  },
  {
    id: 'lingualeap',
    title: 'LinguaLeap',
    description:
      'Plataforma web para aprender inglés por niveles (A1–C2): ejercicios, test de nivel, corrector de escritura, traductor y recursos de listening.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'API REST'],
    demoUrl: 'https://arkanys54.github.io/plataforma-ingles/',
    repoUrl: 'https://github.com/Arkanys54/plataforma-ingles',
    featured: true,
    year: '2025',
    category: 'Plataforma educativa',
    role: 'Desarrollador full-stack',
    longDescription: [
      'LinguaLeap es una plataforma web para el aprendizaje del inglés de forma práctica y progresiva, organizada por niveles del MCER (A1 a C2). El usuario puede ubicarse con un test de nivel y avanzar con ejercicios interactivos y recursos multimedia.',
      'Integra servicios externos para funciones reales: un corrector gramatical y de escritura, y un traductor instantáneo, ambos consumidos desde el navegador mediante APIs públicas.',
    ],
    features: [
      'Contenido organizado por niveles A1–C2',
      'Test de ubicación de nivel',
      'Corrector de escritura en tiempo real (API de LanguageTool)',
      'Traductor instantáneo (API de MyMemory)',
      'Ejercicios interactivos y práctica guiada',
      'Recursos de listening con audio y podcasts',
      'Diseño responsive',
    ],
    credentials: null,
    screenshots: [
      { src: lingualeapInicio, alt: 'Página de inicio de LinguaLeap' },
      { src: lingualeapNiveles, alt: 'Selección de niveles A1–C2' },
      { src: lingualeapTemas, alt: 'Temas y lecciones' },
      { src: lingualeapHabla, alt: 'Práctica de expresión oral' },
      { src: lingualeapPreguntas, alt: 'Ejercicios de preguntas' },
    ],
  },
  {
    id: 'red-de-ventas',
    title: 'Red de Ventas (MLM)',
    description:
      'Sistema de red de ventas multinivel: gestión de referidos, comisiones automáticas, pedidos, roles y reportes en PDF. App full-stack con Laravel y MongoDB.',
    tech: ['Laravel', 'PHP', 'Livewire', 'MongoDB', 'Bootstrap', 'Vite'],
    demoUrl: 'https://red-de-ventas-y483.onrender.com/',
    repoUrl: 'https://github.com/Arkanys54/red-de-ventas',
    featured: true,
    year: '2025',
    category: 'Aplicación web full-stack',
    role: 'Proyecto en equipo — desarrollo full-stack',
    longDescription: [
      'Sistema de gestión para una red de ventas multinivel (MLM). Administra la estructura de referidos, calcula comisiones de forma automática a partir de los pedidos reales, y gestiona productos, pedidos y usuarios con distintos roles.',
      'Construido con Laravel 12 y Livewire sobre MongoDB, con paneles diferenciados para administrador, líder y vendedor. Incluye generación de reportes en PDF y Word, y un sistema de notificaciones por correo.',
      'Proyecto desarrollado en equipo. Este repositorio es una copia bajo mi cuenta para portafolio; el crédito es compartido con el equipo original.',
    ],
    features: [
      'Roles diferenciados: administrador, líder y vendedor',
      'Gestión de red de referidos (estructura MLM)',
      'Cálculo automático de comisiones desde pedidos reales',
      'Gestión de productos, pedidos y clientes',
      'Reportes en PDF y Word',
      'Notificaciones por correo',
      'Base de datos NoSQL (MongoDB)',
    ],
    credentials: [
      { role: 'Administrador', email: 'admin@arepallanerita.com', password: 'admin123' },
      { role: 'Líder', email: 'carlos.rodriguez@arepallanerita.com', password: 'lider123' },
      { role: 'Vendedor', email: 'miguel.torres@arepallanerita.com', password: 'vendedor123' },
    ],
    screenshots: [
      { src: redInicio, alt: 'Pantalla de inicio de Red de Ventas' },
      { src: redAdmin, alt: 'Panel del administrador' },
      { src: redLider, alt: 'Panel del líder' },
      { src: redLiderEquipo, alt: 'Ventas del equipo (vista de líder)' },
      { src: redVendedor, alt: 'Panel del vendedor' },
      { src: redVendedorPedidos, alt: 'Pedidos del vendedor' },
      { src: redReportes, alt: 'Reportes del sistema' },
    ],
    note: 'La demo está en el plan gratuito de Render: la primera carga tras un rato de inactividad puede tardar ~30–60 s en despertar.',
  },
]

/** Busca un proyecto por su id (para la página de detalle). */
export const getProjectById = (id) => projects.find((p) => p.id === id)
