import styles from './Tags.module.scss'

const Tags = ({ tagSrc, tagName } : { tagSrc: string, tagName: string }) => {
  return (
    <img src={tagSrc} alt={tagName} className={styles.TagImage}/>
  )
}

export default Tags