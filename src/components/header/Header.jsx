import React from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

export default function Header() {
    return (
        <header className={styles.header_container}>
            <Link href={'/'} className={styles.logo}></Link>
            <div className={styles.list_item}>
                <Link href={'/gioi-thieu'} className={styles.item}>
                    <div className={styles.item_text}>Giới thiệu</div>
                </Link>
                <Link href={"/khuyen-mai"} className={styles.item}>
                    <div className={styles.item_text}>Khuyến mãi</div>
                </Link>
                <Link href={'/bai-viet'} className={styles.item}>
                    <div className={styles.item_text}>blog</div>
                </Link>
                <a href={'/lien-he'} className={styles.item}>
                    <div className={styles.item_text}>Liên hệ</div>
                </a>
            </div>
        </header>
    )
}
