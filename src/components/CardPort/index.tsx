import styles from './CardPort.module.scss'
import { IProjeto } from '../../interface/IProjeto'

const CardPort = ({ projeto } : { projeto: IProjeto } ) => {
    console.log(projeto)
    return (
        <div className={styles.container__card}>
            <h1>{projeto.name}</h1>
            <ul className={styles.tag__container}>
                {projeto.tags.map(tag => 
                    <li className={styles.tag__item} key={tag}>{tag}</li>
                )}
            </ul>
            <img src={projeto.image} alt={projeto.name} />
        </div>
    )
}

export default CardPort