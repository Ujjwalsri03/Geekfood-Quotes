import React from 'react'
import styles from './Footer.module.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBasketball } from "react-icons/fa6";


function Foooter() {
  return (
    <div className={styles.footer}>
        <div className={styles.footerContent}>
            <div className={styles.logoDiv}>
                <img src="" alt="" />
                <span>logoipsum</span>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Incidunt consequuntur amet culpa cum itaque neque.</p>
            <div className={styles.options}>
                <a href="">About</a>
                <a href="">Careers</a>
                <a href="">History</a>
                <a href="">Services</a>
                <a href="">Projects</a>
                <a href="">Blogs</a>
            </div>
            <div className={styles.socialIcon}>
                <FaFacebook />
                <FaTwitter />
                <FaInstagramSquare />
                <FaGithub />
                <FaBasketball />
            </div>
        </div>
    </div>
  )
}

export default Foooter