"use client"
import React, { useState } from 'react'
import styles from './styles.module.scss'
import Banner from '../../components/banner/banner'
import Footer from '@/components/footer/Footer'

import { Input } from 'antd';
import { guiEmailService } from '../../services/api';
import swal from 'sweetalert';
import dynamic from 'next/dynamic';


export default function LienHe() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [sdt, setSdt] = useState('')
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')

    const handleSendEmail = async () => {
        let res = await guiEmailService({
            name, email, sdt, content
        })
        if (res?.errCode === 0) {
            swal("Good job!", "Tin nhắn đã được gửi đi!", "success");
            setName("")
            setEmail("")
            setSdt("")
            setContent("")
            setTitle("")
        }
        else if (res?.errCode === 1) {
            swal("Oh no!", "Vui lòng điền đầy đủ thông tin!", "warning");
        }
        else {
            swal("Error!", res.errMessage, "error");
        }
    }


    return (
        <div className={styles.LienHe_container}>
            <Banner />
            <div className={styles.LienHe_contenr}>
                <div className={styles.title}>Liên hệ</div>

                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Tiêu đề"
                    style={{ marginTop: '20px', height: '50px' }}
                />
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Họ và tên"
                    style={{ marginTop: '20px', height: '50px' }}
                />
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    style={{ marginTop: '20px', height: '50px' }}
                />
                <Input
                    value={sdt}
                    onChange={(e) => setSdt(e.target.value)}
                    placeholder="Điện thoại"
                    style={{ marginTop: '20px', height: '50px' }}
                />
                <Input
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Lời nhắn"
                    style={{ marginTop: '20px', height: '100px' }}
                />

                <div className={styles.button}>
                    <button onClick={handleSendEmail}>
                        Gửi
                    </button>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.120033806843!2d105.7217157952975!3d10.006942758214603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a08903d92d1d0d%3A0x2c147a40ead97caa!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBOYW0gQ-G6p24gVGjGoQ!5e0!3m2!1svi!2s!4v1697953413784!5m2!1svi!2s" width="100%" height="450"
                    style={{ border: '0', marginTop: '50px' }}
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

                </iframe>
            </div>


            <div style={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'center' }}>
                <div id="fb-root"></div>
                <div className="fb-comments"
                    data-href="https://quanlykhachsan.vercel.app/lien-he"
                    data-width="1000" data-numposts="5">
                </div>
            </div>
            <Footer />
        </div>
    )
}
