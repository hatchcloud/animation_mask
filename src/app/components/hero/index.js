'use client'
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '../../utils/useMousePosition';

export default function index() {
    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();
    const size = isHovered ? 400 : 40;

    return (
      <section className={`${styles.hero} center_layout sticky`}>
        <div className={`container`}>
         <motion.div 
         className={`${styles.mask} ${styles.text_mask}`}
         animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2 + 50)}px`,
          WebkitMaskSize: `${size}px`
         }}
         transition={{ type: "tween", ease: "backOut", duration:0.5}}
         >
         <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
         Designing SaaS Products that Users Love. I work with startups and brands to craft expressive and engaging solutions for their software needs.
         </p>
         </motion.div>
         <div className={`${styles.back} ${styles.text_mask}`}>
         <p>Designing SaaS Products that Users Love. I work with startups and brands to craft expressive and engaging solutions for their software needs.
         </p>
         </div>
        </div>
      </section>
    )
}
  