import { useState } from 'react'
import { ArrowLeft, ExternalLink, LogOut, Pencil, Plus, Save, Trash2, X } from 'lucide-react'
import { loadProjects, saveProjects } from './projectStore.js'

const ADMIN_USERNAME = 'thorskie'
const ADMIN_PASSWORD = '101010'
const categories = ['Web systems', 'Infrastructure', 'Automation', 'Security', 'LMS / Education Technology', 'Other']
const emptyProject = {
  title: '',
  category: categories[0],
  description: '',
  url: '',
  image: '',
  technologies: '',
  published: true,
}

function projectToForm(project) {
  return { ...project, technologies: (project.technologies || []).join(', ') }
}

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => sessionStorage.getItem('portfolio-demo-admin') === 'true')
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [projects, setProjects] = useState(loadProjects)
  const [form, setForm] = useState(emptyProject)
  const [editingId, setEditingId] = useState(null)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')

  function handleLogin(event) {
    event.preventDefault()
    if (credentials.username !== ADMIN_USERNAME || credentials.password !== ADMIN_PASSWORD) {
      setError('Username or password is incorrect.')
      return
    }

    sessionStorage.setItem('portfolio-demo-admin', 'true')
    setIsLoggedIn(true)
    setCredentials({ username: '', password: '' })
    setError('')
  }

  function handleLogout() {
    sessionStorage.removeItem('portfolio-demo-admin')
    setIsLoggedIn(false)
    resetForm()
  }

  function resetForm() {
    setForm(emptyProject)
    setEditingId(null)
    setNotice('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextProject = {
      ...form,
      id: editingId || globalThis.crypto?.randomUUID?.() || `project-${Date.now()}`,
      number: editingId ? projects.find((project) => project.id === editingId)?.number : String(projects.length + 1).padStart(2, '0'),
      technologies: form.technologies.split(',').map((technology) => technology.trim()).filter(Boolean),
      imageAlt: form.title,
      tone: 'project-image--green',
    }
    const nextProjects = editingId
      ? projects.map((project) => project.id === editingId ? nextProject : project)
      : [...projects, nextProject]

    saveProjects(nextProjects)
    setProjects(nextProjects)
    resetForm()
    setNotice(editingId ? 'Project updated in this browser.' : 'Project added to the portfolio in this browser.')
  }

  function startEditing(project) {
    setForm(projectToForm(project))
    setEditingId(project.id)
    setNotice('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function removeProject(project) {
    if (!window.confirm(`Remove “${project.title}” from the portfolio?`)) return
    const nextProjects = projects.filter((item) => item.id !== project.id)
    saveProjects(nextProjects)
    setProjects(nextProjects)
    if (editingId === project.id) resetForm()
    setNotice('Project removed.')
  }

  function togglePublished(project) {
    const nextProjects = projects.map((item) => item.id === project.id ? { ...item, published: !item.published } : item)
    saveProjects(nextProjects)
    setProjects(nextProjects)
  }

  if (!isLoggedIn) {
    return (
      <main className="console-page">
        <header className="console-header">
          <a className="console-back" href="/"><ArrowLeft size={16} /> Portfolio home</a>
          <span className="console-brand"><span className="wordmark__mark">NA</span> ADMIN ACCESS</span>
        </header>
        <section className="console-login" aria-labelledby="login-title">
          <p className="console-eyebrow mono">PORTFOLIO MANAGEMENT</p>
          <h1 id="login-title">Admin sign in</h1>
          <p className="console-intro">Sign in to add and manage portfolio projects.</p>
          <form className="console-form" onSubmit={handleLogin}>
            <label>Username<input required autoComplete="username" value={credentials.username} onChange={(event) => setCredentials({ ...credentials, username: event.target.value })} /></label>
            <label>Password<input required type="password" autoComplete="current-password" value={credentials.password} onChange={(event) => setCredentials({ ...credentials, password: event.target.value })} /></label>
            {error && <p className="console-error" role="alert">{error}</p>}
            <button className="console-primary" type="submit">Sign in <ExternalLink size={15} /></button>
          </form>
          <p className="console-warning">Demo-only login. This client-side page is not secure for a public website.</p>
        </section>
      </main>
    )
  }

  return (
    <main className="console-page">
      <header className="console-header">
        <a className="console-back" href="/"><ArrowLeft size={16} /> Portfolio home</a>
        <div className="console-header-actions"><span className="console-brand"><span className="wordmark__mark">NA</span> PROJECT ADMIN</span><button className="console-logout" type="button" onClick={handleLogout}><LogOut size={15} /> Sign out</button></div>
      </header>
      <div className="console-content">
        <div className="console-title-row">
          <div><p className="console-eyebrow mono">PORTFOLIO CONTENT</p><h1>Projects</h1><p className="console-intro">Add an accomplishment with a short description and a link visitors can open.</p></div>
          <a className="console-public-link" href="/#projects">View public projects <ExternalLink size={14} /></a>
        </div>

        <section className="console-section" aria-labelledby="project-editor-title">
          <div className="console-section-heading"><h2 id="project-editor-title">{editingId ? 'Edit project' : 'Add a project'}</h2>{editingId && <button className="console-cancel" type="button" onClick={resetForm}><X size={14} /> Cancel</button>}</div>
          <form className="console-project-form" onSubmit={handleSubmit}>
            <label className="console-field console-field--wide">Project title<input required maxLength={120} value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} placeholder="e.g. Learning platform infrastructure improvements" /></label>
            <label className="console-field">Category<select value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })}>{categories.map((category) => <option key={category}>{category}</option>)}</select></label>
            <label className="console-field">Project link <span className="console-optional">optional</span><input type="url" value={form.url} onChange={(event) => setForm({ ...form, url: event.target.value })} placeholder="https://example.com/project" /></label>
            <label className="console-field console-field--wide">Brief description<textarea required maxLength={300} rows={3} value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} placeholder="What was accomplished? Keep it clear and avoid confidential information." /></label>
            <label className="console-field console-field--wide">Image URL <span className="console-optional">optional</span><input type="url" value={form.image} onChange={(event) => setForm({ ...form, image: event.target.value })} placeholder="https://example.com/project-image.jpg" /></label>
            <label className="console-field console-field--wide">Technologies <span className="console-optional">comma-separated</span><input value={form.technologies} onChange={(event) => setForm({ ...form, technologies: event.target.value })} placeholder="Laravel, MySQL, Linux" /></label>
            <label className="console-publish"><input type="checkbox" checked={form.published} onChange={(event) => setForm({ ...form, published: event.target.checked })} /> Publish on portfolio</label>
            <div className="console-submit-row"><button className="console-primary" type="submit">{editingId ? <Save size={16} /> : <Plus size={16} />}{editingId ? 'Save changes' : 'Add project'}</button>{notice && <span className="console-notice" role="status">{notice}</span>}</div>
          </form>
        </section>

        <section className="console-section console-list-section" aria-labelledby="project-list-title">
          <div className="console-section-heading"><h2 id="project-list-title">Portfolio entries <span className="console-count">{projects.length}</span></h2><span className="mono console-entry-count">{projects.filter((project) => project.published).length} PUBLISHED</span></div>
          <div className="console-project-list">
            {projects.length === 0 ? <p className="console-empty">No projects yet. Add your first accomplishment above.</p> : projects.map((project) => (
              <article className="console-project-row" key={project.id || project.number}>
                <div className="console-project-copy"><span className="mono console-project-number">{project.number}</span><div><h3>{project.title}</h3><p>{project.description}</p><span className="console-category">{project.category}{project.url ? ` · ${project.url}` : ''}</span></div></div>
                <div className="console-actions"><button className={`console-status${project.published ? ' console-status--published' : ''}`} type="button" onClick={() => togglePublished(project)}>{project.published ? 'Published' : 'Draft'}</button><button className="console-icon-button" type="button" aria-label={`Edit ${project.title}`} onClick={() => startEditing(project)}><Pencil size={16} /></button><button className="console-icon-button console-icon-button--delete" type="button" aria-label={`Delete ${project.title}`} onClick={() => removeProject(project)}><Trash2 size={16} /></button></div>
              </article>
            ))}
          </div>
        </section>
        <p className="console-warning"><strong>Local demo:</strong> Changes are stored only in this browser and will not sync to other devices or visitors.</p>
      </div>
    </main>
  )
}
