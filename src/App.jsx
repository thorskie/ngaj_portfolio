import { useState } from 'react'
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Menu,
  Network,
  Server,
  ShieldCheck,
  X,
} from 'lucide-react'
import AdminPage from './AdminPage.jsx'
import { loadProjects } from './projectStore.js'

const projects = [
  {
    number: '01',
    title: 'Learning platform, built to stay available',
    category: 'Infrastructure',
    description:
      'Infrastructure and operations work for a learning environment serving a large academic community.',
    technologies: ['Moodle', 'Linux', 'Nginx', 'Monitoring'],
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Rows of server equipment in a data center',
    tone: 'project-image--green',
  },
  {
    number: '02',
    title: 'Workflows that move at the speed of work',
    category: 'Web systems',
    description:
      'Enterprise portals and workflow tools designed to bring scattered processes into a clearer digital flow.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'API integration'],
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'A team collaborating around a laptop',
    tone: 'project-image--blue',
  },
  {
    number: '03',
    title: 'Operational reporting, made more useful',
    category: 'Automation',
    description:
      'Reporting and integration work that helps teams get a more timely view of operational information.',
    technologies: ['Oracle', 'SQL', 'Reporting', 'Integration'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Colorful data visualization on a computer screen',
    tone: 'project-image--orange',
  },
]

const skillGroups = [
  {
    icon: Network,
    number: '01',
    title: 'Leadership & operations',
    skills: ['IT service delivery', 'Project management', 'MIS governance', 'Vendor coordination'],
  },
  {
    icon: Code2,
    number: '02',
    title: 'Software & data',
    skills: ['PHP', 'MySQL / MariaDB', 'SDLC', 'API integration', 'Git'],
  },
  {
    icon: Server,
    number: '03',
    title: 'Systems & infrastructure',
    skills: ['Linux & Windows Server', 'Nginx', 'Apache', 'Cloudflare', 'SSL / TLS'],
  },
  {
    icon: ShieldCheck,
    number: '04',
    title: 'Security & continuity',
    skills: ['Security hardening', 'Backup & recovery', 'Monitoring', 'Risk assessment'],
  },
]

function SectionHeading({ index, eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <div className="section-heading__meta">
        <span className="mono">{index}</span>
        <span className="section-heading__eyebrow">{eyebrow}</span>
      </div>
      <div className="section-heading__main">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  )
}

function App() {
  const isAdminPage = window.location.pathname.replace(/\/$/, '') === '/admin'
  const [activeFilter, setActiveFilter] = useState('All work')
  const [menuOpen, setMenuOpen] = useState(false)
  const [projects] = useState(loadProjects)
  const publishedProjects = projects.filter((project) => project.published !== false)
  const filters = ['All work', ...new Set(publishedProjects.map((project) => project.category))]
  const visibleProjects =
    activeFilter === 'All work'
      ? publishedProjects
      : publishedProjects.filter((project) => project.category === activeFilter)

  const closeMenu = () => setMenuOpen(false)

  if (isAdminPage) return <AdminPage />

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Nestor Arcebuche, home">
          <span className="wordmark__mark">NA</span>
          <span className="wordmark__name">Nestor Arcebuche<span> Jr.</span></span>
        </a>
        <button
          className="menu-toggle icon-button"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#expertise" onClick={closeMenu}>Expertise</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Get in touch <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero__photo" role="img" aria-label="Illuminated server racks in a data center" />
          <div className="hero__scrim" />
          <div className="hero__content">
            <p className="hero__eyebrow"><span className="status-dot" /> IT LEADERSHIP / SYSTEMS / SOFTWARE</p>
            <h1>Nestor G.<br /><em>Arcebuche Jr.</em></h1>
            <div className="hero__bottom">
              <p className="hero__summary">I lead technology operations and build systems that help people do their best work.</p>
              <div className="hero__actions">
                <a className="button button--lime" href="#projects">Explore selected work <ArrowDownRight size={17} /></a>
                <a className="hero__text-link" href="#about">A little about me <ArrowDown size={15} /></a>
              </div>
            </div>
          </div>
          <div className="hero__caption mono"><span>BASED IN THE PHILIPPINES</span><span>15+ YEARS IN TECHNOLOGY</span></div>
          <a className="hero__scroll" href="#about" aria-label="Scroll to about section"><ArrowDown size={17} /></a>
        </section>

        <section className="intro section-pad" id="about">
          <div className="intro__label mono">A PRACTICAL, PEOPLE-FIRST APPROACH</div>
          <div className="intro__body">
            <p className="intro__lead">Technology should make important work <span>clearer, steadier, and more useful.</span></p>
            <div className="intro__details">
              <p>I'm an IT leader with 15+ years across infrastructure, software development, enterprise systems, and education technology. I bring teams and technology together, from the first system decision through reliable day-to-day operations.</p>
              <p>This portfolio is about the work itself: the systems shaped, the problems untangled, and the technical foundations that keep services moving.</p>
              <a className="inline-link" href="#expertise">How I work <ArrowRight size={15} /></a>
            </div>
          </div>
        </section>

        <section className="expertise section-pad" id="expertise">
          <SectionHeading index="01" eyebrow="CAPABILITIES" title={<>A broad toolkit.<br /><span>One connected practice.</span></>}>
            <p className="section-heading__note">From planning and delivery to the infrastructure beneath it, I work across the full technology picture.</p>
          </SectionHeading>
          <div className="skill-grid">
            {skillGroups.map(({ icon: Icon, number, title, skills }) => (
              <article className="skill-item" key={number}>
                <div className="skill-item__top"><span className="mono">{number}</span><Icon size={21} strokeWidth={1.6} /></div>
                <h3>{title}</h3>
                <ul>{skills.map((skill) => <li key={skill}><Check size={13} />{skill}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="projects section-pad" id="projects">
          <SectionHeading index="02" eyebrow="SELECTED WORK" title={<>Good work leaves<br /><span>systems better.</span></>}>
            <p className="section-heading__note">A selection of the systems and technical initiatives that reflect my work across software, infrastructure, and operations.</p>
          </SectionHeading>
          <div className="project-toolbar">
            <div className="filter-list" role="group" aria-label="Filter projects by category">
              {filters.map((filter) => (
                <button
                  className={`filter-button${activeFilter === filter ? ' filter-button--active' : ''}`}
                  key={filter}
                  type="button"
                  aria-pressed={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                >{filter}</button>
              ))}
            </div>
            <span className="mono project-count">{String(visibleProjects.length).padStart(2, '0')} SELECTED</span>
          </div>
          <div className="project-grid" aria-live="polite">
            {visibleProjects.map((project, index) => (
              <article className="project-card" key={project.id || project.number}>
                <div className={`project-card__image ${project.tone}`}>
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                  <span className="project-card__number mono">{String(index + 1).padStart(2, '0')} / {String(visibleProjects.length).padStart(2, '0')}</span>
                  <span className="project-card__category">{project.category}</span>
                </div>
                <div className="project-card__body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                  {project.url ? <a className="project-card__link mono" href={project.url} target="_blank" rel="noreferrer">OPEN PROJECT <ArrowUpRight size={13} /></a> : <span className="project-card__note mono">CAPABILITY AREA <ArrowUpRight size={13} /></span>}
                </div>
              </article>
            ))}
          </div>
          <div className="project-disclaimer"><Database size={15} /><p>Project examples are intentionally generalized. Specific project details are shared only when they are appropriate for public use.</p></div>
        </section>

        <section className="approach section-pad">
          <div className="approach__visual">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1500&q=85" alt="Earth at night with connected city lights" loading="lazy" />
            <span className="approach__image-label mono"><Globe2 size={14} /> SYSTEMS THAT CONNECT</span>
          </div>
          <div className="approach__copy">
            <div className="section-heading__meta"><span className="mono">03</span><span className="section-heading__eyebrow">THE THROUGH-LINE</span></div>
            <h2>Make the complex<br />feel <span>manageable.</span></h2>
            <p>Good technology work is rarely one thing. It takes sound architecture, thoughtful delivery, secure operations, and a clear understanding of the people relying on the result.</p>
            <div className="approach__list">
              <div><GitBranch size={17} /><span>Connect strategy to execution</span><ArrowUpRight size={14} /></div>
              <div><Server size={17} /><span>Build for reliable operations</span><ArrowUpRight size={14} /></div>
              <div><ShieldCheck size={17} /><span>Keep security in the design</span><ArrowUpRight size={14} /></div>
            </div>
          </div>
        </section>

        <section className="education section-pad" id="education">
          <SectionHeading index="04" eyebrow="FOUNDATIONS" title={<>Built on a curious<br /><span>engineering mindset.</span></>}>
            <p className="section-heading__note">A foundation in engineering, carried into a career of practical problem-solving.</p>
          </SectionHeading>
          <div className="education-record">
            <span className="education-record__icon"><Code2 size={21} /></span>
            <div><h3>Bachelor of Science in Computer Engineering</h3><p>TRACE College Los Baños</p></div>
            <span className="education-record__year mono">2006 — 2011</span>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact__inner">
            <div className="section-heading__meta"><span className="mono">05</span><span className="section-heading__eyebrow">CONTACT</span></div>
            <div className="contact__content">
              <h2>Have a good<br /><em>challenge?</em></h2>
              <div className="contact__aside">
                <p>For thoughtful conversations about systems, technology operations, and the work ahead.</p>
                <a className="button button--lime" href="mailto:hello@nestorarcebuche.com">Start a conversation <ArrowUpRight size={17} /></a>
                <span className="contact__email-note mono">UPDATE THIS ADDRESS BEFORE PUBLISHING</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark wordmark--footer" href="#home"><span className="wordmark__mark">NA</span><span className="wordmark__name">Nestor Arcebuche<span> Jr.</span></span></a>
        <span className="site-footer__note">IT leadership, systems & software</span>
        <a className="site-footer__top mono" href="#home">BACK TO TOP <ArrowUpRight size={13} /></a>
        <span className="site-footer__copyright mono">© {new Date().getFullYear()} NESTOR G. ARCEBUCHE JR.</span>
        <a className="site-footer__admin mono" href="/admin">ADMIN <ArrowUpRight size={13} /></a>
      </footer>
    </>
  )
}

export default App