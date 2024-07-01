import { useContext } from "react"
import About from "../../components/About"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Projetos from "../../components/Projetos"
import Skills from "../../components/Skills"
import styles from './Home.module.scss' 
import { ToogleBtnContext } from "../../context/toogleBtn"
import { RxHamburgerMenu } from "react-icons/rx";
import NavBar from "../../components/NavBar"

const Home = () => {
  const { state, setState } = useContext(ToogleBtnContext)
  return (
    <>
      <main className={styles.content}>
        <button onClick={()=>setState(!state)} className={`${styles.toggleBtn} ${styles.off}`}>{state ? 'X' : <RxHamburgerMenu/>}</button>
        <NavBar/>
        <Header/>
        <Skills/>
        <About/>
        <Projetos/>
      </main>
      <Footer/>
    </>
  )
}

export default Home