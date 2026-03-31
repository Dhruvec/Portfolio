import { useState, useEffect, useRef } from 'react'
import './App.css'

/* ── Navbar ─────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-logo">Dhruv</div>
      <ul className="nav-links">
        {['about', 'skills', 'projects', 'experience', 'contact'].map(s => (
          <li key={s}>
            <a href={`#${s}`} onClick={e => { e.preventDefault(); scroll(s) }}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-cta">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
          Resume ↗
        </a>
        <a href="#contact" onClick={e => { e.preventDefault(); scroll('contact') }} className="btn btn-primary">
          Hire me
        </a>
      </div>
    </nav>
  )
}

/* ── Hero ────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-glow-top" />
      <div className="hero-glow-left" />
      <div className="hero-glow-right" />
      <div className="hero-grid" />

      <div className="floaters">
        <div className="float-card fc1">
          <div className="fc-icon" style={{ background: 'rgba(0,111,238,0.15)', color: '#338EF7' }}>🤖</div>
          <div>
            <div className="fc-title">LLM Engineer</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Post-Training & Eval</div>
          </div>
        </div>
        <div className="float-card fc2">
          <div className="fc-icon" style={{ background: 'rgba(120,40,200,0.15)', color: '#9750DD' }}>🧠</div>
          <div>
            <div className="fc-title">AI / ML Engineer</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>RAG & GenAI Systems</div>
          </div>
        </div>
        <div className="float-card fc3">
          <div className="fc-icon" style={{ background: 'rgba(6,183,219,0.15)', color: '#06B7DB' }}>🐍</div>
          <div>
            <div className="fc-title">Python Developer</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>TensorFlow · PyTorch</div>
          </div>
        </div>
        <div className="float-card fc4">
          <div className="fc-icon" style={{ background: 'rgba(23,201,100,0.15)', color: '#17C964' }}>✅</div>
          <div>
            <div className="fc-title">Available for hire</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Open to opportunities</div>
          </div>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          CS Undergrad · GLA University · India
        </div>

        <h1 className="hero-title">
          Building Intelligent<br />
          <span className="gradient-text">AI & LLM Systems</span>
        </h1>

        <p className="hero-subtitle">
          I'm a Computer Science undergraduate specializing in <strong style={{ color: 'var(--text)' }}>LLM post-training, RAG pipelines,</strong> and
          AI evaluation systems. I build GenAI products that are accurate, safe, and production-ready.
        </p>

        <div className="hero-actions">
          <a href="#projects" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn btn-primary btn-hero-primary">
            View Projects →
          </a>
          <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn btn-ghost btn-hero-ghost">
            Get in Touch
          </a>
        </div>

        <div className="hero-stats">
          {[
            { num: '1+', label: 'Internship' },
            { num: '5+', label: 'AI Projects' },
            { num: '10+', label: 'Tech Skills' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div className="hero-stat-num">{s.num}</div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── About ───────────────────────────────────────────── */
function About() {
  const ref = useRef(null)
  useScrollAnimation(ref)

  return (
    <section id="about" className="section" ref={ref}>
      <div className="fade-in-section">
        <span className="section-label">About Me</span>
        <div className="about-grid">
          <div className="about-image-wrap">
            <div style={{
              position: 'relative', zIndex: 1,
              width: '100%', aspectRatio: '4/5',
              borderRadius: 'calc(var(--radius-xl) - 1px)',
              background: 'linear-gradient(135deg, #0a1628 0%, #120a28 50%, #001a20 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '6rem', overflow: 'hidden',
            }}>
              <span style={{ filter: 'drop-shadow(0 0 40px rgba(0,111,238,0.5))' }}>👨‍💻</span>
            </div>
            <div className="about-experience-badge">
              <div className="exp-num">2026</div>
              <div className="exp-label">Graduating</div>
            </div>
          </div>

          <div className="about-info">
            <h2>CS Undergrad &<br />AI/LLM Enthusiast</h2>
            <p>
              Hi! I'm <strong style={{ color: 'var(--text)' }}>Dhruv</strong>, a B.Tech Computer Science student at{' '}
              <strong style={{ color: 'var(--blue-light)' }}>GLA University</strong> (2022–2026),
              with a strong focus on Artificial Intelligence, Machine Learning, and Large Language Models.
            </p>
            <p>
              I have hands-on experience in <strong style={{ color: 'var(--text)' }}>LLM post-training & evaluation</strong> through
              my internship at <strong style={{ color: 'var(--violet-light)' }}>Ethara AI</strong>, and I build production-grade
              RAG systems, agent-based AI assistants, and GenAI pipelines.
            </p>
            <p>
              I'm particularly aligned with <strong style={{ color: 'var(--cyan)' }}>AI Engineer, LLM Engineer, and GenAI Developer</strong> roles
              where I can combine my strong DSA foundation with real-world AI system design.
            </p>
            <div className="about-chips">
              {[
                { label: 'LLMs', color: 'blue' },
                { label: 'RAG Systems', color: 'violet' },
                { label: 'LangChain', color: 'cyan' },
                { label: 'HuggingFace', color: 'green' },
                { label: 'Python', color: 'blue' },
                { label: 'PyTorch', color: 'violet' },
                { label: 'FAISS', color: 'cyan' },
                { label: 'LangGraph', color: 'green' },
              ].map(t => (
                <span key={t.label} className={`chip ${t.color}`}>{t.label}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Skills ──────────────────────────────────────────── */
function useScrollAnimation(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.fade-in-section, .skill-card').forEach((el, i) => {
            setTimeout(() => { el.classList.add('visible', 'animated') }, i * 80)
          })
        }
      }),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])
}

