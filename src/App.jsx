import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import Lenis from 'lenis'
import { Mail, ExternalLink, ArrowRight, Code, Brain, Bot, Menu, X, Globe, User } from 'lucide-react'
import './App.css'

// ─── Smooth Scroll Hook ───
const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])
}

// ─── Navbar ───
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`nav-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="logo"
        >
          DHRUV.
        </motion.div>

        <div className="nav-links">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="nav-link"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="nav-cta"
          >
            Hire Me
          </motion.a>
        </div>

        <div className="mobile-toggle" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X /> : <Menu />}
        </div>
      </div>
    </nav>
  )
}

// ─── Hero ───
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-blob blob-1"></div>
        <div className="hero-blob blob-2"></div>
      </div>
      
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="hero-badge"
        >
          <Bot size={14} />
          <span>Available for AI Engineer Roles</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="hero-title"
        >
          Building the <br />
          <span className="gradient-primary">Future of AI.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="hero-description"
        >
          I'm Dhruv, a CS Undergrad specialized in building intelligent LLM systems, RAG pipelines, and production-ready GenAI products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="hero-btns"
        >
          <a href="#projects" className="btn-primary">
            View My Work <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Projects ───
const PROJECTS = [
  {
    title: 'AI Browser Steel',
    category: 'AI Agent / Automation',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1932&auto=format&fit=crop',
    link: 'https://github.com/Dhruvec/AI-Browser-Steel'
  },
  {
    title: 'NL2SQL',
    category: 'Data / SQL / NLP',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2021&auto=format&fit=crop',
    link: 'https://github.com/Dhruvec/NL2SQL'
  },
  {
    title: 'Mental Health Chatbot',
    category: 'AI / Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
    link: 'https://github.com/Dhruvec/Mental_Health_Chatbot'
  },
  {
    title: 'AI-First CRM',
    category: 'SaaS / AI Automation',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    link: 'https://github.com/Dhruvec/AI_first_CRM'
  },
  {
    title: 'Hallucination Detection',
    category: 'LLM Evaluation',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop',
    link: 'https://github.com/Dhruvec/Hallunication-Detection'
  },
  {
    title: 'Virtual Assistant Jarvis',
    category: 'Speech AI / Agent',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop',
    link: 'https://github.com/Dhruvec/Virtual-Assiatant-jarvis'
  },
  {
    title: 'Medical AI Chatbot',
    category: 'RAG / Health Tech',
    image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=2070&auto=format&fit=crop',
    link: 'https://github.com/Dhruvec/Medical-AI-ChatBot'
  },
  {
    title: 'GPT-2 Implementation',
    category: 'Deep Learning',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4628c9757?q=80&w=1964&auto=format&fit=crop',
    link: 'https://github.com/Dhruvec/GPT-2'
  },
  {
    title: 'Movie Recommendation',
    category: 'Data Science',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop',
    link: 'https://github.com/Dhruvec/Movie_Recommandation'
  },
  {
    title: 'Code Extractor',
    category: 'DevTools / Python',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop',
    link: 'https://github.com/Dhruvec/code_extractor'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <span className="section-tag">Selected Works</span>
        <h2 className="section-title">Projects that push <br />the boundaries.</h2>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="project-card"
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <p className="project-category">{project.category}</p>
                <h3 className="project-name">{project.title}</h3>
                <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                  <ExternalLink size={20} color="#fff" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── About ───
const About = () => {
  const skills = ['Python', 'LLMs', 'RAG', 'LangChain', 'PyTorch', 'FAISS', 'HuggingFace', 'Vite', 'React']

  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="about-visual"
        >
          <motion.div 
            whileHover={{ y: -5, scale: 1.02 }}
            className="about-img-container"
          >
            <img src="/profile.jpg" alt="Dhruv" />
          </motion.div>
        </motion.div>

        <div className="about-text">
          <span className="section-tag">About Me</span>
          <h3>AI Engineer & CS Undergraduate.</h3>
          <p>
            I'm a B.Tech Computer Science student at GLA University (2022–2026), deeply passionate about Large Language Models and Generative AI. 
            My expertise lies in building production-grade RAG systems and evaluating model quality.
          </p>
          <div className="skills-tags">
            {skills.map(skill => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Experience ───
const EXPERIENCE = [
  {
    date: 'Dec 2025 – Feb 2026',
    role: 'LLM Post-Training Intern',
    company: 'Ethara AI',
    desc: 'Evaluated model outputs for reasoning accuracy and instruction following.'
  },
  {
    date: '2024',
    role: 'Event Coordinator',
    company: 'Spandan Fest',
    desc: 'Managed teams and logistics for university cultural events.'
  }
]

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <span className="section-tag">Journey</span>
        <h2 className="section-title">Career Milestones</h2>
        
        <div className="exp-list">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="exp-item"
            >
              <div className="exp-date">{exp.date}</div>
              <div>
                <div className="exp-role">{exp.role}</div>
                <div className="exp-company">{exp.company}</div>
              </div>
              <div className="exp-desc">{exp.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Contact ───
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container contact-hero">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="section-tag"
        >
          Let's Talk
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="contact-title"
        >
          Have a project <br />in mind?
        </motion.h2>
        <motion.a
          href="mailto:dhruvc17745@gmail.com"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="contact-email"
        >
          dhruvc17745@gmail.com
        </motion.a>
      </div>
    </section>
  )
}

// ─── Footer ───
const Footer = () => {
  return (
    <footer>
      <div className="container footer-content">
        <div className="logo">DHRUV.</div>
        <div className="social-links">
          <a href="https://github.com/Dhruvec" target="_blank" rel="noreferrer"><Globe size={20} /></a>
          <a href="https://linkedin.com/in/dhruv-929265392/" target="_blank" rel="noreferrer"><User size={20} /></a>
          <a href="mailto:dhruvc17745@gmail.com"><Mail size={20} /></a>
        </div>
        <div className="copyright">© 2026 Dhruv. All rights reserved.</div>
      </div>
    </footer>
  )
}

// ─── Main App ───
export default function App() {
  useLenis()
  
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="app-container">
      <div className="noise"></div>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
