export type ProjectItem = {
  title: string;
  description: string;
  year: string;
  status?: string;
  tags: string[];
  href: string;
  githubHref?: string;
  previewImage?: string;
  published?: boolean;
  featured?: boolean;
};

const projects: ProjectItem[] = [
  {
    title: 'MPC from Scratch',
    description: 'A self-contained controller built with plain numerical routines and domain-specific constraints.',
    year: '2025',
    status: 'Notebook',
    tags: ['MPC', 'Python', 'Simulation'],
    href: '/projects/mpc-from-scratch',
    published: false,
    featured: false
  },
  {
    title: 'DMC Step Response Controller',
    description: 'A deployment-focused discrete-time controller tuned to plant step responses and disturbance rejection.',
    year: '2024',
    status: 'Technical note',
    tags: ['DMC', 'Classical Control', 'Tuning'],
    href: '/projects/dmc-step-response-controller',
    published: false,
    featured: false
  },
  {
    title: 'Spectral Estimation Notebook',
    description: 'A reproducible notebook exploring spectral estimation, noise filtering, and system identification.',
    year: '2024',
    status: 'Notebook',
    tags: ['Signal Processing', 'Spectral Analysis', 'Notebook'],
    href: '/projects/spectral-estimation-notebook',
    published: false,
    featured: false
  }
];

export default projects;
