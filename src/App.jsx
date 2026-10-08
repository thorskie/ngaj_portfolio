import { useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Check,
  Code2,
  GraduationCap,
  Menu,
  Network,
  Server,
  ShieldCheck,
  Workflow,
  X,
} from 'lucide-react'
import AdminPage from './AdminPage.jsx'
import { loadProjects } from './projectStore.js'

const skills = [
  {
    icon: Workflow,
    title: 'IT leadership & operations',
    items: ['MIS governance', 'Strategic planning', 'Project management', 'Vendor & stakeholder management'],
  },
  {
    icon: Code2,
    title: 'Software & databases',
    items: ['Software development lifecycle', 'PHP', 'React.js', 'Codeigniter', 'Laravel', 'MySQL / MariaDB', 'API integration'],
  },
  {
    icon: Server,
    title: 'Systems & infrastructure',
    items: ['Linux and Windows Server', 'Apache and Nginx', 'SSL / TLS', 'Cloudflare'],
  },
  {
    icon: ShieldCheck,
    title: 'Security & continuity',
    items: ['Security hardening', 'Backup and recovery', 'System monitoring', 'Risk assessment'],
  },
]

const approachItems = [
  'Reliable infrastructure and service delivery',
  'Practical software shaped around real workflows',
  'Security and continuity built into operations',
]

function ProjectCard({ project, total }) {
  return (
    <article className="project-card">
      <div className={`project-card__image ${project.tone || ''}`}>
        {project.image && <img src={project.image} alt={project.imageAlt || project.title} loading="lazy" />}
        <span className="project-card__number mono">{project.number} / {String(total).padStart(2, '0')}</span>
        <span className="project-card__category">{project.category}</span>
      </div>
      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list" aria-label="Technologies">
          {(project.technologies || []).map((technology) => <span key={technology}>{technology}</span>)}
        </div>
        {project.url ? (
          <a className="project-card__link" href={project.url} target="_blank" rel="noreferrer">
            <span>VIEW PROJECT</span><ArrowUpRight size={14} aria-hidden="true" />
          </a>
        ) : (
          <div className="project-card__note"><span>CAPABILITY AREA</span><ArrowUpRight size={14} aria-hidden="true" /></div>
        )}
      </div>
    </article>
  )
}

export default function App() {
  if (window.location.pathname.startsWith('/admin')) return <AdminPage />

  return <PortfolioHome />
}

