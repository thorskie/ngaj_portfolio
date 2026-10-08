# Personal Portfolio Web Application — React + Laravel

## Getting Started

The initial public React interface is in the project root. With Node.js LTS installed, run:

```bash
npm install
npm run dev
```

The current UI uses generalized project examples and does not yet connect to an API. Laravel, the database, and the protected admin area are the next implementation phase. Add PHP, Composer, and MySQL/MariaDB before starting that phase. Only publish project details that have been reviewed for public use.

## 1. Project Overview

Build a modern, responsive personal portfolio website using:

- **Frontend:** React.js
- **Backend:** Laravel
- **Database:** MySQL / MariaDB
- **Frontend Build Tool:** Vite
- **Styling:** Tailwind CSS
- **API:** Laravel REST API
- **Version Control:** Git
- **Web Server:** Nginx or Apache
- **Optional:** Cloudflare, SSL/TLS

The website will serve as a professional portfolio focused on **projects, technical accomplishments, skills, expertise, and professional capabilities**.

### Important Design Decision

The public portfolio **must not contain a traditional company-by-company Professional Experience section**.

Instead, the website should focus on:

- Portfolio projects
- Technical accomplishments
- Systems and applications developed
- Infrastructure and technical initiatives
- Skills and expertise
- Project case studies
- Professional profile
- Education
- Contact information

Portfolio content should be manageable through a secure **Admin Page**, where an administrator can create, edit, publish, unpublish, and delete portfolio projects.

---

# 2. Portfolio Objective

The primary objective is to create a professional portfolio that demonstrates technical capability and accomplishments without simply reproducing a resume.

The website should allow visitors to quickly understand:

1. Who the developer/IT professional is.
2. What technical areas they specialize in.
3. What systems, applications, and solutions they have created or contributed to.
4. What technical problems they have solved.
5. What technologies they use.
6. What results or improvements their work produced.
7. How to contact them.

The portfolio should emphasize **what was accomplished and built**, rather than where the work was performed.

---

# 3. Professional Profile Content

The portfolio may use the following professional profile information from the resume.

## Name

**Nestor G. Arcebuche Jr.**

## Suggested Professional Title

**IT Leader | Systems Administrator | Software Development Lead**

Alternative:

**IT Operations & Software Development Professional**

## Professional Summary

> Results-driven IT Leader with over 15 years of broad experience spanning IT infrastructure management, software development leadership, LMS administration, and enterprise systems oversight. Proven track record in optimizing IT operations, driving system availability, enforcing security protocols, and leading software development lifecycles. Skilled in aligning technology initiatives with institutional and business objectives, mitigating risks, and managing cross-functional technical projects.

The source resume establishes the 15+ years of experience and these major professional areas. fileciteturn0file0L14-L20

---

# 4. Core Skills

Skills should be displayed on the homepage using categorized cards or tags.

## IT Leadership & Operations

- MIS Governance
- Strategic Planning
- Project Management
- Vendor & Stakeholder Management
- IT Service Delivery

## Software & Database Management

- Software Development Life Cycle (SDLC)
- PHP
- MySQL / MariaDB
- Git Version Control
- System Synchronization
- API Integration

## Systems & Infrastructure

- Linux and Windows Server Administration
- Apache
- Nginx
- SSL/TLS
- Cloudflare Integration
- Uptime Optimization

## Security & Continuity

- Cyber Security Hardening
- Backup & Disaster Recovery Planning
- System Monitoring
- Risk Assessment

These skills are based on the supplied resume. fileciteturn0file0L24-L36

---

# 5. Website Structure

The recommended public website structure is:

```text
/
├── Home
├── About
├── Skills
├── Projects / Accomplishments
├── Education
└── Contact
```

Admin area:

```text
/admin
├── Dashboard
├── Portfolio Projects
├── Skills
├── Achievements
├── Education
├── Contact Messages
└── Settings
```

There should be **no public company work-experience timeline**.

---

# 6. Homepage

The homepage should be designed as a professional portfolio landing page.

Recommended structure:

