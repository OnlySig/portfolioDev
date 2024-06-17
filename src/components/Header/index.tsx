import NavBar from '../NavBar'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <>
        <NavBar/>
        <header className={styles.headerContainer}>
            <div className={styles.headerItemDev}>
                <h3>Ola!, me chamo Gabriel.</h3>
                <h1>SOU UM WEB DEVELOPER</h1>
                <p>Se quiser ver meu currículo, apenas clique no botao.</p>
                <a href="/src/assets/cv.pdf" download>Baixe meu Currículo</a>
            </div>
            <div className={styles.headerItemImage}>
                <img src="/fotoGit.jpg" alt="foto de gabriel castro" />
            </div>
        </header>
    </>
  )
}

export default Header