'use client'
import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Input, Button } from "antd";
const { TextArea } = Input;

function ThemPhong() {

    const [tenPhong, setTenPhong] = useState('')
    const [donGia, setDonGia] = useState("")
    const [khuyenMai, setKhuyenMai] = useState("")
    const [tienIch, setTienIch] = useState('')
    const [anhPhong1, setAnhPhong1] = useState('https://res.cloudinary.com/dultkpqjp/image/upload/v1702107825/quanlykhachsan/aptladyynhe7d77ovgbj.jpg')
    const [anhPhong2, setAnhPhong2] = useState('https://res.cloudinary.com/dultkpqjp/image/upload/v1702107825/quanlykhachsan/kvvyjr5rbv9e7sj5xphn.jpg')


    const handleThemPhong = async () => {
        let data = {
            tenPhong, donGia, khuyenMai, tienIch, anhPhong1, anhPhong2
        }
        console.table(data);


        let rs = await fetch(`http://localhost:3002/add-hotel?tenPhong=${tenPhong}&donGia=${donGia}&khuyenMai=${khuyenMai}&tienIch=${tienIch}&anhPhong1=${anhPhong1}&anhPhong2=${anhPhong2}`)

        rs = await rs.json()
        console.log(rs);
        if (rs.errCode === 0) {
            alert("Them thanh cong")
            setTenPhong('')
            setDonGia("")
            setKhuyenMai("")
            setTienIch('')
            // setAnhPhong1('')
            // setAnhPhong2('')
        }
        else {
            alert("Them that bai")
        }
    }

    return (
        <div className={styles.themPhong}>
            <h2>Thêm phòng</h2>
            <div className={styles.from_input}>
                <div className={styles.group2}>
                    <Input placeholder="Tên phòng" value={tenPhong} onChange={(e) => setTenPhong(e.target.value)} />
                </div>
                <div className={styles.group4}>
                    <Input placeholder="Đơn giá" value={donGia} onChange={(e) => setDonGia(e.target.value)} />
                </div>
                <div className={styles.group4}>
                    <Input placeholder="Khuyến mãi" value={khuyenMai} onChange={(e) => setKhuyenMai(e.target.value)} />
                </div>
                <div className={styles.group1}>
                    <TextArea rows={4} placeholder="Tiện ích phòng" value={tienIch} onChange={(e) => setTienIch(e.target.value)} />
                </div>
                <div className={styles.group1}>
                    <Input placeholder="Ảnh phòng" value={anhPhong1} onChange={(e) => setAnhPhong1(e.target.value)} />
                </div>
                <div className={styles.group1}>
                    <Input placeholder="Ảnh phòng" value={anhPhong2} onChange={(e) => setAnhPhong2(e.target.value)} />
                </div>
                <div className={styles.group1}>
                    <Button type="primary" onClick={handleThemPhong}>Thêm</Button>
                </div>
            </div>
        </div>
    )
}

export default ThemPhong