import React from 'react'
import styles from './Quotecard.module.css'

function Quotecard({text,author}) {
  return (
    <div className={styles.container}>
        <div className={styles.qcards}>
            <h2 className={styles.qText}>{text}</h2>
            <p className={styles.qAuthor}>{author}</p>
        </div>
    </div>
  )
}

export default Quotecard