import { Link } from 'react-router-dom'
import styles from './NavBar.module.scss'
import { FaInstagram as LogoInsta } from "react-icons/fa";
import { IoLogoGithub as LogoGit } from "react-icons/io";
import { useEffect, useState } from 'react';

const NavBar = () => {
  const [scroll, setScroll] = useState(0)
  useEffect(()=> {
    window.addEventListener('scroll', ()=> {
      setScroll(window.scrollY)
    })
  }, [setScroll])
  return (
    <nav className={scroll === 0 ? styles.navContainer : `${styles.navContainer} ${styles.navDown}`}>
        <h1>Gabriel Pereira</h1>
        <ul className={styles.listAncor__container}>
            <a href={'#home'}>Home</a>
            <a href={'#skill'}>Skill's</a>
            <a href={'#sobre'}>Sobre</a>
            <a href={'#projetos'}>Projetos</a>
            <div className={styles.linksMidias}>
                <Link to={'https://www.instagram.com/gacastropereira/'} target='_blank'><LogoInsta fontSize={24} /></Link>
                <Link to={'https://www.github.com/OnlySig'} target='_blank'><LogoGit fontSize={24}/></Link>
            </div>
        </ul>
    </nav>
  )
}

export default NavBar