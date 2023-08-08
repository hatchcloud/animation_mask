'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './style.module.scss';
import gsap from 'gsap'

const scaleAnimation = {
  initial: {scale: 0, x:"-50%", y:"-50%"},
  enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
  closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function index({modal, projects}) {
  const { active, index } = modal;
  const container = useRef(null);

  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {duration: 0.8, ease: "power3"});
    const moveContainerY = gsap.quickTo(container.current, "top", {duration: 0.8, ease: "power3"});
    window.addEventListener("mousemove", (e) =>{
      let {clientX, clientY } = e;
      clientY = clientY - 200;
      moveContainerX(clientX);
      moveContainerY(clientY);
    })

  }, []);



  return (
    <motion.div ref={container} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={ styles.modalContainer}>
        <div style={{top: index * -100  + "%"}} className={styles.modalSlider}>
            {   projects.map( (project, index) => {
                    const {src, color} = project;
                    return <div className={styles.modal} style={{backgroundColor: color}} key={`modal_${index}`}>
                        <Image 
                        src={`/images/${src}`}
                        width={300}
                        height={0}
                        alt="image"
                        />
                    </div>
                })
            }
        </div>
    </motion.div>
  )
}
