const STORAGE_KEY = 'nestor-portfolio-projects'

export const starterProjects = [
  {
    id: 'starter-01',
    number: '01',
    title: 'Learning platform, built to stay available',
    category: 'Infrastructure',
    description: 'Infrastructure and operations work for a learning environment serving a large academic community.',
    technologies: ['Moodle', 'Linux', 'Nginx', 'Monitoring'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Rows of server equipment in a data center',
    tone: 'project-image--green',
    url: '',
    published: true,
  },
  {
    id: 'starter-02',
    number: '02',
    title: 'Workflows that move at the speed of work',
    category: 'Web systems',
    description: 'Enterprise portals and workflow tools designed to bring scattered processes into a clearer digital flow.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'API integration'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'A team collaborating around a laptop',
    tone: 'project-image--blue',
    url: '',
    published: true,
  },
  {
    id: 'starter-03',
    number: '03',
    title: 'Operational reporting, made more useful',
    category: 'Automation',
    description: 'Reporting and integration work that helps teams get a more timely view of operational information.',
    technologies: ['Oracle', 'SQL', 'Reporting', 'Integration'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Colorful data visualization on a computer screen',
    tone: 'project-image--orange',
    url: '',
    published: true,
  },
]

export function loadProjects() {
  try {
    const storedProjects = localStorage.getItem(STORAGE_KEY)
    return storedProjects ? JSON.parse(storedProjects) : starterProjects
  } catch {
    return starterProjects
  }
}

export function saveProjects(projects) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
}