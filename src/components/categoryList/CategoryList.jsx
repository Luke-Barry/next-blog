import React from 'react'
import styles from "./categoryList.module.css"
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About Me</h1>
            <div className={styles.categories}>
                <Link href="/blog?cat=style" className={`${styles.category} ${styles.education}`}>
                    <Image 
                        src="/style.png"
                        alt=""
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    Education
                </Link>
                <Link href="/blog?cat=style" className={`${styles.category} ${styles.skills}`}>
                    <Image 
                        src="/style.png"
                        alt=""
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    Skills
                </Link>
                <Link href="/blog?cat=style" className={`${styles.category} ${styles.hobbies}`}>
                    <Image 
                        src="/style.png"
                        alt=""
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    Hobbies
                </Link>
            </div>
        </div>
    )
}

export default CategoryList