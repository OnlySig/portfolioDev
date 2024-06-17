import { Link } from 'react-router-dom'
import styles from './NavBar.module.scss'
import { FaInstagram as LogoInsta } from "react-icons/fa";
import { IoLogoGithub as LogoGit } from "react-icons/io";

const NavBar = () => {
  return (
    <nav className={styles.navContainer}>
        <h1>Gabriel Pereira</h1>
        <ul className={styles.listAncor__container}>
            <Link to={'/'}>Home</Link>
            <Link to={'/skill'}>Skill's</Link>
            <Link to={'/sobre'}>Sobre</Link>
            <Link to={'/contato'}>Contato</Link>
            <div className={styles.linksMidias}>
                <Link to={'https://www.instagram.com/gacastropereira/'} target='_blank'><LogoInsta fontSize={24} /></Link>
                <Link to={'https://www.github.com/OnlySig'} target='_blank'><LogoGit fontSize={24}/></Link>
            </div>
        </ul>
    </nav>
  )
}

export default NavBar