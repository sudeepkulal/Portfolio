export const projects = [
  {
    id: 1,
    title: 'KarunadaKala',
    subtitle: 'Jetpack Compose & Gemini 1.5 Flash Platform',
    description:
      'A native community Android app celebrating Karnataka’s cultural heritage. Implements an org.json-powered HTTP POST wrapper using Kotlin coroutines (Dispatchers.IO) to directly fetch gemini-1.5-flash content, auto-generating 200-word histories. Mapped with FirebaseAuth and FirebaseFirestore tasks (.await()) to handle UserProfile (EXPLORER/ARTISAN/ADMIN), ArtForm (featuring isAiGenerated flags), Artisan (storing up to 6 product images & lat/lng Map markers), and WorkshopRegistration schemas.',
    stack: ['Kotlin', 'Jetpack Compose', 'Firebase Firestore', 'Gemini API', 'OSMDroid Maps', 'Coroutines', 'StateFlow', 'DataStore', 'Coil'],
    category: 'Android · AI · ML',
    badge: 'AI-Powered',
    github: 'https://github.com/sudeepkulal/Karunada-Kala',
    demo: null,
    highlight: true,
  },
  {
    id: 2,
    title: 'AuraStay',
    subtitle: 'Glassmorphic MERN Airbnb Clone',
    description:
      'A decoupled MERN rental platform running React 19 and Express.js v5. Features modular backend controllers with Mongoose schemas (populating Listing references inside Bookings). Computes stayed nights and pricing coefficients directly on the server by calculating checkOut-checkIn Date object offsets, securing accounts via bcrypt password hashing, and implementing React Router v7 SPA routing.',
    stack: ['React 19', 'React Router v7', 'Node.js', 'Express.js v5', 'MongoDB', 'Mongoose ODM', 'Tailwind CSS v4', 'JWT', 'bcrypt'],
    category: 'Full Stack · Web',
    badge: 'Full Stack',
    github: 'https://github.com/sudeepkulal/airbnb-clone',
    demo: null,
    highlight: false,
  },
  {
    id: 3,
    title: 'CapsiGuard',
    subtitle: 'AI Leaf Diagnostic MERN Dashboard',
    description:
      'An agricultural leaf spot diagnostic dashboard built using the MERN stack. Converts uploaded leaf files into Base64 buffers to query a Roboflow object detection endpoint. The Node server uses the Sharp library to dynamically compile SVG overlay composite layers (combining green rect bounds and text labels) directly onto the diagnostic images, saving prediction records and unlinking files on history delete.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Sharp Image Lib', 'Roboflow API', 'Tailwind CSS v4', 'Vite'],
    category: 'AI · Web',
    badge: 'Deep Learning',
    github: 'https://github.com/sudeepkulal/CapsiGuard',
    demo: null,
    highlight: false,
  },
  {
    id: 4,
    title: 'RecipeBook',
    subtitle: 'Decoupled MERN Cooking Companion',
    description:
      'A recipe cataloging application with glassmorphic styling. Implements title searches using Mongoose partial case-insensitive regex, splitting comma-separated items into nested RegExp arrays for $in Mongoose query filtering. Incorporates HTTP-only cookie-based JWT sessions, Multer image uploading, SMTP nodemailer feedback transporters, a distraction-free cooking step player, and cascade comment deletions.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS v4', 'JWT Auth', 'SMTP Nodemailer', 'Multer', 'Mongoose'],
    category: 'Full Stack · Web',
    badge: 'Full Stack',
    github: 'https://github.com/sudeepkulal/RecipeBook',
    demo: null,
    highlight: false,
  },
]
