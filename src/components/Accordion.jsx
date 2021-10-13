import React, { useState } from 'react'

import styles from './Accordion.module.css'

function Accordion({ title, children, isOpen=false }) {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  const toggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={ styles.accordion }>
      <button className={ `${ styles.accordion__title } ${isExpanded && styles["accordion__title--active"]}` } onClick={toggle}>{ title }</button>
      <div
        className={ `${styles.accordion__content} ${isExpanded && styles["accordion__content--active"]}` }
      >
        { children }
      </div>
    </div>
  )
}

export default Accordion