```text
Navbar
   ↓
Hero
   ↓
About
   ↓
Core Expertise
   ↓
Featured Projects / Accomplishments
   ↓
Technical Skills
   ↓
Education
   ↓
Contact
   ↓
Footer
```

---

# 7. Hero Section

The Hero section should immediately communicate the professional identity.

Example:

```text
Nestor G. Arcebuche Jr.

IT Leader | Systems Administrator | Software Development Lead

15+ years of experience in IT operations, software development,
infrastructure management, enterprise systems, and technology leadership.

[View Projects] [Contact Me]
```

Optional:

```text
[Download Resume]
```

The phone number and residential address must not appear.

---

# 8. About Section

The About section should contain a concise professional introduction.

Recommended themes:

- IT leadership
- Software development
- Systems administration
- Infrastructure management
- Enterprise applications
- LMS / education technology
- Security
- Business continuity
- Project management
- Technical operations

Do not duplicate the entire resume.

The goal is to provide a short professional introduction and direct visitors toward the portfolio projects.

---

# 9. Featured Projects / Accomplishments

This is the **main content section of the website**.

Portfolio entries created through the Admin Page should automatically appear here when they are marked as:

```text
Published = Yes
Featured = Yes
```

Example:

```text
FEATURED PROJECTS

┌────────────────────┐
│ Project Image      │
│                    │
│ Enterprise Portal  │
│ Web Application    │
│                    │
│ PHP • Laravel • DB │
│                    │
│ [View Project]     │
└────────────────────┘

┌────────────────────┐
│ Project Image      │
│                    │
│ LMS Infrastructure │
│ Optimization       │
│                    │
│ Moodle • Linux     │
│                    │
│ [View Project]     │
└────────────────────┘
```

The number of featured projects displayed on the homepage should be configurable.

Recommended default:

```text
6 featured projects
```

---

# 10. Portfolio Project Management

The portfolio must be **database-driven**.

The administrator should not need to edit React source code whenever a new project is added.

The process should be:

```text
Admin Login
     ↓
Admin Dashboard
     ↓
Add Portfolio
     ↓
Enter Project Information
     ↓
Upload Project Image
     ↓
Add Technologies
     ↓
Set Visibility
     ↓
Publish
     ↓
Laravel API
     ↓
Database
     ↓
React Homepage
     ↓
Project Appears
```

---

# 11. Add Portfolio Page

Create an Admin page:

```text
/admin/projects/create
```

The page should provide a form for creating a new portfolio entry.

## Required Fields

### Project Title

Example:

```text
Enterprise Workflow Automation System
```

### Slug

Automatically generated from the project title.

Example:

```text
enterprise-workflow-automation-system
```

Allow the administrator to manually edit it if necessary.

### Short Description

A short description shown on the project card.

Example:

```text
A web-based workflow platform designed to streamline
organizational processes and improve operational visibility.
```

### Full Description

Rich project description containing:

- Background
- Problem
- Solution
- Implementation
- Result
- Technologies used

### Project Category

Example options:

```text
Web Application
Enterprise System
Infrastructure
LMS / Education Technology
Automation
Security
Monitoring
API / Integration
Database
Other
```

### Technologies

Allow multiple technology tags.

Example:

```text
Laravel
React
PHP
MySQL
Linux
Nginx
Cloudflare
```

### Project Image

Allow administrator to upload:

```text
JPG
JPEG
PNG
WEBP
```

Recommended image validation:

```text
Maximum file size: 5 MB
```

### Project URL

Optional.

### GitHub URL

Optional.

### Start Date

Optional.

### Completion Date

Optional.

### Status

Example:

```text
Completed
In Progress
Maintenance
Archived
```

### Visibility

Required:

```text
Public
Private
```

Only public projects should be displayed on the public website.

### Published

```text
Draft
Published
```

### Featured

```text
Yes
No
```

Featured projects appear on the homepage.

---

# 12. Project Form Example

The Admin interface should look approximately like:

