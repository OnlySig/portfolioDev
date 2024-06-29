import About from "../../components/About"
import Header from "../../components/Header"
import Projetos from "../../components/Projetos"
import Skills from "../../components/Skills"
import styles from "./Home.module.scss"

const Home = () => {
  return (
    <section id="home" className={styles.home__container}>
        <Header/>
        <Skills/>
        <About/>
        <Projetos/>
    </section>
  )
}

export default Home