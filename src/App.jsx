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
return(
  <section id="about">
    <p>
      Computer Science Engineering graduate passionate about web development and 
      application design.Building real-world projects in healthcare tech 
      and navigation systems.
       </p>
  <div className="links">
    <a href="https://github.com/0D0RSH" target='_blank'>Github</a>
    <a href="https://www.linkedin.com/in/adarsh-satheesan-8a160b2a1" target="_blank">LinkedIn</a>

  </div>
  </section>
)
}
function Skills()
{
  const skillGroups=[
    
      {category:"Languages",items:["Python","Java","Kotlin","HTML","CSS"]},
      {category:"Frameworks & Libraries",items:["Android SDK","MVVM","Firebase","Room DB","Express.js"]},
      {category:"Databases",items:["MongoDB","Firebase Firestore","Realtime Database"]},
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