```text
+------------------------------------------------+
| ADD PORTFOLIO PROJECT                          |
+------------------------------------------------+
|                                                |
| Project Title                                  |
| [__________________________________________]   |
|                                                |
| Category                                       |
| [ Web Application                       ▼ ]    |
|                                                |
| Short Description                              |
| [__________________________________________]   |
| [__________________________________________]   |
|                                                |
| Full Description                               |
| [ Rich Text Editor                         ]   |
| [                                          ]   |
| [                                          ]   |
|                                                |
| Technologies                                   |
| [ Laravel ] [ React ] [ MySQL ] [+ Add]        |
|                                                |
| Project Image                                  |
| [ Upload Image ]                               |
|                                                |
| Project URL                                    |
| [__________________________________________]   |
|                                                |
| GitHub URL                                     |
| [__________________________________________]   |
|                                                |
| Status                                         |
| [ Completed                              ▼ ]    |
|                                                |
| Visibility                                     |
| (•) Public  ( ) Private                       |
|                                                |
| Published                                      |
| [✓] Published                                  |
|                                                |
| Featured                                       |
| [✓] Show on Homepage                           |
|                                                |
|              [Save Draft] [Publish Project]    |
+------------------------------------------------+
```

---

# 13. Project Detail Page

Each published portfolio project should have its own public page.

Recommended route:

```text
/projects/{slug}
```

Example:

```text
/projects/enterprise-workflow-automation-system
```

Project detail page:

```text
Project Title

Category
Project Status
Technologies

Project Image

Overview

The Problem

The Solution

Implementation

Key Contributions

Results / Impact

Technologies Used

[Live Project]
[GitHub]
```

Only display links that have been configured in the Admin Page.

---

# 14. Project Content Structure

Each project should encourage the administrator to describe **impact and technical contribution**, not simply list technologies.

Recommended content format:

## Overview

What is the project?

## Challenge

What problem needed to be solved?

## Solution

What was implemented?

## Technical Contribution

What did the developer/IT professional design, develop, configure, optimize, or manage?

## Technologies

What technologies were used?

## Results

What improvement or outcome was achieved?

Example:

```text
Challenge:
Manual processes created delays and limited operational visibility.

Solution:
Developed a centralized web-based workflow application.

Technical Contribution:
Designed the application architecture, database structure,
workflow logic, API integration, and deployment process.

Technologies:
Laravel, PHP, MySQL, JavaScript, Linux, Nginx

Result:
Improved workflow visibility and reduced manual processing.
```

Do not invent numerical metrics unless they are supported by actual project information.

---

# 15. Suggested Initial Portfolio Categories

Based on the resume, the portfolio can initially support projects in the following areas.

## Government & Enterprise Web Systems

The resume identifies enterprise portals, intranet systems, and workflow automation tools including:

- ODFS
- LRIS
- VDIS
- BMS

These can be represented as portfolio projects only if the information is safe to publish. fileciteturn0file0L83-L87

## Operational & Financial Automation

Potential portfolio category for:

- Real-time monitoring
- Analytics solutions
- SMSC
- Oracle-driven BI reporting
- Sales reporting
- Collections reporting
- Inventory reporting
- Freight reporting

These accomplishments are identified in the supplied resume. fileciteturn0file0L88-L90

## LMS Infrastructure & High Availability

Portfolio category for:

- LMS administration
- Moodle infrastructure
- High availability
- Performance optimization
- Monitoring
- Infrastructure operations

The resume specifically identifies LMS infrastructure supporting thousands of active faculty and students. fileciteturn0file0L91-L92

## Security, Continuity & Integration

Potential projects involving:

- Security upgrades
- Cloudflare Turnstile
- Backup and disaster recovery
- Web-to-mobile synchronization

These areas are identified in the resume. fileciteturn0file0L93-L95

---

# 16. Important: Do Not Publish Confidential Information

The portfolio should not automatically publish detailed information about systems worked on.

Before creating a public project, review:

- Project name
- Screenshots
- URLs
- Server information
- IP addresses
- User information
- Student information
- Internal architecture
- Database information
- Credentials
- API keys
- Internal documentation
- Proprietary source code

The Admin Page should therefore have:

```text
Visibility:
[ Public ▼ ]
```

For confidential work:

```text
Visibility:
[ Private ▼ ]
```

Private projects must not be returned by the public API.

---

# 17. Admin Dashboard

The Admin Dashboard should be the central management interface.

