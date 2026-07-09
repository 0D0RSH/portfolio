import { useState } from 'react'
import './App.css'

function App() {
  return(
    <div className="App">
      <Header/>
      <About/>
      <Projects/>
      <Achievements/>
      <Skills/>
      <Contact/>
      <Footer/>     
    </div>
  )
}

function Header()
{
  return(
    <header>
      <h1>Adarsh Satheesan</h1>
      <nav>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

function About()
{
  const aboutData=[
    {key:"Introduction",value:"CS Engineering graduate building real-world software-from offline-first Android apps to full-stack platforms."},
    {key:"FieldOfInterest", value:"Full-stack web development, Backend Creation, Android Apps, research,data analysis and Networking"},
    {key:"Hobbies",value:"Coding,Sports,gym & fitness,reading books"},
    {key:"Ambition",value:"Grow as full-stack engineer:pursue Master's abroad in Germany"},
    {key:"Education",value:"B.Tech CSE,MES College of Engineering,Kuttippuram-CGPA 8.02 (2026)"},
    {key:"Languages",value:"English,Malayalam,Hindi"},
    {key:"CountriesVisited",value:"India,Bahrain,UAE"},
  ]
return(
  <section id="about">
   <h2>About Me</h2>
   <div className="terminal">
    <div className="terminal-header">
      <span className="dot red"></span>
      <span className="dot yellow"></span>
      <span className="dot green"></span>
    </div>
    <div className="terminal-body">
      {aboutData.map((item,i)=>(
        <div className="code-line" key={i}>
          <span className="code-key">"{item.key}"</span>
          <span className="code-punct">:</span>
          <span className="code-value">"{item.value}"</span>
          {i<aboutData.length-1 && <span className="code-punct">,</span>}
    </div>
      ))}
   </div>
   </div>
  <div className="links">
    <a href="https://github.com/0D0RSH" target='_blank'>Github</a>
    <a href="https://www.linkedin.com/in/adarsh-satheesan-8a160b2a1" target="_blank">LinkedIn</a>
</div>
  </section>
)
}

function Contact()
{
  return(
    <section id="contact">
      <h2>Contact</h2>
      <p>
        Open to Internships and full-time roles in web development and UI/UX Design.
        Feel free to reach out -happy to talk!
      </p>
      <div className="links">
        <a href="mailto:adarshsatheesan04@gmail.com">Email Me</a>
        <a href="tel:+918590674757">+91 8590674757</a>
        <a href="https://www.instagram.com/adarshsatheesan04" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </section>
  )
}
function Skills()
{
  const skillGroups=[
    
      {category:"Languages",items:["Python","Java","Kotlin","HTML","CSS","Javascript","React",]},
      {category:"Frameworks & Libraries",items:["Android SDK","MVVM","Firebase","Room DB","Express.js","Node.js"]},
      {category:"Databases",items:["MongoDB","Firebase Firestore","Realtime Database","SQL"]},
      {category:"Tools",items:["Git","GitHub","Android Studio","VS Code","Postman"]}
  ]                                                                   
  return (<section id="skills"><h2>Skills</h2>
  {skillGroups.map((group,i)=>(
    <div key={i} className="skill-group">
      <h4>{group.category}</h4>
      <p>{group.items.join(",")}</p>
    </div>
  ))}
  </section>
  )
}


function Achievements(){
  const achievements=[
    "Global Nominee & People's Choice Award-NASA Space Apps Challenge 2024",
    "3rd Prize -NASA Space Apps Challenge 2024,Jyothi Engineering College",
    "Participated in IEEE FrizBee '23,Informatyka '23 and Xtrinia VI '25"
  ]
  return (<section id="achievements">

    <h2>Achievements</h2>
    <ul>
      {achievements.map((item,i)=><li key={i}>{item}</li>)}
    </ul>
    </section>
    )
}

function Footer()
{
  return <footer><p>adarshsatheesan04@gmail.com</p></footer>
}

function Projects(){
  const projects=[
    {
      title:"CareSync- Smart HealthCare Management System",
       image:"/images/caresync.png",
      stack:"Kotlin, Firebase, Python, MVVM",
      points:[
        "Built an offline-first Android healthcare app using MVVM architecture",
        "Added QR-based appointment booking, queue management, and digital prescriptions",
        "Used Firebase Auth,FireStore, and Room DB for secure offline data handling"
      ],
      github:"https://github.com/0D0RSH/Smart-HealthCare-Android-App"
    },
     {
      title:"GridCode Navigator -GPS-Free Indoor Navigation",
      image:"/images/gridcode.png",
      stack:"Python, Firebase, Vite, TypeScript",
      points:[
        "Designed a grid-based indoor navigation system with no GPS dependency",
        "Implemented pathfinding alogrithms for accurate indoor routing",
      ],
      github:"https://github.com/0D0RSH/GridCodeNavigator.git"
      
    }
  ]

  return(
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project,index)=>(
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <img src={project.image} alt={`${project.title} screenschoot`} className="project-image"></img>
            <p className="stack">{project.stack}</p>
            <ul>
              {project.points.map((point,i)=><li key={i}>{point}</li>)}
            </ul>
            <a href={project.github} target="_blank">View on Github</a>
      </div>
        ))}
        </div>
    </section>
  )
}
export default App
