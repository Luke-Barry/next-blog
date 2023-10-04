import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'

export default function Navbar () {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image className={styles.logo} src="/facebook.png" alt="facebook" width={32} height={32}/>
                <Image className={styles.logo} src="/instagram.png" alt="instagram" width={32} height={32}/>
                <Image className={styles.logo} src="/tiktok.png" alt="tiktok" width={32} height={32}/>
                <Image className={styles.logo} src="/youtube.png" alt="youtube" width={32} height={32}/>
            </div>
            <div className={styles.links}>
                <ThemeToggle/>
                <Link className={styles.link} href="/">Homepage</Link>
                <Link className={styles.link} href="/">Contact</Link>
                <Link className={styles.link} href="/">About</Link>
                <AuthLinks/>
            </div>
        </div>
    )
}
