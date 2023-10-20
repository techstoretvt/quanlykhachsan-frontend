import React from 'react'
import styles from './styles.module.scss'

export default function index() {
    return (
        <header className={styles.header_container}>
            <div className={styles.logo}></div>
            <div className={styles.list_item}>
                <div className={styles.item}>
                    <div className={styles.item_text}>Giới thiệu</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.item_text}>Khuyến mãi</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.item_text}>blog</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.item_text}>Liên hệ</div>
                </div>
            </div>
        </header>
    )
}
