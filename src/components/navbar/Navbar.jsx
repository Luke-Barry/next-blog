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
                <Link href="https://www.facebook.com/" target="_blank">
                    <Image className={styles.logo} src="/facebook.png" alt="facebook" width={32} height={32}/>
                </Link>
                <Link href="https://www.instagram.com/lukejbarry/" target="_blank">
                    <Image className={styles.logo} src="/instagram.png" alt="instagram" width={32} height={32}/>
                </Link>
                <Link href="https://www.youtube.com/channel/UCJOQPC1_V3gsP85RszbLcrg" target="_blank">
                    <Image className={styles.logo} src="/youtube.png" alt="youtube" width={32} height={32}/>
                </Link>
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
