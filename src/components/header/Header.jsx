'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'
import { getUserLogin, getUserLoginRefesh } from '../../services/api';

export default function Header(props) {
    const [userInfo, setUserInfo] = useState(null)

    useEffect(() => {
        // console.log('props: ', props);
        getUser()
    }, [])


    const getUser = async () => {
        let accessToken = localStorage.getItem('accessToken') ?? ''
        let refreshToken = localStorage.getItem('refreshToken') ?? ''

        if (!accessToken || !refreshToken) return

        let res = await getUserLogin(accessToken)
        // console.log(res);
        if (res?.errCode !== 0) {
            let res2 = await getUserLoginRefesh(refreshToken)
            if (res2?.errCode === 0) {
                setUserInfo(res2?.data)
                localStorage.setItem("accessToken", res2?.tokens.accessToken)
                localStorage.setItem("refreshToken", res2?.tokens.refreshToken)
                localStorage.setItem("idUser", res2?.data?.id)
            }
            else {
                localStorage.removeItem("accessToken")
                localStorage.removeItem("refreshToken")
            }
        }
        else {
            setUserInfo(res?.data)
            localStorage.setItem("idUser", res?.data?.id)
        }
    }

    const handleDangXuat = () => {
        setUserInfo(null)
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <header className={styles.header_container}>
                <Link href={'/'} className={styles.logo}></Link>
                <div className={styles.list_item}>
                    <Link href={'/gioi-thieu'} className={props?.active === 'gioiThieu' ? styles.item + " " + styles.active : styles.item}>
                        <div className={styles.item_text}>Giới thiệu</div>
                    </Link>
                    <Link href={"/khuyen-mai"} className={props?.active === 'khuyenMai' ? styles.item + " " + styles.active : styles.item}>
                        <div className={styles.item_text}>Khuyến mãi</div>
                    </Link>
                    <Link href={'/bai-viet'} className={props?.active === 'baiViet' ? styles.item + " " + styles.active : styles.item}>
                        <div className={styles.item_text}>blog</div>
                    </Link>
                    <a href={'/lien-he'} className={props?.active === 'lienHe' ? styles.item + " " + styles.active : styles.item}>
                        <div className={styles.item_text}>Liên hệ</div>
                    </a>
                </div>
            </header>
            <div className={styles.wrap_login}>
                {
                    !userInfo &&
                    <Link href={process.env.REACT_APP_LOGIN_URL + '/account/login'} className={styles.btnLogin} >
                        Đăng nhập
                    </Link>
                }
                {
                    userInfo &&
                    <div className={styles.wrap_info}>
                        <Link href={'/lich-dat-phong'} className={styles.nameUser}>{userInfo?.firstName + " " + userInfo?.lastName}</Link>
                        <div className={styles.btnDangXuat} onClick={handleDangXuat}>Đăng xuất</div>
                    </div>

                }
            </div>
        </div>
    )
}
