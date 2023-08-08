'use client'
import styles from './page.module.css'
import Hero from "./components/hero";
import Work from './components/work';
import { useState } from 'react';
import Project from './components/project';
import Modal from './components/modal';


export default  function Home() {
  const projects = [
    {
      title: "Logistics App",
      src: "projects01.png",
      color: "#403d39"
    },
    {
      title: "Job Search App",
      src: "projects02.png",
      color: "#cfdbd5"
    },
    {
      title: "Education Platform",
      src: "projects03.png",
      color: "#495867"
    },
    {
      title: "Payment gateway",
      src: "projects04.png",
      color: "#333533"
    }
  ]

  const [modal, setModal] = useState({ active: false, index:0})
  return (
    <main className={styles.main}>
      <Hero />
      <section className='center_layout'>
        <div className={`container`}>
          {
            projects.map((project, index) => {
              return <Project key={index} index={index} title={project.title} setModal={setModal}/>
            })
          }
        </div>
        <Modal modal={modal} projects={projects}/>
      </section>
    </main>
  )
}

