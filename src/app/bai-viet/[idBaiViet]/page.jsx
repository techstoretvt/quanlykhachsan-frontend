"use client"
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Banner from '@/components/banner/banner'
import Footer from '@/components/footer/Footer'
import { getNoiDungBaiViet } from '../../../services/api';
import dynamic from 'next/dynamic'
import CommentFB from '@/components/commentFB/CommentFB'



export default function ChiTietBaiViet({ params }) {

    const [content, setContent] = useState('')

    useEffect(() => {
        handleGetContent();
    }, [])

    //lay noi dung
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

            <CommentFB id={params.idBaiViet} />
            <Footer />
        </div>
    )
}
