import Header from "../../components/Header"
import Skills from "../../components/Skills"
import styles from "./Home.module.scss"

const Home = () => {
  return (
    <section id="Home" className={styles.home__container}>
        <Header/>
        <Skills/>
    </section>
  )
}

export default Home