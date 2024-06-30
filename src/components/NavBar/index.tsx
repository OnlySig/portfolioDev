import { Link } from 'react-router-dom'
import styles from './NavBar.module.scss'
import { FaInstagram as LogoInsta } from "react-icons/fa";
import { IoLogoGithub as LogoGit } from "react-icons/io";
import { useContext, useEffect, useState } from 'react';
import { ToogleBtnContext } from '../../context/toogleBtn';
import classNames from 'classnames';

const NavBar = () => {
  const {state} = useContext(ToogleBtnContext)
  const [scroll, setScroll] = useState(0)

  useEffect(()=> {
    window.addEventListener('scroll', ()=> {
      setScroll(window.scrollY)
    })
  }, [setScroll])

  return (
    <nav className={classNames(styles.navContainer, {[styles.navDown]: scroll>0, [styles.off]: state})}>
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