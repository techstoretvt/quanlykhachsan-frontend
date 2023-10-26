'use client'

import React, { useEffect, useState } from 'react'
import Banner from '@/components/banner/banner'
import Footer from '@/components/footer/Footer'
import styles from './styles.module.scss'
import { getListDatPhong } from '../../../services/api';
import { Table } from 'antd'


const columns = [
    {
        title: 'Tên phòng',
        key: 'nameTable',
    },
    {
        title: 'Ngày',
        key: 'time',
        render: (_, { time }) => (
            <>
                <div>{time.timeStart}</div>
                <div>{time.timeEnd}</div>
            </>
        )
    },
    {
        title: 'sdfsdf',
        key: 'sdfsdfsd',
    },
    {
        title: 'sfsdfds',
        key: 'sdf',
    },
]

const data = [
    {
        key: '1',
        nameTable: 'John Brown',
        time: { timeStart: 'timestart', timeEnd: 'timeend' },
        sdfsdfsd: 'New York No. 1 Lake Park',
        sdf: ['nice', 'developer'],
    },
    {
        key: '2',
        nameTable: 'John Brown',
        time: { timeStart: 'timestart', timeEnd: 'timeend' },
        sdfsdfsd: 'New York No. 1 Lake Park',
        sdf: ['nice', 'developer'],
    }
]

export default function ThongTinDatPhong({ params }) {

    const [listDatPhong, setListDatPhong] = useState([])

    useEffect(() => {
        handleGetListDatPhongKs()
    }, [params])


    const handleGetListDatPhongKs = async () => {
        let res = await getListDatPhong({
            idKhach: params.idKhach
        })

        console.log(res);
        if (res?.errCode === 0) {
            setListDatPhong(res.data)
        }
    }

    return (
        <div className={styles.ThongTinDatPhong_container}>
            <Banner />

            <div className={styles.ThongTinDatPhong_content}>
                <Table columns={columns} dataSource={data} />

            </div>

            <Footer />
        </div>
    )
}
