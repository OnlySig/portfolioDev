import Tags from '../Tags'
import styles from './Skills.module.scss'
import db from '../../../db.json'
import { useState } from 'react'
import { ITags } from '../../interface/ITags'

const Skills = () => {
    const [tags] = useState<ITags[]>(db.tags)
    return (
        <section id='skill' className={styles.container__skillContent}>
            <h1>SKILL'S</h1>
            <ul className={styles.listContainer}>
                {tags.map(tag=>
                    <Tags key={tag.tagName} tagName={tag.tagName} tagSrc={tag.tagSrc}/>
                )}
            </ul>
        </section>
    )
}

export default Skills