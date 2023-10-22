import React from 'react'
import styles from './styles.module.scss'

export default function Footer() {
    return (
        <div className={styles.footer_container}>
            <div className={styles.group}>
                <div className={styles.list}>
                    <div className={styles.title}>TBT hotel</div>
                    <div className={styles.wrap}>
                        <i className="fa-solid fa-location-dot" style={{ color: '#FAA61A' }}></i>
                        <div className={styles.text}>
                            253 Hoàng Văn Thụ, Phường 2, Quận Tân Bình, TP.HCM
                        </div>
                    </div>
                    <div className={styles.wrap}>
                        <i className="fa-solid fa-phone" style={{ color: '#FAA61A' }}></i>
                        <div className={styles.text}>
                            1900 123 456
                        </div>
                    </div>
                    <div className={styles.wrap}>
                        <i className="fa-solid fa-envelope" style={{ color: '#FAA61A' }}></i>
                        <div className={styles.text}>
                            tbthotel@gmal.com
                        </div>
                    </div>
                </div>
                <div className={styles.list}>
                    <div className={styles.title}>VỀ CHÚNG TÔI</div>
                    <div className={styles.wrap}>
                        <div className={styles.text}>
                            Tin tức & sự kiện
                        </div>
                    </div>
                    <div className={styles.wrap}>
                        <div className={styles.text}>
                            Điều kiện & điều khoản
                        </div>
                    </div>
                    <div className={styles.wrap}>
                        <div className={styles.text}>
                            Chính sách bảo mật
                        </div>
                    </div>
                    <div className={styles.wrap}>
                        <div className={styles.text}>
                            Chính sách thanh toán
                        </div>
                    </div>
                </div>
                <div className={styles.list}>
                    <div className={styles.title}>NEWSLETTER</div>
                    <div className={styles.wrap}>
                        <div className={styles.text}>
                            Đăng ký để nhận Tin tức & Ưu đãi của chúng tôi.
                        </div>
                    </div>
                    <div className={styles.wrap}>
                        <div className={styles.wrap_input}>
                            <input placeholder='Enter your email' />
                            <i className="fa-regular fa-paper-plane"></i>
                        </div>
                    </div>
                    <div className={styles.wrap}>
                        <div className={styles.text}>
                            Chính sách bảo mật
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                ©2023 TBT Hospitality. All rights reserved
            </div>
        </div>
    )
}
