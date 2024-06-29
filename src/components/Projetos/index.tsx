import styles from './Projetos.module.scss'
import db from '../../../db.json'
import { useState } from 'react'
import { IProjeto } from '../../interface/IProjeto'
import CardPort from '../CardPort'

const Projetos = () => {
    const [projetos] = useState<IProjeto[]>(db.projetos)
    return (
        <section id='projetos' className={styles.container__project}>
            <div className={styles.projectTitle__container}>
                <h3>Meu Portfólio</h3>
                <h1>Projetos Recentes</h1>
            </div>
            <ul className={styles.container__port}>
            {
                projetos.map(projeto => 
                    <li key={projeto.id} className={styles.item__project}>
                        <CardPort projeto={projeto}/>
                    </li>
                )
            }
            </ul>
        </section>
    )
}

export default Projetos