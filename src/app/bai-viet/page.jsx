"use client"
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Banner from '@/components/banner/banner'
import Footer from '@/components/footer/Footer'
import Image from 'next/image'
import { getDanhSachBaiViet } from '../../services/api';
import Link from 'next/link'


export default function Page() {

    const [listBaiViet, setListBaiViet] = useState([])

    useEffect(() => {
        FuncGetDanhSachBaiVet()
    }, [])


    const FuncGetDanhSachBaiVet = async () => {
        let res = await getDanhSachBaiViet()
        console.log(res);
        if (res?.errCode === 0) {
            setListBaiViet(res.data)
        }
    }

    return (
        <div className={styles.baiviet_container}>
            <Banner />

            <div className={styles.baiviet_content}>

                {
                    listBaiViet?.map((item, index) => {

                        return (
                            <div key={item.id} className={styles.wrap_baiviet}
                                style={{
                                    width: index === 0 ? "100%" : index > 0 && index < 3 ? "50%" : "33%"
                                }}
                            >
                                <a href={`bai-viet/${item.id}`}>
                                    <Image
                                        src={item.anhBia}
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                        className={styles.anhBaiViet}
                                    />
                                </a>

                                <a href={`bai-viet/${item.id}`} className={styles.tieuDe}>
                                    {item.tieuDe}
                                </a>

                                <div className={styles.thoiGian}>
                                    {item.timeText}
                                </div>

                                <div className={styles.moTa}>
                                    {item.description}
                                </div>

                            </div>
                        )

                    })
                }




            </div>

            <Footer />
        </div>
    )
}
