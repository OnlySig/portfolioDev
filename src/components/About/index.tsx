import styles from "./About.module.scss"
import { MdAccountCircle } from "react-icons/md";
import { FaPhone, FaDiscord, FaPhp, FaVuejs  } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { SiDart, SiFlutter } from "react-icons/si";

const stylesIcon = {
  fontSize: '24',
  fill: '#FFF'
}

const About = () => {
  return (
    <section id="sobre" className={styles.aboutContainer}>
        <div className={styles.knowledgeContainer}>
          <img src="/images/businessman.svg" alt="icone de um homem de negócios"/>
          <div className={styles.aboutMe__container}>
            <h1>Sobre mim</h1>
            <span className={styles.text__aboutMe}>Sou um desenvolvedor apaixonado por criar interfaces de usuário atraentes e funcionais. Com experiência em HTML, CSS, JavaScript e bibliotecas modernas como React, busco constantemente melhorar minhas habilidades e aprender novas tecnologias para entregar produtos de alta qualidade.</span>
            <div className={styles.infoAccount__container}>
              <div className={styles.infoAccount}>
                <MdAccountCircle { ...stylesIcon }/>
                <h3>Name</h3>
              </div>
              <div className={styles.slash}>/</div>
              <span>Gabriel Castro Pereira</span>
            </div>
            <div className={styles.infoAccount__container}>
              <div className={styles.infoAccount}>
                <FaPhone { ...stylesIcon }/>
                <h3>Phone</h3>
              </div>
              <div className={styles.slash}>/</div>
              <span>(13)991518147</span>
            </div>
            <div className={styles.infoAccount__container}>
              <div className={styles.infoAccount}>
                <CiMail { ...stylesIcon }/>
                <h3>Email</h3>
              </div>
              <div className={styles.slash}>/</div>
              <span>gabriel.castro.pereira11@gmail.com</span>
            </div>
            <div className={styles.infoAccount__container}>
              <div className={styles.infoAccount}>
                <FaDiscord { ...stylesIcon }/>
                <h3>Discord</h3>
              </div>
              <div className={styles.slash}>/</div>
              <span>gabrielpereira01</span>
            </div>
            <div className={styles.comingSoon}>
              <h2>Estudando...</h2>
              <div className={styles.estudandoContainer}>
                <span className={styles.estudando}>{<SiDart { ...stylesIcon }/>}DART</span>
                <span className={styles.estudando}>{<SiFlutter { ...stylesIcon }/>}FLUTTER</span>
                <span className={styles.estudando}>{<FaPhp { ...stylesIcon }/>}PHP</span>
                <span className={styles.estudando}>{<FaVuejs { ...stylesIcon }/>} VUE</span>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About