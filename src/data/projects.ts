export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Library Management App',
    description:
      'Aplikasi manajemen perpustakaan digital dengan fitur dashboard admin, manajemen data buku, dan pengelolaan anggota untuk mendukung sistem perpustakaan yang lebih efisien.',
    image: 'images/project1.png', // PERBAIKAN: Dihapus tanda / di depan
    tags: ['Flutter', 'Supabase', 'Figma'],
    githubUrl: 'https://github.com/username/library-management-app',
  },
  {
    id: '2',
    title: 'Teaching Assistance Platform UI',
    description:
      'Desain antarmuka platform asistensi mengajar untuk mendukung aktivitas pembelajaran, distribusi materi, dan interaksi antara pengajar dan siswa secara lebih terstruktur.',
    image: 'images/project1.png', // PERBAIKAN: Dihapus tanda / di depan
    tags: ['Figma', 'UI/UX Design', 'Education'],
    demoUrl: 'https://figma.com/your-project-link',
  },
  {
    id: '3',
    title: 'Educational Media Website',
    description:
      'Website media pembelajaran interaktif yang dirancang untuk menyajikan materi informatika secara lebih visual, mudah dipahami, dan menarik bagi siswa.',
    image: 'images/project1.png', // PERBAIKAN: Dihapus tanda / di depan
    tags: ['Next.js', 'Front-End', 'Educational Tech'],
    demoUrl: 'https://your-demo-link.com/educational-media',
    githubUrl: 'https://github.com/username/educational-media',
  },
  {
    id: '4',
    title: 'Portfolio Website Redesign',
    description:
      'Eksplorasi redesign website portfolio pribadi dengan pendekatan layout editorial, animasi halus, dan tampilan yang responsif di berbagai ukuran layar.',
    image: 'images/project1.png', // PERBAIKAN: Dihapus tanda / di depan
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    demoUrl: 'https://your-demo-link.com/portfolio-redesign',
    githubUrl: 'https://github.com/username/portfolio-redesign',
  },
  {
    id: '5',
    title: 'Student Task Management UI',
    description:
      'Konsep desain aplikasi manajemen tugas siswa dengan fokus pada alur penggunaan yang sederhana, struktur informasi yang jelas, dan pengalaman pengguna yang intuitif.',
    image: 'images/project1.png', // PERBAIKAN: Dihapus tanda / di depan
    tags: ['Figma', 'UI/UX', 'Mobile Design'],
    demoUrl: 'https://figma.com/your-student-task-link',
  },
];
