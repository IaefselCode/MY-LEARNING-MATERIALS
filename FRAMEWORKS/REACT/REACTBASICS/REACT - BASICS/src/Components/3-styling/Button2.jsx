import React from 'react'
import styles from './Button.module.css'
function Button2() {
  return (
    <div><button className={styles.button}>Click me 2</button></div>
  )
}

export default Button2
//using css modules
//It helps to avoid naming conflicts because a unique class is going to be ganarated for you via a hashing algolithm 
// 