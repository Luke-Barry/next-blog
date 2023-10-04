import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b className={styles}>Hello, it's Luke Barry!</b> Discover my projects and ideas.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.png" alt="" className={styles.image} fill/>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}> Next.JS Blog app </h1>
                    <p className={styles.postDesc}>
                        This website is an exercise in JavaScript, CSS, React, Next.js & MongoDB. Throughout creating this
                        project, I've learnt so much about Web Development and have been able to meddle with the website. I
                        feel that this method of learning, breaking and changing things to get a better understand of the
                        underlying principles!
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/star.png" alt="" className={styles.image} fill/>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}> Python Subscriber/Publisher network protocol </h1>
                    <p className={styles.postDesc}>
                        I developed this project as part of my Computer Networks class. I was previously
                        unfamiliar with Python and networking at all so this project has been an invaluable
                        learning experience! Deployed virtually through Docker, the system models the behaviour
                        of a Star topology.
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured