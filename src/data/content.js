/** Career start — experience years are derived from this, not hardcoded. */
export const WORK_STARTED = new Date(2023, 7, 1) // 1 Aug 2023

export function getYearsExperience(now = new Date()) {
  const months =
    (now.getFullYear() - WORK_STARTED.getFullYear()) * 12 +
    (now.getMonth() - WORK_STARTED.getMonth())
  const years = Math.max(0, months / 12)
  return (Math.floor(years * 10) / 10).toFixed(1)
}

export const person = {
  name: 'Punith Gowda',
  displayName: 'PUNITH GOWDA',
  role: 'Full-stack developer',
  location: 'Bengaluru',
  get micro() {
    return `${getYearsExperience()}+ years shipping products · Bengaluru`
  },
  email: 'punithgsp.partha@gmail.com',
  github: 'https://github.com/i-punithgowda',
  linkedin: 'https://www.linkedin.com/in/punith-gowda-s-p-7452391b8',
}

export const navItems = [
  { href: '#method', label: 'Method' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#recognition', label: 'Awards' },
  { href: '#about', label: 'About' },
  // { href: '#places', label: 'Reach' },
  { href: '#contact', label: 'Contact' },
]

export const intro = {
  kicker: 'Full-stack developer · Bengaluru',
  heading:
    'I translate complex business goals into complete products. Fast to ship — the architecture and the review are mine.',
  stats: [
    { id: 'years', suffix: '+', label: 'Years shipping full-stack products', ring: 'var(--color-grass)' },
    { id: 'products', value: 5, suffix: '', label: 'Products launched, from MVP to scale', ring: 'var(--color-sky)' },
    { id: 'problems', display: '∞', suffix: '', label: 'Problems solved along the way', ring: 'var(--color-coral)' },
  ],
}

export const method = {
  kicker: 'How I build',
  heading: 'I build end to end. Nothing ships that I haven’t read, run, and understood.',
  steps: [
    { n: 1, title: 'Brief', detail: 'Requirements, and the taste bar' },
    { n: 2, title: 'Spec', detail: 'Architecture, data model, constraints' },
    { n: 3, title: 'Build', detail: 'Implementation, full-stack' },
    { n: 4, title: 'Review', detail: 'Profile it, run it, fix it' },
    { n: 5, title: 'Ship', detail: 'Deploy, observe, harden' },
  ],
}

export const crafts = [
  { id: 'devices', title: 'Web + mobile', accent: '#ff705d' },
  { id: 'pay', title: 'Payments', accent: '#f5e211' },
  { id: 'live', title: 'Realtime', accent: '#FF007F' },
  { id: 'data', title: 'Data', accent: '#2ba0ff' },
  { id: 'migrate', title: 'Migration', accent: '#1e201b' },
  { id: 'cloud', title: 'Cloud', accent: '#7c5cff' },
]

export const projects = [
  {
    id: 'summarize',
    title: 'Git Diff Summarizer',
    status: 'Present',
    accent: '#7c5cff',
    ink: '#2c2e2a',
    role: 'Builder',
    period: 'July 2025 – Present',
    summary:
      'Local-first Git branch diffs, summarized per file by Gemini 2.5 Flash — with rule-based code checks.',
    stack: ['FastAPI', 'React', 'Python', 'Gemini 2.5 Flash', 'Docker'],
    architecture: [
      { label: 'Git', icon: 'Git' },
      { label: 'FastAPI', icon: 'FastAPI' },
      { label: 'Gemini', icon: 'Gemini' },
      { label: 'React', icon: 'React' },
    ],
    points: [
      'Local-first tool to compare Git branches and generate per-file change summaries with Gemini 2.5 Flash.',
      'FastAPI backend computes the diffs and extracts file-level code changes.',
      'Rule-based analysis flags coding-standard violations with explanatory feedback.',
    ],
  },
  {
    id: 'yachthub',
    title: 'YachtHub',
    status: 'Shipped',
    accent: '#ff705d',
    ink: '#2c2e2a',
    role: 'Backend developer',
    period: 'Aug 2024 – Jan 2025',
    summary:
      'Internet pack bookings for harbours — berths, VLANs, invoices, and signed document delivery.',
    stack: ['Node.js', 'PostgreSQL', 'Redis', 'Google Cloud'],
    architecture: [
      { label: 'Node.js', icon: 'Node.js' },
      { label: 'PostgreSQL', icon: 'PostgreSQL' },
      { label: 'Redis', icon: 'Redis' },
      { label: 'Cloud Storage', icon: 'Google Cloud' },
    ],
    points: [
      'Transactional internet-pack bookings across harbours: berth-level availability, per-day operational events, and partial cancellations.',
      'Berth assignment and VLAN mapping, with Redis caching for availability and pricing lookups.',
      'Invoice and document delivery via Google Cloud Storage — signed URLs, CDN-backed access, and role-based admin workflows.',
    ],
  },
  {
    id: 'mentoring',
    title: 'University Mentoring',
    status: 'Shipped',
    accent: '#2ba0ff',
    ink: '#2c2e2a',
    role: 'Full-stack developer',
    period: 'June 2024 – Jan 2025',
    summary:
      'Multi-university mentoring, exams, live chat, and student progress — GPA, EPA, logbooks.',
    stack: ['React', 'Node.js', 'MySQL', 'Sequelize', 'WebSockets'],
    architecture: [
      { label: 'React', icon: 'React' },
      { label: 'Node.js', icon: 'Node.js' },
      { label: 'WebSockets', icon: 'WebSockets' },
      { label: 'MySQL', icon: 'MySQL' },
    ],
    points: [
      'Multi-university system for student records, online exams, scores, logbooks, EPA, and assessments.',
      'Mentoring module with appointment timeslots, live chat over WebSockets, and performance views (GPA, GPAX, semester marks).',
      'Singleton DB connection so one backend can reach multiple university databases through a master DB.',
      'Admin settings for phases, academic years, and mentor-to-student assignments.',
      'Admin dashboard for Logbook, EPA Progress, Longitudinal Pool, and Excellence metrics.',
    ],
  },
  {
    id: 'edtech',
    title: 'EdTech Performance',
    status: 'Shipped',
    accent: '#8ed462',
    ink: '#2c2e2a',
    role: 'Backend developer',
    period: 'Dec 2023 – May 2024',
    summary:
      'Profiled a legacy PHP backend, rewrote the hot path, and moved core modules to Node.js — 3 min down to under 5s.',
    stack: ['Node.js', 'PHP', 'MySQL'],
    architecture: [
      { label: 'PHP', icon: 'PHP' },
      { label: 'MySQL', icon: 'MySQL' },
      { label: 'Node.js', icon: 'Node.js' },
    ],
    points: [
      'Profiled a legacy PHP backend with complex SQL and request-processing flows.',
      'Cut API response times from about 3 minutes to under 5 seconds.',
      'Stored procedures brought heavy query time from around 40 seconds to 1 second.',
      'Moved core backend modules from PHP to Node.js for maintainability and async handling.',
      'Data fetching and filtering scaled to thousands of student records after the migration.',
    ],
  },
]

export const skills = {
  kicker: 'The stack',
  heading: 'The toolbox.',
  filters: [
    { id: 'all', label: 'All', color: 'bg-ink' },
    { id: 'ai', label: 'AI & LLM', color: 'bg-sky' },
    { id: 'agents', label: 'Agents & retrieval', color: 'bg-sun' },
    { id: 'languages', label: 'Languages', color: 'bg-grass' },
    { id: 'backend', label: 'Backend & cloud', color: 'bg-coral' },
    { id: 'frontend', label: 'Frontend', color: 'bg-sun' },
    { id: 'ops', label: 'Mobile & ops', color: 'bg-sky' },
    { id: 'design', label: 'Design', color: 'bg-coral' },
  ],
  items: [
    { name: 'Claude', group: 'ai' },
    { name: 'GPT', group: 'ai' },
    { name: 'Llama', group: 'ai' },
    { name: 'RAG pipelines', group: 'ai' },
    { name: 'Tool calling', group: 'ai' },
    { name: 'Prompt engineering', group: 'ai' },
    { name: 'Workflow automation', group: 'ai' },
    { name: 'Model Context Protocol', group: 'agents' },
    { name: 'LangChain', group: 'agents' },
    { name: 'LangGraph', group: 'agents' },
    { name: 'Langflow', group: 'agents' },
    { name: 'Ollama', group: 'agents' },
    { name: 'Qdrant', group: 'agents' },
    { name: 'Sub-agents', group: 'agents' },
    { name: 'Connectors', group: 'agents' },
    { name: 'Claude Code', group: 'agents' },
    { name: 'Claude Fable', group: 'agents' },
    { name: 'Claude Cowork', group: 'agents' },
    { name: 'Codex', group: 'agents' },
    { name: 'Antigravity', group: 'agents' },
    { name: 'Python', group: 'languages' },
    { name: 'JavaScript', group: 'languages' },
    { name: 'TypeScript', group: 'languages' },
    { name: 'Java', group: 'languages' },
    { name: 'SQL', group: 'languages' },
    { name: 'HTML', group: 'languages' },
    { name: 'CSS3', group: 'languages' },
    { name: 'PHP', group: 'languages' },
    { name: 'FastAPI', group: 'backend' },
    { name: 'Node.js', group: 'backend' },
    { name: 'Express', group: 'backend' },
    { name: 'Flask', group: 'backend' },
    { name: 'REST APIs', group: 'backend' },
    { name: 'WebSockets', group: 'backend' },
    { name: 'PostgreSQL', group: 'backend' },
    { name: 'MySQL', group: 'backend' },
    { name: 'MongoDB', group: 'backend' },
    { name: 'Redis', group: 'backend' },
    { name: 'Sequelize', group: 'backend' },
    { name: 'Firebase', group: 'backend' },
    { name: 'Google Cloud', group: 'backend' },
    { name: 'AWS', group: 'backend' },
    { name: 'Vercel', group: 'backend' },
    { name: 'React', group: 'frontend' },
    { name: 'React Native', group: 'frontend' },
    { name: 'Next.js', group: 'frontend' },
    { name: 'Vite', group: 'frontend' },
    { name: 'Tailwind CSS', group: 'frontend' },
    { name: 'Redux', group: 'frontend' },
    { name: 'Zustand', group: 'frontend' },
    { name: 'GSAP', group: 'frontend' },
    { name: 'Framer', group: 'frontend' },
    { name: 'Three.js', group: 'frontend' },
    { name: 'Flutter', group: 'ops' },
    { name: 'Git', group: 'ops' },
    { name: 'GitHub Actions', group: 'ops' },
    { name: 'Docker', group: 'ops' },
    { name: 'Nginx', group: 'ops' },
    { name: 'Postman', group: 'ops' },
    { name: 'Domains & DNS', group: 'ops' },
    { name: 'Search Console', group: 'ops' },
    { name: 'Canva', group: 'design' },
    { name: 'Brand systems', group: 'design' },
    { name: 'Print collateral', group: 'design' },
    { name: 'Logo vectorisation', group: 'design' },
  ],
}

export const experience = [
  {
    when: 'Aug 2023',
    year: '2023',
    range: 'Aug 2023 – Apr 2024',
    title: 'Software Developer',
    place: 'Techcanopy',
    mark: null,
  },
  {
    when: 'Apr 2024',
    year: '2024',
    range: 'Apr 2024 – Apr 2026',
    title: 'Software Engineer',
    place: 'Techcanopy',
    mark: null,
  },
  {
    when: 'Apr 2026',
    year: '2026',
    range: 'Apr 2026 – Present',
    title: 'Senior Software Engineer I',
    place: 'Techcanopy',
    mark: 'Now',
  },
]

export const about = {
  kicker: 'About',
  heading:
    'Twenty-five, from Bengaluru. Building full-stack products for startups while keeping the systems calm under load.',
  timeline: [
    {
      title: 'Senior Software Engineer I',
      place: 'Techcanopy, Bengaluru',
      meta: 'Apr 2026 – Present',
    },
    {
      title: 'Master of Computer Applications',
      place: 'R V College of Engineering',
      meta: 'Feb 2022 – Aug 2023 · CGPA 8.58',
    },
    {
      title: 'Bachelor of Computer Applications',
      place: 'Global Institute of Management Sciences',
      meta: 'Jun 2018 – Sep 2021 · CGPA 8.05',
    },
  ],
  offer: {
    title: 'What I take on',
    copy: 'Platform hardening, full-stack product engineering, and AI-assisted developer tools — shipped as real systems, not demos.',
    items: [
      'Performance & query work',
      'Full-stack web products',
      'Local-first AI tooling',
    ],
  },
}

export const awards = [
  {
    id: 'pat-on-the-back',
    title: 'Pat on the Back',
    kind: 'certificate',
    org: 'Techcanopy',
    when: 'Q2 2023',
    mark: 'First',
    accent: '#f5e211',
    copy: 'Timely delivery with unwavering enthusiasm — whether a simple task or a complex project.',
  },
  {
    id: 'team-impact',
    title: 'Team Impact',
    kind: 'certificate',
    org: 'Techcanopy',
    when: 'Q3 2024',
    mark: 'Team',
    accent: '#2ba0ff',
    copy: 'Career Portal, Access Management, and Finzy — impact that moved the whole team.',
  },
  {
    id: 'rising-star',
    title: 'Rising Star',
    kind: 'photo',
    org: 'Techcanopy · IGNITE',
    when: '2024',
    mark: null,
    accent: '#f5e211',
    copy: '',
  },
  {
    id: 'consistent-contributor',
    title: 'Consistent Contributor',
    kind: 'certificate',
    org: 'Techcanopy',
    when: 'Q4 2024',
    mark: 'Rexx',
    accent: '#8ed462',
    copy: 'Exemplary dedication on Rexx — meeting and often exceeding the bar, every sprint.',
  },
  {
    id: 'standout-performer',
    title: 'Standout Performer',
    kind: 'certificate',
    org: 'Techcanopy',
    when: 'Q1 2025',
    mark: 'Client',
    accent: '#8ed462',
    copy: 'Individual work that made the team shine — noticed and appreciated by the client.',
  },
]

export const credentials = [
  {
    id: 'claude',
    issuer: 'Anthropic',
    title: 'Claude Certified Architect',
    detail: 'Foundations',
    href: 'https://www.credly.com/badges/c4f2be8c-c722-4d68-b4de-9c4bfeebbaca',
    hrefLabel: 'Verify',
    icon: 'Anthropic',
    accent: '#1e201b',
    ink: '#f5f1e4',
  },
  {
    id: 'azure',
    issuer: 'Microsoft · Coursera',
    title: 'Azure Fundamentals AZ-900',
    detail: 'Exam prep specialization · 2023',
    href: 'https://coursera.org/verify/specialization/ZUH79C2UHZGH',
    hrefLabel: 'Verify',
    icon: 'Azure',
    accent: '#2ba0ff',
    ink: '#2c2e2a',
  },
]

export const reach = {
  kicker: 'The work commutes',
  heading: 'India, UAE, and Thailand.',
  places: [{ name: 'India' }, { name: 'UAE' }, { name: 'Thailand' }],
}

export const contact = {
  kicker: 'Open for work · Bengaluru',
  heading: 'Let’s build.',
}
