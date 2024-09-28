import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo-geekfood.svg'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <div className={styles["nav-div"]}>
            <div className={styles.logo}>
                <img src={logo} alt="" />
                <h2>GeekFoods</h2>
            </div>
            <div className={styles.pages}>
                <ul>
                    <li>Home</li>
                    <li className={styles.active}>Quotes</li>
                    <li>Restaurants</li>
                    <li>Foods</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className={styles.getBtn}><button> Get Started </button></div>
            
        </div>
    </nav>
  )
}

export default Navbar