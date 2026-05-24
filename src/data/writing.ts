export type WritingItem = {
  title: string;
  description?: string;
  date: string;
  readingTime?: string;
  tags: string[];
  href?: string;
  published?: boolean;
  featured?: boolean;
};

const writing: WritingItem[] = [
  {
    title: 'How can we extract meaningful information from noisy high-dimensional systems?',
    date: '2026-05-24',
    tags: ['PCA', 'Linear Algebra', 'Systems'],
    published: true,
    featured: false
  },
  {
    title: 'Industrial MPC as Applied Optimisation',
    description: 'A practical journey through model predictive control implementation in industrial systems.',
    date: '2025-09-22',
    readingTime: '8 min read',
    tags: ['MPC', 'Optimisation', 'Control'],
    href: '/writing/industrial-apc-as-applied-optimisation',
    published: false,
    featured: false
  },
  {
    title: 'What Model Predictive Control Actually Does',
    description: 'A concise explanation of the prediction, optimisation, and feedback loop that define MPC.',
    date: '2025-05-14',
    readingTime: '6 min read',
    tags: ['MPC', 'Theory', 'Engineering'],
    href: '/writing/what-model-predictive-control-actually-does',
    published: false,
    featured: false
  },
  {
    title: 'Control Theory and Quant Finance',
    description: 'Why control frameworks map naturally to algorithmic trading and risk management.',
    date: '2024-11-04',
    readingTime: '7 min read',
    tags: ['Control Theory', 'Quant Finance', 'Systems'],
    href: '/writing/control-theory-and-quant-finance',
    published: false,
    featured: false
  }
];

export default writing;