function PortfolioHome() {
  const [projects] = useState(loadProjects)
  const [activeCategory, setActiveCategory] = useState('All')
  const [menuOpen, setMenuOpen] = useState(false)
  const publishedProjects = projects.filter((project) => project.published)
  const categories = ['All', ...new Set(publishedProjects.map((project) => project.category).filter(Boolean))]
  const visibleProjects = publishedProjects.filter((project) => activeCategory === 'All' || project.category === activeCategory)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Nestor Arcebuche home">
          <span className="wordmark__mark">NA</span>
          <span className="wordmark__name">NESTOR ARCEBUCHE <span>JR.</span></span>
        </a>
        <button className="menu-toggle icon-button" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
        <nav className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#expertise" onClick={closeMenu}>Expertise</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__photo" aria-hidden="true" />
          <div className="hero__scrim" aria-hidden="true" />
          <div className="hero__content">
            <p className="hero__eyebrow mono"><span className="status-dot" /> IT OPERATIONS · SOFTWARE · INFRASTRUCTURE</p>
            <h1 id="hero-title">Technology that <em>keeps work moving.</em></h1>
            <div className="hero__bottom">
              <p className="hero__summary">IT leader and systems professional with 15+ years across infrastructure, software development, and enterprise technology.</p>
              <div className="hero__actions">
                <a className="button button--lime" href="#projects">Explore selected work <ArrowRight size={15} /></a>
                <a className="hero__text-link" href="#about">Meet Nestor <ArrowDown size={14} /></a>
              </div>
            </div>
          </div>
          <div className="hero__caption mono"><span>IT LEADERSHIP / SYSTEMS ADMINISTRATION</span><span>15+ YEARS IN TECHNOLOGY</span></div>
          <a className="hero__scroll" href="#about" aria-label="Scroll to about section"><ArrowDown size={16} /></a>
        </section>

        <section className="intro section-pad" id="about" aria-labelledby="about-title">
          <div className="intro__label mono">01 / PROFILE</div>
          <div className="intro__body">
            <h2 className="intro__lead" id="about-title">Connecting people, systems, and technology to make essential work more dependable.</h2>
            <div className="intro__details">
              <p>My work spans IT operations, software development leadership, learning platforms, and enterprise systems. I focus on reliable services, clear processes, and technology initiatives that support real organizational needs.</p>
              <a className="inline-link" href="#expertise">Explore core expertise <ArrowRight size={14} /></a>
            </div>
          </div>
        </section>

        <section className="expertise section-pad" id="expertise" aria-labelledby="expertise-title">
          <div className="section-heading">
            <div className="section-heading__meta"><span className="mono">02</span><span className="section-heading__eyebrow">CORE EXPERTISE</span></div>
            <div className="section-heading__main">
              <h2 id="expertise-title">A broad view of <span>technology.</span></h2>
              <p className="section-heading__note">Leadership and hands-on technical work, connected by an operational mindset.</p>
            </div>
          </div>
          <div className="skill-grid">
            {skills.map(({ icon: Icon, title, items }, index) => (
              <article className="skill-item" key={title}>
                <div className="skill-item__top"><Icon size={19} /><span className="mono">0{index + 1}</span></div>
                <h3>{title}</h3>
                <ul>{items.map((item) => <li key={item}><Check size={13} aria-hidden="true" />{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="projects section-pad" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <div className="section-heading__meta"><span className="mono">03</span><span className="section-heading__eyebrow">SELECTED WORK</span></div>
            <div className="section-heading__main">
              <h2 id="projects-title">Systems built for <span>real work.</span></h2>
              <p className="section-heading__note">A selection of infrastructure, web systems, and operational improvements.</p>
            </div>
          </div>
          <div className="project-toolbar">
            <div className="filter-list" aria-label="Filter projects">
              {categories.map((category) => (
                <button className={`filter-button${activeCategory === category ? ' filter-button--active' : ''}`} key={category} type="button" aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)}>{category}</button>
              ))}
            </div>
            <span className="project-count mono">{String(visibleProjects.length).padStart(2, '0')} PROJECTS</span>
          </div>
          <div className="project-grid">
            {visibleProjects.length ? visibleProjects.map((project) => <ProjectCard key={project.id || project.number} project={project} total={publishedProjects.length} />) : <p className="project-state">No published projects in this category yet.</p>}
          </div>
        </section>

        <section className="approach section-pad" aria-labelledby="approach-title">
          <div className="approach__visual">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85" alt="Close view of electronic components on a circuit board" loading="lazy" />
            <span className="approach__image-label mono"><Network size={15} /> CONNECTED SYSTEMS, CONSIDERED OPERATIONS</span>
          </div>
          <div className="approach__copy">
            <div className="section-heading__meta"><span className="mono">04</span><span className="section-heading__eyebrow">HOW I WORK</span></div>
            <h2 id="approach-title">Good technology <span>works quietly.</span></h2>
            <p>Strong systems are dependable, understandable, and built around the people who use them. I bring operational discipline to delivery, improvement, and long-term support.</p>
            <div className="approach__list">
              {approachItems.map((item) => <div key={item}><Check size={15} /><span>{item}</span><ArrowRight size={14} /></div>)}
            </div>
          </div>
        </section>

        <section className="education section-pad" id="education" aria-labelledby="education-title">
          <div className="section-heading">
            <div className="section-heading__meta"><span className="mono">05</span><span className="section-heading__eyebrow">EDUCATION</span></div>
            <div className="section-heading__main">
              <h2 id="education-title">A foundation in <span>engineering.</span></h2>
              <p className="section-heading__note">Formal study grounded in systems thinking and practical problem-solving.</p>
            </div>
          </div>
          <article className="education-record">
            <div className="education-record__icon"><GraduationCap size={20} /></div>
            <div><h3>Bachelor of Science in Computer Engineering</h3><p>TRACE College Los Baños</p></div>
            <span className="education-record__year mono">2006 — 2011</span>
          </article>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact__inner">
            <div className="section-heading__meta"><span className="mono">06</span><span className="section-heading__eyebrow">CONTACT</span></div>
            <div className="contact__content">
              <h2 id="contact-title">Let’s make <em>work better.</em></h2>
              <div className="contact__aside">
                <p>For professional inquiries, use a contact channel you have chosen to share publicly.</p>
                <a className="button button--lime" href="mailto:nestor.arcebuche.jr@gmail.com?subject=Portfolio%20inquiry">Contact me <ArrowUpRight size={15} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark wordmark--footer" href="#top" aria-label="Back to top">
          <span className="wordmark__mark">NA</span><span className="wordmark__name">NESTOR ARCEBUCHE <span>JR.</span></span>
        </a>
        <span className="site-footer__note">IT leadership, systems, and software.</span>
        <a className="site-footer__top" href="#top">BACK TO TOP <ArrowUp size={13} /></a>
        <span className="site-footer__copyright">© {new Date().getFullYear()} Nestor G. Arcebuche Jr.</span>
      </footer>
    </>
  )
}
