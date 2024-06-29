import styles from './Projetos.module.scss'
import db from '../../../db.json'
import { useState } from 'react'

const Projetos = () => {
    const [projetos] = useState(db.projetos)
    return (
        <section id='projetos' className={styles.container__project}>
            <div className={styles.projectTitle__container}>
                <h3>Meu Portfólio</h3>
                <h1>Projetos Recentes</h1>
            </div>
            <ul>
            {
                projetos.map(projeto => 
                    <li key={projeto.id}>
                        <h1>{projeto.name}</h1>
                    </li>
                )
            }
            </ul>
        </section>
    )
}

export default Projetos