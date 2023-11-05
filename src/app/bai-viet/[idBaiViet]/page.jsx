"use client"
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Banner from '@/components/banner/banner'
import Footer from '@/components/footer/Footer'
import { getNoiDungBaiViet } from '../../../services/api';


export default function ChiTietBaiViet({ params }) {

    const [content, setContent] = useState('')

    useEffect(() => {
        handleGetContent();
    }, [])

    const handleGetContent = async () => {
        let res = await getNoiDungBaiViet({
            id: params.idBaiViet
        })
        console.log(res);
        if (res?.errCode === 0) {
            setContent(res.data.contentHtml)
        }
    }


    return (
        <div className={styles.ChiTietBaiViet_container}>
            <Banner />

            <div className={styles.ChiTietBaiViet_content} dangerouslySetInnerHTML={{ __html: content }}>

            </div>
            <div style={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'center' }}>
                <div className="fb-comments"
                    data-href={`https://quanlykhachsan.vercel.app/bai-viet/${params.idBaiViet}`}
                    data-width="1000" data-numposts="5">
                </div>
            </div>
            <Footer />
        </div>
    )
}