const SKILLS = [
  { icon: '🤖', name: 'LLMs & GenAI', desc: 'Post-training, fine-tuning, prompt engineering, response quality evaluation', level: 'Advanced', pct: 0.88, c1: '#338EF7', c2: '#9750DD' },
  { icon: '🔗', name: 'RAG & LangChain', desc: 'LangChain, LangGraph, FAISS vector DBs, retriever pipelines, embeddings', level: 'Advanced', pct: 0.85, c1: '#9750DD', c2: '#C084FC' },
  { icon: '🐍', name: 'Python', desc: 'Core language for all AI/ML, scripting, automation, and backend logic', level: 'Advanced', pct: 0.90, c1: '#17C964', c2: '#06B7DB' },
  { icon: '🧠', name: 'ML / Deep Learning', desc: 'TensorFlow, PyTorch, Keras, Scikit-learn, transfer learning, model eval', level: 'Proficient', pct: 0.80, c1: '#F5A524', c2: '#F31260' },
  { icon: '🏗️', name: 'AI System Design', desc: 'Agent-based workflows, tool calling, intent routing, memory handling', level: 'Proficient', pct: 0.78, c1: '#06B7DB', c2: '#338EF7' },
  { icon: '⚙️', name: 'Dev Tools & DSA', desc: 'Git, GitHub, Docker, SQL, Vector DBs, Data Structures & Algorithms', level: 'Proficient', pct: 0.75, c1: '#338EF7', c2: '#17C964' },
]