Recommended:

```text
ADMIN DASHBOARD

Portfolio
├── All Projects
├── Published
├── Drafts
├── Featured
└── Add Portfolio

Skills
├── Categories
└── Skills

Achievements
├── All
└── Add Achievement

Education
├── All
└── Add Education

Messages
└── Contact Messages

Settings
└── Website Configuration
```

Dashboard summary cards:

```text
Total Projects       12
Published             8
Drafts                3
Featured              6
Contact Messages     15
```

---

# 18. Portfolio List in Admin

Create:

```text
/admin/projects
```

Example:

```text
+-------------------------------------------------------------+
| PORTFOLIO PROJECTS                         [+ Add Portfolio] |
+-------------------------------------------------------------+
| Search: [________________] Category: [All ▼] Status [All ▼] |
+-------------------------------------------------------------+
|                                                             |
| Project                  Status       Featured    Actions   |
| ----------------------------------------------------------- |
| Enterprise Portal        Published    Yes        Edit      |
| LMS Optimization        Published    Yes        Edit      |
| Monitoring System       Draft         No         Edit      |
| Workflow Automation     Published    No         Edit      |
|                                                             |
+-------------------------------------------------------------+
```

Actions:

```text
View
Edit
Duplicate
Publish / Unpublish
Feature / Unfeature
Delete
```

---

# 19. Admin Authentication

The Admin Page must be protected.

Recommended:

```text
/admin/login
```

Features:

- Email/username
- Password
- Remember me (optional)
- Logout
- Password reset
- Session protection
- Rate limiting

Only authenticated administrators can manage portfolio content.

---

# 20. Database Design

Recommended tables:

```text
users
projects
project_technologies
technologies
project_categories
skills
skill_categories
achievements
education
contact_messages
media
settings
```

## Projects Table

```text
id
title
slug
short_description
description
challenge
solution
technical_contribution
results
category_id
image
project_url
github_url
start_date
end_date
status
visibility
published
featured
sort_order
created_at
updated_at
```

---

# 21. Technologies Table

```text
id
name
slug
icon
created_at
updated_at
```

Example:

```text
Laravel
React
PHP
MySQL
MariaDB
Linux
Nginx
Cloudflare
Moodle
Git
```

A project can have multiple technologies.

Relationship:

```text
Project
   │
   ├── Laravel
   ├── React
   ├── MySQL
   └── Linux
```

---

# 22. Project Categories

Create a reusable category system.

Example:

```text
Web Application
Enterprise System
Infrastructure
LMS / Education Technology
Automation
Security
Monitoring
API / Integration
Database
Other
```

The Admin can add new categories later.

---

# 23. Laravel API

Public endpoints:

```text
GET /api/projects
GET /api/projects/featured
GET /api/projects/{slug}

GET /api/categories
GET /api/technologies

GET /api/skills
GET /api/achievements
GET /api/education

POST /api/contact
```

Admin endpoints:

```text
POST   /api/admin/projects
GET    /api/admin/projects
GET    /api/admin/projects/{id}
PUT    /api/admin/projects/{id}
DELETE /api/admin/projects/{id}

POST   /api/admin/categories
PUT    /api/admin/categories/{id}
DELETE /api/admin/categories/{id}

POST   /api/admin/technologies
PUT    /api/admin/technologies/{id}
DELETE /api/admin/technologies/{id}
```

Admin API endpoints must require authentication and authorization.

---

# 24. Homepage API Logic

The homepage should request only the content needed for the public page.

Example:

```http
GET /api/projects/featured
```

Laravel should return projects where:

```text
published = true
AND
visibility = public
AND
featured = true
```

Example pseudo-query:

```php
Project::where('published', true)
    ->where('visibility', 'public')
    ->where('featured', true)
    ->orderBy('sort_order')
    ->latest()
    ->get();
```

The React frontend then renders the projects automatically.

---

# 25. React Frontend Structure

