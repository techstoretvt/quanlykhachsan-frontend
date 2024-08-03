'use client'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Head from 'next/head'

function LichSu() {

    const [listLichSu, setListLichSu] = useState([])


    useEffect(() => {

        getListlichSu()


    }, [])

    const getListlichSu = async () => {
        let res = await fetch(`http://localhost:3002/get-all-lich-su`)
        res = await res.json()
        console.log(res);

        if (res.errCode === 0) {
            // sap xep giam dan theo thoi gian
            let arr = res.data
            arr.sort((a, b) => b.time - a.time)

            setListLichSu(arr)

        }

    }

    function convertTimestampToDateTimeString(timestamp) {
        const date = new Date(timestamp);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() trả về giá trị từ 0-11
        const year = date.getFullYear();

        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${day}/${month}/${year} ${hours}:${minutes}`;
    }


    function formatNumber(value, decimalPlaces) {
        return value.toFixed(decimalPlaces);
    }

    return (
        <>
            <Head>
                <title>Thống kê lịch sử</title>
            </Head>
            <div className={styles.LichSu}>
                <h2>Thống kê lịch sử</h2>

                <div className={styles.wrapLichSu}>


                    {
                        listLichSu?.length > 0 &&
                        listLichSu?.map((item, index) => {
                            return (
                                <div key={index} className={styles.itemLichSu}>
                                    <div className={styles.row}>
                                        <div className={styles.left}>
                                            <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                                            <div>Transaction id:</div>
                                        </div>
                                        <div className={styles.right}>
                                            <div>{item?.idTranfer} </div>
                                        </div>
                                    </div>
                                    <div className={styles.row}>
                                        <div className={styles.left}>
                                            <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                                            <div>Status:</div>
                                        </div>
                                        <div className={styles.right}>
                                            <div className={styles.success}>Success</div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className={styles.row}>
                                        <div className={styles.left}>
                                            <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                                            <div>Tên phòng:</div>
                                        </div>
                                        <div className={styles.right}>
                                            <div>Phòng 101</div>
                                        </div>
                                    </div>
                                    <div className={styles.row}>
                                        <div className={styles.left}>
                                            <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                                            <div>Đơn giá:</div>
                                        </div>
                                        <div className={styles.right}>
                                            <div>350000</div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className={styles.row}>
                                        <div className={styles.left}>
                                            <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                                            <div>From:</div>
                                        </div>
                                        <div className={styles.right}>
                                            <div className={styles.from}>{item?.addressFrom} </div>
                                        </div>
                                    </div>
                                    <div className={styles.row}>
                                        <div className={styles.left}>
                                            <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                                            <div>Interacted With (To):</div>
                                        </div>
                                        <div className={styles.right}>
                                            <div className={styles.to}>{item?.addressTo} </div>
                                        </div>
                                    </div>
                                    <div className={styles.row}>
                                        <div className={styles.left}>
                                            <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                                            <div>BEP-20 Tokens Transferred:</div>
                                        </div>
                                        <div className={styles.right}>
                                            <div>{item?.amount} FLP</div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className={styles.row}>
                                        <div className={styles.left}>
                                            <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                                            <div>Thời gian:</div>
                                        </div>
                                        <div className={styles.right}>
                                            <div>{convertTimestampToDateTimeString(item?.time * 1000)} </div>
                                        </div>
                                    </div>
                                    <div className={styles.row}>
                                        <div className={styles.left}>
                                            <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                                            <div>Họ tên:</div>
                                        </div>
                                        <div className={styles.right}>
                                            <div>{item?.tenKhach} </div>
                                        </div>
                                    </div>
                                    <div className={styles.row}>
                                        <div className={styles.left}>
                                            <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                                            <div>Email:</div>
                                        </div>
                                        <div className={styles.right}>
                                            <div>{item?.email} </div>
                                        </div>
                                    </div>
                                    <div className={styles.row}>
                                        <div className={styles.left}>
                                            <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                                            <div>Số điện thoại:</div>
                                        </div>
                                        <div className={styles.right}>
                                            <div>{item?.sdt} </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className={styles.row}>
                                        <div className={styles.left}>
                                            <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                                            <div>Gas price:</div>
                                        </div>
                                        <div className={styles.right}>
                                            <div>{formatNumber(item?.gasPrice / 1000000000000000 / 1000, 14)} </div>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }


                </div>
            </div>
        </>
    )
}

export default LichSu