import { useState, useEffect } from 'react'
import { FaGithub,FaLinkedin,FaEnvelope,FaPhone, FaInstagram } from 'react-icons/fa'
import {motion} from 'framer-motion'
import './App.css'

function App() {
  return(
    <div className="App">
      <Header/>
      <InfoBar/>
      <About/>
      <Projects/>
      <Skills/>
      <Achievements/>
      <Contact/>
      <Footer/>
    </div>
  )
}

function Header() {
  return(
    <header>
      <div className="photo-wrapper">
      <img src="public\images\Profile.jpeg" alt="Adarsh Satheesan" className="profile-photo" />
      </div>
      <h1>Adarsh Satheesan</h1>
      <p className="tagline">Full-Stack Developer & Android App Builder</p>
      <nav>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

function InfoBar() {
  const info = [
    { label: "Location", value: "Kerala, India" },
    { label: "Focus", value: "Full-Stack Web Development" },
    { label: "Experience", value: "Fresher / Recent Graduate" },
    { label: "Availability", value: "Open to Internships & Full-time" }
  ]

  return (
    <div className="info-bar">
      <div className="info-items">
        {info.map((item, i) => (
          <div className="info-item" key={i}>
            <span className="info-label">{item.label}</span>
            <span className="info-value">{item.value}</span>
          </div>
        ))}
      </div>
      <a href="C:\Users\User\codebase\portfolio\public\Items\Adarsh Resume .pdf" download className="cv-button">Download CV ↓</a>
    </div>
  )
}

function About() {
  const lines = [
    "Hi, I'm Adarsh Satheesan.",
    "I'm a Computer Science Engineering graduate.",
    "I build full-stack web apps and Android apps.",
    "I love solving real-world problems with code.",
    "Currently exploring opportunities in web development.",
    "Aiming for a Master's degree in Germany."
  ]

  const [lineIndex, setLineIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (charIndex < lines[lineIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + lines[lineIndex][charIndex])
        setCharIndex((prev) => prev + 1)
      }, 40)
      return () => clearTimeout(timeout)
    } else {
      const pause = setTimeout(() => {
        setDisplayText("")
        setCharIndex(0)
        setLineIndex((prev) => (prev + 1) % lines.length)
      }, 1800)
      return () => clearTimeout(pause)
    }
  }, [charIndex, lineIndex])

  const aboutData = [
    { key: "FieldOfInterest", value: "Full-stack web development, Backend Creation, Android Apps, research, data analysis and Networking" },
    { key: "Hobbies", value: "Coding, Sports, gym & fitness, reading books" },
    { key: "Ambition", value: "Grow as full-stack engineer; pursue Master's abroad in Germany" },
    { key: "Education", value: "B.Tech CSE, MES College of Engineering, Kuttippuram - CGPA 8.02 (2026)" },
    { key: "Languages", value: "English, Malayalam, Hindi" },
    { key: "CountriesVisited", value: "India, Bahrain, UAE" },
  ]

  return (
    <motion.section id="about"
     initial={{opacity:0,y:30}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    transition={{duration:0.6}}>
      <h2>About Me</h2>

      <div className="typing-box">
        <span className="typing-text">{displayText}</span>
        <span className="cursor">|</span>
      </div>

      <div className="terminal">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="terminal-title">about-me.json</span>
        </div>
        <div className="terminal-body">
          <span className="code-line">{"{"}</span>
          {aboutData.map((item, i) => (
            <div className="code-line" key={i}>
              <span className="code-key">"{item.key}"</span>
              <span className="code-punct">: </span>
              <span className="code-value">"{item.value}"</span>
              {i < aboutData.length - 1 && <span className="code-punct">,</span>}
            </div>
          ))}
          <span className="code-line">{"}"}</span>
        </div>
      </div>

      <div className="links">
        <a href="https://github.com/0D0RSH" target='_blank' rel="noopener noreferrer"><FaGithub/>Github</a>
      </div>
    </motion.section>
  )
}

function Projects() {
  const projects = [
    {
      title: "CareSyn – Smart HealthCare Management System",
      image: "/images/caresync.png",
      stack: "Kotlin, Firebase, Python, MVVM",
      points: [
        "Built an offline-first Android healthcare app using MVVM architecture",
        "Added QR-based appointment booking, queue management, and digital prescriptions",
        "Used Firebase Auth, Firestore, and Room DB for secure offline data handling"
      ],
      github: "https://github.com/0D0RSH/Smart-HealthCare-Android-App"
    },
    {
      title: "GridCode Navigator – GPS-Free Indoor Navigation",
      image: "/images/gridcode.png",
      stack: "Python, Firebase, Vite, TypeScript",
      points: [
        "Designed a grid-based indoor navigation system with no GPS dependency",
        "Implemented pathfinding algorithms for accurate indoor routing",
        "Global Nominee & People's Choice Award — NASA Space Apps Challenge 2024"
      ],
      github: "https://github.com/0D0RSH/GridCodeNavigator.git"
    }
  ]

  return(
    <motion.section id="projects"
    initial={{opacity:0,y:30}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    transition={{duration:0.6}}>
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={`${project.title} screenshot`} className="project-image" />
            <h3>{project.title}</h3>
            <p className="stack">{project.stack}</p>
            <ul>
              {project.points.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
            <a href={project.github} target="_blank" rel="noopener noreferrer">View on Github →</a>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

function Skills() {
  const skillGroups = [
    { category: "Frontend", items: ["React", "JavaScript", "HTML", "CSS", "Vite"] },
    { category: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
    { category: "Mobile", items: ["Kotlin", "Android SDK", "MVVM Architecture"] },
    { category: "Databases", items: ["MongoDB", "Firebase Firestore", "Room Database", "SQL"] },
    { category: "Languages", items: ["Python", "Java", "Kotlin", "JavaScript"] },
    { category: "Tools", items: ["Git", "GitHub", "Android Studio", "VS Code", "Postman"] }
  ]

  return (
    <motion.section id="skills"
     initial={{opacity:0,y:30}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    transition={{duration:0.6}}>
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <div key={i} className="skill-group">
            <h4>{group.category}</h4>
            <div className="skill-tags">
              {group.items.map((item, j) => (
                <span key={j} className="skill-tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

function Achievements() {
  const achievements = [
    "Global Nominee & People's Choice Award – NASA Space Apps Challenge 2024",
    "3rd Prize – NASA Space Apps Challenge 2024, Jyothi Engineering College",
    "Participated in IEEE FrizBee '23, Informatyka '23 and Xtrinia VI '25"
  ]
  return (
    <motion.section id="achievements"
     initial={{opacity:0,y:30}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    transition={{duration:0.6}}>
      <h2>Achievements</h2>
      <ul>
        {achievements.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </motion.section>
  )
}

function Contact() {
  return(
    <motion.section id="contact"
     initial={{opacity:0,y:30}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    transition={{duration:0.6}}>
      <h2>Contact</h2>
      <div className="links">
        <a href="mailto:adarshsatheesan04@gmail.com"><FaEnvelope/>Email Me</a>
        <a href="tel:+918590674757"><FaPhone/>+91 8590674757</a>
        <a href="https://www.instagram.com/adarshsatheesan04" target="_blank" rel="noopener noreferrer"><FaInstagram/>Instagram</a>
      </div>
    </motion.section>
  )
}

function Footer() {
  return (
    <footer>
      <p className="footer-meta">© 2026 Adarsh Satheesan</p>
      <p className='footer-credit'>adarshsatheesan04@gmail.com
        Built with React & Vite in Kerala , India.
      </p>
      
    </footer>
  )
}

export default App