Recommended:

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── FeaturedProjects.jsx
│   ├── ProjectCard.jsx
│   ├── Achievements.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── ProjectDetails.jsx
│   └── NotFound.jsx
│
├── services/
│   └── api.js
│
├── hooks/
├── utils/
├── assets/
├── App.jsx
└── main.jsx
```

---

# 26. Public Projects Page

Create:

```text
/projects
```

The page should display all public published portfolio entries.

Features:

- Search
- Category filtering
- Technology filtering
- Featured indicator
- Project cards
- Pagination or load more
- Project detail navigation

Example:

```text
ALL PROJECTS

[Search projects........................]

[All] [Web] [Infrastructure] [Automation] [LMS]

┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ Project      │ │ Project      │ │ Project      │
│ Image        │ │ Image        │ │ Image        │
│              │ │              │ │              │
│ Title        │ │ Title        │ │ Title        │
│ Description  │ │ Description  │ │ Description  │
│ Tags         │ │ Tags         │ │ Tags         │
│ View Project │ │ View Project │ │ View Project │
└──────────────┘ └──────────────┘ └──────────────┘
```

---

# 27. Skills Management

Skills should also be manageable through the Admin Page.

Create:

```text
/admin/skills
```

Admin should be able to:

- Add skill
- Edit skill
- Delete skill
- Assign category
- Change display order
- Enable/disable skill

Example:

```text
Category: Systems & Infrastructure

[✓] Linux
[✓] Windows Server
[✓] Nginx
[✓] Apache
[✓] Cloudflare
[✓] SSL/TLS
```

---

# 28. Achievements Management

Create:

```text
/admin/achievements
```

Achievements should be separate from portfolio projects.

Example:

```text
Title:
LMS High Availability

Description:
Maintained high-availability standards for an institutional
Moodle environment supporting thousands of users.

Category:
Infrastructure

Featured:
Yes
```

The homepage can display selected achievements.

---

# 29. Education Management

Create:

```text
/admin/education
```

Initial education information:

**Bachelor of Science in Computer Engineering**

**TRACE College Los Baños**

**2006 – 2011**

This information is supported by the supplied resume. fileciteturn0file0L97-L100

The Admin should still be able to edit or add education records later.

---

# 30. Contact Management

Public contact section:

```text
Name
Email
Subject
Message
[Send Message]
```

Admin:

```text
/admin/messages
```

Admin can:

- View messages
- Mark as read
- Archive
- Delete

Security requirements:

- Server-side validation
- Rate limiting
- Spam protection
- Sanitization
- Email notification
- Secure database storage

Do not display the residential address or personal phone number.

---

# 31. Contact Information

Only publish professional contact information intentionally selected for the website.

Recommended:

```text
Professional Email
LinkedIn
GitHub
Other professional profiles
```

Do not publish:

```text
Personal Phone Number
Residential Address
Reference Phone Numbers
```

---

# 32. Resume Download

Optional:

```text
[Download Resume]
```

If a resume is provided for download, use a sanitized public version.

The public resume should not expose:

- Personal phone number
- Residential address
- Reference phone numbers

---

# 33. Visual Design

Recommended design direction:

**Modern + Professional + Technical + Minimal**

Suggested characteristics:

- Strong typography
- Clean spacing
- Professional project cards
- Technology badges
- Subtle animations
- Responsive grid
- Dark/light theme
- Technical visual elements
- Clean navigation

The design should communicate the image of a senior IT professional.

Avoid:

- Excessive animations
- Overly flashy effects
- Generic developer-template appearance
- Excessive text
- Large blocks of resume content

---

# 34. Recommended Homepage Layout

```text
┌──────────────────────────────────────────────┐
│ NAVBAR                                       │
│ Home | About | Projects | Skills | Contact   │
├──────────────────────────────────────────────┤
│                                              │
│ HERO                                         │
│                                              │
│ Nestor G. Arcebuche Jr.                     │
│ IT Leader | Systems Administrator            │
│ Software Development Lead                   │
│                                              │
│ [View Projects] [Contact Me]                 │
│                                              │
├──────────────────────────────────────────────┤
│ ABOUT                                        │
│ Professional introduction                    │
├──────────────────────────────────────────────┤
│ CORE EXPERTISE                               │
│ Leadership | Software | Infrastructure       │
│ Security | Enterprise Systems                │
├──────────────────────────────────────────────┤
│ FEATURED PROJECTS                            │
│                                              │
│ [Project] [Project] [Project]                │
│                                              │
│             [View All Projects]              │
├──────────────────────────────────────────────┤
│ ACHIEVEMENTS                                 │
│                                              │
│ [Achievement] [Achievement]                  │
├──────────────────────────────────────────────┤
│ SKILLS                                       │
│                                              │
│ Technical skill categories                   │
├──────────────────────────────────────────────┤
│ EDUCATION                                    │
├──────────────────────────────────────────────┤
│ CONTACT                                      │
├──────────────────────────────────────────────┤
│ FOOTER                                       │
└──────────────────────────────────────────────┘
```

---

# 35. React + Laravel Architecture

```text
                    PUBLIC USERS
                         │
                         ▼
                  React Frontend
                         │
                         │ REST API
                         ▼
                  Laravel Backend
                         │
          ┌──────────────┼──────────────┐
          │              │              │
          ▼              ▼              ▼
       Projects        Skills       Education
          │
          ▼
     MySQL/MariaDB
