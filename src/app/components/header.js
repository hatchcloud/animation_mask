'use client'

import Image from "next/image"
import Link from "next/link"
import styles from '../style/components/header.module.scss'
import { usePathname } from 'next/navigation'
import { motion, useScroll } from "framer-motion";


export default function Header() {
  const { scrollYProgress } = useScroll();

  const pathname = usePathname();
  return (
    <header className={`${styles.header} center_layout`}>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <div className={`${styles.content} container container_padding`}>
            <Link href={"/"}>
            <Image
            src={"/images/logo_portafolio.svg"}
            width={110}
            height={20}
            alt="Logo Afinia"
            priority
            /></Link>
            <div className={`${styles.center} ${styles.tabs}`}>
              <Link href={"/about"} className={pathname === '/about' ? styles.active : ''}> 
                About
              </Link>
              <Link href={"/work"} className={pathname === '/work' ? styles.active : ''}>
                Work  
              </Link>
            </div>
        </div>
    </header>
  )
}
