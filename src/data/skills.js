export const skillGroups = [
  {
    label: 'Frontend',
    color: 'teal',
    skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS v4', 'Vite'],
  },
  {
    label: 'Backend',
    color: 'blue',
    skills: ['Node.js', 'Express.js', 'Django', 'REST API', 'JWT Auth', 'Nodemailer', 'Multer', 'Sharp'],
  },
  {
    label: 'Languages',
    color: 'rose',
    skills: ['Java', 'Python', 'C', 'Kotlin'],
  },
  {
    label: 'Android',
    color: 'green',
    skills: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Firebase', 'OSMDroid', 'StateFlow', 'DataStore', 'Coil'],
  },
  {
    label: 'AI / ML',
    color: 'amber',
    skills: ['Roboflow API', 'Gemini API', 'YOLO', 'Machine Learning', 'Object Detection'],
  },
  {
    label: 'Databases',
    color: 'purple',
    skills: ['MongoDB', 'Mongoose', 'MySQL', 'Firebase Firestore'],
  },
  {
    label: 'Tools',
    color: 'gray',
    skills: ['Git', 'GitHub', 'Postman', 'Android Studio', 'VS Code', 'Gradle'],
  },
]

export const colorMap = {
  teal:   { bg: 'bg-teal/10',   text: 'text-teal',   border: 'border-teal/20' },
  blue:   { bg: 'bg-blue-400/10', text: 'text-blue-400', border: 'border-blue-400/20' },
  green:  { bg: 'bg-emerald-400/10', text: 'text-emerald-400', border: 'border-emerald-400/20' },
  amber:  { bg: 'bg-amber-400/10', text: 'text-amber-400', border: 'border-amber-400/20' },
  purple: { bg: 'bg-violet-400/10', text: 'text-violet-400', border: 'border-violet-400/20' },
  rose:   { bg: 'bg-rose-400/10', text: 'text-rose-400', border: 'border-rose-400/20' },
  gray:   { bg: 'bg-faint/40',   text: 'text-muted',  border: 'border-faint' },
}