```

Admin:

```text
Administrator
      │
      ▼
Admin Login
      │
      ▼
Laravel Admin/API
      │
      ▼
Create / Edit / Publish
      │
      ▼
Database
      │
      ▼
React Homepage
```

---

# 36. Development Requirements

## Frontend

Recommended:

- React
- Vite
- React Router
- Axios or Fetch API
- Tailwind CSS
- Optional Framer Motion

## Backend

Recommended:

- Laravel
- Laravel authentication
- Laravel Eloquent ORM
- Laravel validation
- Laravel API Resources

## Database

- MySQL
- MariaDB

## Development Tools

- Node.js LTS
- npm
- PHP
- Composer
- Git
- VS Code or equivalent

---

# 37. Security Requirements

Implement:

- Admin authentication
- Authorization
- Password hashing
- Input validation
- CSRF protection where applicable
- Rate limiting
- SQL injection protection
- XSS prevention
- Secure file upload validation
- HTTPS
- Secure environment variables
- Production debug disabled
- CORS restrictions
- Secure session configuration

Never commit:

```text
.env
API keys
database passwords
SMTP credentials
Cloudflare secrets
private certificates
```

---

# 38. File Upload Requirements

Project images should be uploaded through the Admin Page.

Validation:

```text
Allowed:
.jpg
.jpeg
.png
.webp

Maximum:
5 MB
```

The backend should:

1. Validate MIME type.
2. Validate file size.
3. Generate a safe filename.
4. Store the file securely.
5. Prevent executable files from being uploaded.
6. Return the public image URL to React.

Optional image processing:

- Resize
- Compress
- Generate thumbnails
- Convert to WebP

---

# 39. SEO Requirements

Each project should have SEO-friendly metadata.

Homepage:

```text
Title:
Nestor G. Arcebuche Jr. | IT Leader & Systems Administrator
```

Project page:

```text
<title>
{Project Title} | Nestor G. Arcebuche Jr.
</title>
```

Include:

- Meta description
- Open Graph metadata
- Canonical URL
- Sitemap
- robots.txt
- Structured data where appropriate

---

# 40. Performance Requirements

Target:

```text
Performance:    90+
Accessibility:  90+
Best Practices: 90+
SEO:            90+
```

Optimize:

- Images
- JavaScript bundles
- API responses
- Database queries
- Browser caching
- Server compression
- Lazy loading
- Pagination

---

# 41. Responsive Design

The website must support:

- Mobile
- Tablet
- Laptop
- Desktop

Recommended breakpoints:

```text
Mobile:  < 640px
Tablet:  640px – 1024px
Desktop: > 1024px
```

Admin pages should also be usable on tablet and desktop.

---

# 42. Accessibility

Implement:

- Semantic HTML
- Keyboard navigation
- Proper heading hierarchy
- Alt text
- Accessible forms
- Visible focus states
- Sufficient color contrast
- Screen-reader-friendly labels
- Clear validation messages

---

# 43. Testing Requirements

## Frontend

Test:

- Homepage
- Project listing
- Project detail page
- Search
- Filters
- Navigation
- Mobile menu
- Contact form
- API loading states
- API errors

## Backend

Test:

- Login
- Logout
- Authorization
- Project creation
- Project editing
- Project deletion
- Publishing
- Unpublishing
- Featured projects
- File upload
- Validation
- Contact messages
- API security

Recommended:

```text
Pest / PHPUnit
React Testing Library
End-to-End Testing
```

---

# 44. Git Repository Structure

```text
portfolio/
│
├── portfolio-frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
│
├── portfolio-api/
│   ├── app/
│   ├── database/
│   ├── routes/
│   ├── resources/
│   ├── storage/
│   ├── tests/
│   └── composer.json
│
├── docs/
│   ├── architecture.md
│   ├── api.md
│   └── deployment.md
│
└── README.md
```

---

# 45. Deployment Architecture

Recommended:

```text
                    Internet
                       │
                       ▼
                 Cloudflare
                Optional WAF/CDN
                       │
                       ▼
                    Nginx
                       │
            ┌──────────┴──────────┐
            │                     │
            ▼                     ▼
     React Frontend         Laravel API
                                  │
                                  ▼
                           MySQL/MariaDB