function Skills() {
  const ref = useRef(null)
  useScrollAnimation(ref)

  return (
    <section className="skills-section" id="skills" ref={ref}>
      <div className="skills-inner">
        <div className="skills-header fade-in-section">
          <span className="section-label">My Skills</span>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            A curated set of AI/ML tools and technologies I use to build intelligent systems.
          </p>
        </div>
        <div className="skills-grid">
          {SKILLS.map(s => (
            <div className="skill-card" key={s.name}>
              <div className="skill-icon-wrap">{s.icon}</div>
              <div className="skill-name">{s.name}</div>
              <div className="skill-desc">{s.desc}</div>
              <div className="skill-bar-track">
                <div className="skill-bar-fill" style={{ width: `${s.pct * 100}%`, '--bar-color-1': s.c1, '--bar-color-2': s.c2 }} />
              </div>
              <div className="skill-level">{s.level}</div>
            </div>
          ))}
        </div>

        {/* Tech tag cloud */}
        <div className="fade-in-section" style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Also experienced with</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem' }}>
            {['HuggingFace Transformers', 'Streamlit', 'FAISS', 'Groq LLM', 'Twilio API', 'Java', 'C', 'HTML/CSS', 'OOPs', 'Kaggle', 'MCP'].map(t => (
              <span className="chip" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Projects ────────────────────────────────────────── */
const PROJECTS = [
  {
    emoji: '🤖',
    ph: 'ph-blue',
    badge: 'JS',
    title: 'Virtual-Assiatant-jarvis',
    desc: 'A voice-activated virtual assistant capable of executing system commands and web automation with speech recognition.',
    tags: ['JavaScript', 'Speech AI', 'Automation'],
    highlight: 'Real-time voice command execution pipeline',
    live: '#',
    code: 'https://github.com/Dhruvec/Virtual-Assiatant-jarvis',
  },
  {
    emoji: '🌐',
    ph: 'ph-cyan',
    badge: 'Python',
    title: 'AI-Browser-Steel',
    desc: 'Next-generation AI-powered browser with multi-tab support and agentic automation for ticket booking and search.',
    tags: ['Python', 'AI Agent', 'Browser Automation'],
    highlight: 'Agentic web task automation system',
    live: '#',
    code: 'https://github.com/Dhruvec/AI-Browser-Steel',
  },
  {
    emoji: '⚠️',
    ph: 'ph-violet',
    badge: 'Python',
    title: 'Hallunication-Detection',
    desc: 'A detection system for identifying and mitigating hallucinations in LLM-generated responses to ensure high response quality.',
    tags: ['Python', 'LLM Eval', 'NLP Factuality'],
    highlight: 'Reliability framework for GenAI outputs',
    live: '#',
    code: 'https://github.com/Dhruvec/Hallunication-Detection',
  },
  {
    emoji: '🧠',
    ph: 'ph-green',
    badge: 'Python',
    title: 'Mental_Health_Chatbot',
    desc: 'An AI assistant designed for mental health support, implementing sentiment analysis and contextual therapeutic responses.',
    tags: ['Python', 'AI Therapist', 'Sentiment Analysis'],
    highlight: 'Context-aware therapeutic interaction system',
    live: '#',
    code: 'https://github.com/Dhruvec/Mental_Health_Chatbot',
  },
  {
    emoji: '💼',
    ph: 'ph-blue',
    badge: 'JS',
    title: 'AI_first_CRM',
    desc: 'An AI-driven CRM tool built with JavaScript to enhance business automation, lead scoring, and user management.',
    tags: ['JavaScript', 'CRM', 'AI Automation'],
    highlight: 'Intelligent business workflow optimization',
    live: '#',
    code: 'https://github.com/Dhruvec/AI_first_CRM',
  },
  {
    emoji: '🤖',
    ph: 'ph-violet',
    badge: 'Python',
    title: 'GPT-2',
    desc: 'Implementation and experimentation with GPT-2 for large-scale language modeling and text generation using transformer models.',
    tags: ['Python', 'GPT-2', 'Transformers', 'NLP'],
    highlight: 'Advanced language modeling experiments',
    live: '#',
    code: 'https://github.com/Dhruvec/GPT-2',
  },
  {
    emoji: '🎬',
    ph: 'ph-cyan',
    badge: 'Notebook',
    title: 'Movie_Recommandation',
    desc: 'A machine learning system for personalized movie recommendations based on user preferences and history.',
    tags: ['Jupyter', 'ML', 'Recommender System'],
    highlight: 'Data-driven content personalization engine',
    live: '#',
    code: 'https://github.com/Dhruvec/Movie_Recommandation',
  },
  {
    emoji: '🔍',
    ph: 'ph-green',
    badge: 'Python',
    title: 'code_extractor',
    desc: 'A tool that extracts Python code from sources and generates structured JSON metadata for automated analysis.',
    tags: ['Python', 'JSON', 'Code Analysis'],
    highlight: 'Automated metadata extraction workflow',
    live: '#',
    code: 'https://github.com/Dhruvec/code_extractor',
  },
  {
    emoji: '🏥',
    ph: 'ph-blue',
    badge: 'Python',
    title: 'Medical-AI-ChatBot',
    desc: 'AI-powered medical chatbot using RAG with FAISS and Mistral to provide accurate, retrieval-augmented healthcare info.',
    tags: ['Python', 'RAG', 'Mistral', 'FAISS'],
    highlight: 'Hallucination reduction via local retrieval',
    live: '#',
    code: 'https://github.com/Dhruvec/Medical-AI-ChatBot',
  },
]

function Projects() {
  const ref = useRef(null)
  useScrollAnimation(ref)

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="fade-in-section">
        <span className="section-label">Work</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-desc">
          End-to-end AI systems, RAG pipelines, and agent architectures I've built from scratch.
        </p>
      </div>
      <div className="projects-grid">
        {PROJECTS.map(p => (
          <div className="project-card fade-in-section" key={p.title}>
            <div className="project-img-wrap">
              <div className={`project-placeholder ${p.ph}`}>{p.emoji}</div>
              <div className="project-overlay" />
              <div className="project-img-badge">{p.badge}</div>
            </div>
            <div className="project-body">
              <div className="project-tags">
                {p.tags.map(t => <span className="project-tag" key={t}>{t}</span>)}
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              {/* highlight */}
              <div style={{
                display: 'flex', alignItems: 'flex-start', gap: '0.5rem',
                padding: '0.6rem 0.8rem', borderRadius: 'var(--radius-sm)',
                background: 'rgba(0,111,238,0.07)', border: '1px solid rgba(0,111,238,0.18)',
                marginBottom: '1rem', fontSize: '0.75rem', color: 'var(--blue-light)',
                lineHeight: 1.4,
              }}>
                <span style={{ flexShrink: 0 }}>💡</span>
                <span>{p.highlight}</span>
              </div>
              <div className="project-actions">
                <a href={p.code} target="_blank" rel="noopener" className="btn btn-ghost btn-sm">GitHub ↗</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── Experience ──────────────────────────────────────── */
const TIMELINE = [
  {
    date: 'Dec 2025 – Feb 2026',
    role: 'LLM Post-Training Intern',
    company: 'Ethara AI · Remote',
    desc: 'Worked on LLM post-training workflows. Evaluated model outputs for reasoning accuracy, instruction following, and response quality. Ensured data quality, consistency, and alignment. Contributed to AI evaluation pipelines.',
    color: '#338EF7',
  },
  {
    date: '2024',
    role: 'Event Coordinator',
    company: 'Spandan Fest · GLA University',
    desc: 'Coordinated one of GLA University\'s major cultural fests, managing teams, logistics, and event flow across multiple sub-events.',
    color: '#9750DD',
  },
  {
    date: 'Sep 2024',
    role: 'Hackathon Participant',
    company: 'Smart India Hackathon (SIH 2024)',
    desc: 'Participated in India\'s largest hackathon, collaborating on a team to build an AI/tech solution under time constraints.',
    color: '#06B7DB',
  },
]

const EDUCATION = [
  { degree: 'B.Tech — Computer Science', inst: 'GLA University', year: '2022 – 2026', score: '70.4%' },
  { degree: 'Intermediate (Class 12)', inst: 'Senior Secondary', year: '2020 – 2022', score: '63%' },
  { degree: 'High School (Class 10)', inst: 'Secondary School', year: '– 2020', score: '77%' },
]

function Experience() {
  const ref = useRef(null)
  useScrollAnimation(ref)

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="fade-in-section">
        <span className="section-label">Journey</span>
        <h2 className="section-title">Experience & Education</h2>
        <p className="section-desc">My real-world AI experience and academic background.</p>
      </div>

      {/* Education cards */}
      <div className="fade-in-section" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem', marginTop: '2.5rem', marginBottom: '3rem' }}>
        {EDUCATION.map(e => (
          <div key={e.degree} style={{
            background: 'var(--bg-2)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius)', padding: '1.25rem',
          }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>{e.year}</div>
            <div style={{ fontWeight: 700, marginBottom: '0.25rem', fontSize: '0.95rem' }}>{e.degree}</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-sub)', marginBottom: '0.5rem' }}>{e.inst}</div>
            <div style={{ display: 'inline-block', padding: '0.2rem 0.6rem', borderRadius: '100px', background: 'rgba(0,111,238,0.1)', border: '1px solid rgba(0,111,238,0.25)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--blue-light)' }}>{e.score}</div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="timeline fade-in-section">
        {TIMELINE.map(t => (
          <div className="timeline-item" key={t.role}>
            <div className="timeline-dot" style={{ background: t.color, boxShadow: `0 0 12px ${t.color}60` }} />
            <div className="timeline-date">{t.date}</div>
            <div className="timeline-role">{t.role}</div>
            <div className="timeline-company">{t.company}</div>
            <div className="timeline-desc">{t.desc}</div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="fade-in-section" style={{ marginTop: '3rem' }}>
        <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Certifications</div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {['Digital Marketing — KVCH', 'Introduction to AI — SkillUp'].map(c => (
            <div key={c} style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.5rem 1rem', borderRadius: 'var(--radius-sm)',
              background: 'var(--bg-2)', border: '1px solid var(--border)',
              fontSize: '0.82rem', color: 'var(--text-sub)', fontWeight: 500,
            }}>
              🏆 {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Contact ─────────────────────────────────────────── */
function Contact() {
  const ref = useRef(null)
  useScrollAnimation(ref)

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'dhruvc17745@gmail.com', href: 'mailto:dhruvc17745@gmail.com' },
    { icon: '📱', label: 'Phone', value: '+91 8394012562', href: 'tel:+91 8394012562' },
    { icon: '📍', label: 'Location', value: 'Agra, India', href: null },
    { icon: '🎓', label: 'University', value: 'GLA University', href: null },
  ]

  const socialLinks = [
    { icon: '🐙', label: 'GitHub', href: 'https://github.com/Dhruvec', color: '#338EF7' },
    { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/dhruv-929265392/', color: '#0A66C2' },
    { icon: '📊', label: 'Kaggle', href: 'https://www.kaggle.com/dhruv894', color: '#20BEFF' },
    { icon: '🐦', label: 'Twitter', href: '#', color: '#1DA1F2' },
  ]

  return (
    <section className="contact-section" id="contact" ref={ref}>
      <div className="contact-glow" />
      <div className="contact-inner" style={{ maxWidth: '900px' }}>
        <div className="fade-in-section">
          <span className="section-label" style={{ justifyContent: 'center' }}>Contact</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Looking for an <strong style={{ color: 'var(--blue-light)' }}>AI Engineer, LLM Engineer, or GenAI Developer?</strong>{' '}
            I'd love to hear about your project or opportunity.
          </p>
        </div>

        {/* Contact info cards */}
        <div className="fade-in-section" style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '0.75rem', marginTop: '2.5rem',
        }}>
          {contactInfo.map(c => (
            <div key={c.label} style={{
              background: 'var(--bg-2)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius)', padding: '1.25rem',
              transition: 'all 0.2s',
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{c.icon}</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>{c.label}</div>
              {c.href ? (
                <a href={c.href} style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--blue-light)', wordBreak: 'break-all' }}>{c.value}</a>
              ) : (
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-sub)' }}>{c.value}</div>
              )}
            </div>
          ))}
        </div>

        <div className="fade-in-section" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem', marginTop: '1.5rem',
        }}>
          {/* Open to roles */}
          <div style={{
            background: 'var(--bg-2)', border: '1px solid rgba(0,111,238,0.25)',
            borderRadius: 'var(--radius)', padding: '1.5rem',
            background: 'linear-gradient(135deg, rgba(0,111,238,0.06) 0%, rgba(120,40,200,0.06) 100%)',
          }}>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>🎯</span> Best Role Fit
            </div>
            {['AI Engineer (Entry-level)', 'LLM Engineer / GenAI Developer', 'AI Evaluation / AI Trainer', 'Python Developer (AI-focused)'].map(r => (
              <div key={r} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.45rem 0', borderBottom: '1px solid var(--border)', fontSize: '0.83rem', color: 'var(--text-sub)' }}>
                <span style={{ color: '#17C964', fontSize: '0.7rem' }}>▶</span> {r}
              </div>
            ))}
          </div>

          {/* Social */}
          <div style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem' }}>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '1rem' }}>🌐 Find Me Online</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {socialLinks.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener" style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.6rem 0.75rem', borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-3)', border: '1px solid var(--border)',
                  fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-sub)',
                  transition: 'all 0.2s', textDecoration: 'none',
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--border-hover)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = ''; e.currentTarget.style.borderColor = '' }}
                >
                  <span>{s.icon}</span> {s.label}
                  <span style={{ marginLeft: 'auto', fontSize: '0.7rem', opacity: 0.5 }}>↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Footer ──────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        © 2025 <span>Dhruv</span> · B.Tech CSE, GLA University · Built with React &amp; Vite
      </div>
      <div className="footer-right">
        {[
          { icon: '🐙', href: 'https://github.com/Dhruvec' },
          { icon: '💼', href: 'https://www.linkedin.com/in/dhruv-929265392/' },
          { icon: '📊', href: 'https://www.kaggle.com/dhruv894' },
          { icon: '🐦', href: '#' },
        ].map((link, i) => (
          <a key={i} href={link.href} target="_blank" rel="noopener" className="footer-link">{link.icon}</a>
        ))}
      </div>
    </footer>
  )
}

/* ── Scroll to top ───────────────────────────────────── */
function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      className={`scroll-top${visible ? ' visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >↑</button>
  )
}

/* ── App ─────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
