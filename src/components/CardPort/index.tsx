import styles from './CardPort.module.scss'
import { IProjeto } from '../../interface/IProjeto'
import { IoLogoGithub as LogoGit } from "react-icons/io";
import { Link } from 'react-router-dom';

const CardPort = ({ projeto, isModal = false} : { projeto: IProjeto, isModal?: boolean } ) => {
    return (
        <div className={isModal ? styles.container__cardModal : styles.container__card}>
            <div className={styles.onlyModalPort}>
                <div className={styles.titleModal}>
                    {isModal ? <><h1>Titulo:</h1>
                        <p>{projeto.name}</p></> : <h1>{projeto.name}</h1>}
                </div>
                <ul className={styles.tag__container}>
                    {isModal && <h1>Tags:</h1>}
                    {projeto.tags.map(tag => 
                        <li className={styles.tag__item} key={tag}>{tag}</li>
                    )}
                </ul>
                {isModal &&
                    <>
                        <div className={styles.description}>
                            <p>
                                {projeto.description}
                            </p>
                        </div>
                        <div className={styles.links__container}>
                            {<Link to={projeto.links[0]} target='_blank'><LogoGit/></Link>}
                            {projeto.links[1] && <Link className={styles.demo} to={projeto.links[1]} target='_blank'>Demo/&gt;</Link>}
                        </div>
                    </>
                }
            </div>
            <img src={projeto.image} alt={projeto.name} />
        </div>
    )
}

export default CardPort