```

Production environment:

- Ubuntu/Debian Linux
- Nginx
- PHP-FPM
- MySQL/MariaDB
- Node.js
- SSL/TLS
- Optional Cloudflare
- Automated backups

---

# 46. Recommended Development Phases

## Phase 1 — Project Setup

- [ ] Create Git repository
- [ ] Create React/Vite project
- [ ] Create Laravel project
- [ ] Configure database
- [ ] Configure environment variables
- [ ] Establish frontend/backend communication

## Phase 2 — Database & API

- [ ] Create migrations
- [ ] Create models
- [ ] Create relationships
- [ ] Create API resources
- [ ] Create public project endpoints
- [ ] Create admin endpoints
- [ ] Add validation

## Phase 3 — Admin Page

- [ ] Admin login
- [ ] Dashboard
- [ ] Portfolio list
- [ ] Add portfolio
- [ ] Edit portfolio
- [ ] Delete portfolio
- [ ] Publish/unpublish
- [ ] Feature/unfeature
- [ ] Image upload
- [ ] Category management
- [ ] Technology management

## Phase 4 — Public React Website

- [ ] Navbar
- [ ] Hero
- [ ] About
- [ ] Skills
- [ ] Featured projects
- [ ] Projects page
- [ ] Project detail page
- [ ] Achievements
- [ ] Education
- [ ] Contact
- [ ] Footer

## Phase 5 — Quality & Security

- [ ] Authentication testing
- [ ] API security
- [ ] Form validation
- [ ] File upload security
- [ ] Responsive testing
- [ ] Accessibility testing
- [ ] SEO
- [ ] Performance optimization

## Phase 6 — Production

- [ ] Production server
- [ ] Nginx
- [ ] PHP-FPM
- [ ] MySQL/MariaDB
- [ ] React production build
- [ ] Laravel production configuration
- [ ] SSL/TLS
- [ ] Cloudflare if required
- [ ] Database backups
- [ ] Monitoring
- [ ] Final security review

---

# 47. MVP Requirements

The first production version should contain:

## Public Website

- [ ] Hero
- [ ] About
- [ ] Skills
- [ ] Featured Projects
- [ ] All Projects
- [ ] Project Details
- [ ] Achievements
- [ ] Education
- [ ] Contact
- [ ] Responsive design

## Admin

- [ ] Login
- [ ] Dashboard
- [ ] Add Portfolio
- [ ] Edit Portfolio
- [ ] Delete Portfolio
- [ ] Publish / Unpublish
- [ ] Feature / Unfeature
- [ ] Image Upload
- [ ] Category Management
- [ ] Technology Management
- [ ] Skills Management
- [ ] Achievement Management
- [ ] Education Management
- [ ] Contact Messages

## Backend

- [ ] Laravel API
- [ ] MySQL/MariaDB
- [ ] Authentication
- [ ] Validation
- [ ] Authorization
- [ ] API security
- [ ] File upload handling

---

# 48. Definition of Done

The portfolio is complete when:

- [ ] No company-by-company employment history is displayed publicly.
- [ ] The website is centered on projects and accomplishments.
- [ ] Admin can create a portfolio project.
- [ ] Admin can edit a portfolio project.
- [ ] Admin can delete a portfolio project.
- [ ] Admin can save projects as drafts.
- [ ] Admin can publish projects.
- [ ] Admin can unpublish projects.
- [ ] Admin can mark projects as featured.
- [ ] Featured projects automatically appear on the homepage.
- [ ] Public projects automatically appear on the Projects page.
- [ ] Private projects are hidden from public APIs.
- [ ] Each project has its own detail page.
- [ ] Project images can be uploaded through the Admin Page.
- [ ] Technologies can be assigned to projects.
- [ ] Projects can be categorized.
- [ ] Skills can be managed from the Admin Page.
- [ ] Achievements can be managed from the Admin Page.
- [ ] Education can be managed from the Admin Page.
- [ ] Contact messages can be managed from the Admin Page.
- [ ] Admin routes are protected.
- [ ] Phone number is not displayed.
- [ ] Residential address is not displayed.
- [ ] Reference phone numbers are not displayed.
- [ ] Confidential institutional information is not publicly exposed.
- [ ] Website is responsive.
- [ ] Website is accessible.
- [ ] Website has SEO metadata.
- [ ] Website has HTTPS.
- [ ] Production secrets are protected.
- [ ] Database backups are configured.

---

# 49. Example Portfolio Workflow

The intended workflow for maintaining the website is:

### Step 1 — Login

```text
/admin/login
```

### Step 2 — Open Portfolio

```text
Dashboard → Portfolio → Add Portfolio
```

### Step 3 — Create Project

Example:

```text
Title:
LMS Infrastructure Optimization

