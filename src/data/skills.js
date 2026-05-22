export const skillGroups = [
  {
    label: 'Frontend',
    color: 'teal',
    skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS'],
  },
  {
    label: 'Backend',
    color: 'blue',
    skills: ['Node.js', 'Express.js', 'Django', 'REST API', 'JWT Auth'],
  },
  {
    label: 'Android',
    color: 'green',
    skills: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Firebase', 'Retrofit', 'Coroutines'],
  },
  {
    label: 'AI / ML',
    color: 'amber',
    skills: ['YOLO', 'Roboflow', 'OpenCV', 'Gemini API', 'Machine Learning'],
  },
  {
    label: 'Databases',
    color: 'purple',
    skills: ['MongoDB', 'MySQL', 'Firebase Firestore', 'SQLite'],
  },
  {
    label: 'Tools',
    color: 'gray',
    skills: ['Git', 'GitHub', 'Postman', 'Android Studio', 'VS Code'],
  },
]

export const colorMap = {
  teal:   { bg: 'bg-teal/10',   text: 'text-teal',   border: 'border-teal/20' },
  blue:   { bg: 'bg-blue-400/10', text: 'text-blue-400', border: 'border-blue-400/20' },
  green:  { bg: 'bg-emerald-400/10', text: 'text-emerald-400', border: 'border-emerald-400/20' },
  amber:  { bg: 'bg-amber-400/10', text: 'text-amber-400', border: 'border-amber-400/20' },
  purple: { bg: 'bg-violet-400/10', text: 'text-violet-400', border: 'border-violet-400/20' },
  gray:   { bg: 'bg-faint/40',   text: 'text-muted',  border: 'border-faint' },
}