Category:
LMS / Education Technology

Short Description:
Infrastructure optimization and high-availability improvements
for an institutional learning management environment.

Technologies:
Linux
Moodle
Nginx
Cloudflare
Monitoring
```

### Step 4 — Add Project Details

Describe:

```text
Overview
Challenge
Solution
Technical Contribution
Results
```

### Step 5 — Upload Image

```text
project-image.webp
```

### Step 6 — Publish

```text
Published: YES
Visibility: PUBLIC
Featured: YES
```

### Step 7 — Homepage

The project automatically appears in:

```text
Homepage → Featured Projects
```

### Step 8 — Projects Page

The same project automatically appears in:

```text
/projects
```

### Step 9 — Project Detail

Visitors can open:

```text
/projects/lms-infrastructure-optimization
```

---

# 50. Content Strategy

The website should not simply copy the resume.

The resume establishes the professional background and areas of expertise, while the portfolio should demonstrate those capabilities through **actual projects and accomplishments**.

Recommended content hierarchy:

```text
Professional Identity
        ↓
Skills & Expertise
        ↓
Projects
        ↓
Technical Contributions
        ↓
Results / Impact
        ↓
Education
        ↓
Contact
```

The main question the portfolio should answer is:

> **"What can this IT professional build, manage, improve, and deliver?"**

rather than:

> "Where has this person worked?"

---

# 51. Privacy Requirements

The source resume contains personal contact information and residential information.

The public portfolio must intentionally exclude:

- Personal phone number
- Residential/home address
- Reference phone numbers

Only professional contact information that is intentionally selected for publication should be displayed.

---

# 52. Final Portfolio Positioning

The portfolio should position Nestor G. Arcebuche Jr. around these capabilities:

```text
IT LEADERSHIP
       +
SOFTWARE DEVELOPMENT
       +
SYSTEMS ADMINISTRATION
       +
INFRASTRUCTURE
       +
ENTERPRISE APPLICATIONS
       +
LMS / EDUCATION TECHNOLOGY
       +
SECURITY
       +
AUTOMATION
       +
SYSTEM MONITORING
       +
TECHNICAL OPERATIONS
```

The **Projects / Accomplishments** section should be the centerpiece of the website.

The Admin Page should make it easy to continuously add new accomplishments so the homepage can evolve over time without requiring changes to the React source code.
