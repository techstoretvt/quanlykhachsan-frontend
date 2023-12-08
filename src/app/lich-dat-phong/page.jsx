'use client'

import React, { useEffect, useState } from 'react'
import Banner from '@/components/banner/banner'
import Footer from '@/components/footer/Footer'
import styles from './styles.module.scss'
import { getListDatPhong, guiEmailHuyDon, huyPhongByUser, getListDatPhongByIdUser } from '../../services/api';
import { Button, Modal, Spin } from 'antd'
import { formatDate2, converNumberToMoney } from '../../services/common';
import VerificationInput from "react-verification-input";
import swal from 'sweetalert'




export default function ThongTinDatPhong({ params }) {

    const [listDatPhong, setListDatPhong] = useState([])
    const [openModalHuyPhong, setOpenModalHuyPhong] = useState(false)
    const [loadingHuyPhong, setLoadingHuyPhong] = useState(false)
    const [itemHuyPhong, setItemHuyPhong] = useState(null)
    const [verifyCode, setVerifyCode] = useState('')
    const [isVerifycode, setIsVerifycode] = useState(false)
    const [isLoadingGuiMa, setIsLoadingGuiMa] = useState(false)
    const [openModalXemTT, setOpenModalXemTT] = useState(false)
    const [itemXemTT, setItemXemTT] = useState(null)

    useEffect(() => {
        handleGetListDatPhongKs()
    }, [params])


    const handleGetListDatPhongKs = async () => {
        let accessToken = localStorage.getItem('accessToken')
        let res = await getListDatPhongByIdUser(accessToken)

        console.log(res);
        if (res?.errCode === 0) {
            setListDatPhong(res.data)
        }
    }

    const onClickBtnHuyPhong = (item) => {
        setOpenModalHuyPhong(true)
        setItemHuyPhong(item)
    }

    const onCancelHuyPhong = () => {
        setOpenModalHuyPhong(false)
        setItemHuyPhong(null)
        setVerifyCode('')
        setIsVerifycode(false)
    }

    const handleGuiMa = async () => {
        if (isLoadingGuiMa) return
        setIsLoadingGuiMa(true)
        let res = await guiEmailHuyDon({
            idDatPhong: itemHuyPhong.id
        })

        console.log(res);
        if (res?.errCode === 0) {
            setIsVerifycode(true)
        }
        else {
            swal("Oh no", res.errMessage, "warning");
        }
        setIsLoadingGuiMa(false)
    }

    const handleHuyPhong = async () => {
        if (!verifyCode || loadingHuyPhong) return
        setLoadingHuyPhong(true)
        let res = await huyPhongByUser({
            idDatPhong: itemHuyPhong.id,
            verifyCode
        })

        console.log(res);

        if (res?.errCode === 0) {
            setOpenModalHuyPhong(false)
            setVerifyCode('')
            setIsVerifycode(false)
            setItemHuyPhong(null)
            handleGetListDatPhongKs()

        }
        else {
            swal("Oh no", res.errMessage, "warning");
        }
        setLoadingHuyPhong(false)
    }

    const onclickXemTT = (item) => {
        setItemXemTT(item)
        setOpenModalXemTT(true)
    }


    return (
        <>
            <div className={styles.ThongTinDatPhong_container}>
                <Banner />

                <div className={styles.ThongTinDatPhong_content}>

                    <table border={1} className={styles.table}>
                        <thead>
                            <tr>
                                <th>Tên phòng</th>
                                <th>Ngày</th>
                                <th>Thông tin</th>
                                <th>Trạng thái</th>
                                <th>Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>


                            {
                                listDatPhong?.map((item, index) => {

                                    return (
                                        <tr key={item.id}>
                                            <td>
                                                <b>{item?.ksPhong?.tenPhong}</b>
                                                <div style={{ fontSize: '12px' }}>
                                                    {item?.ksPhong?.ksChiNhanh?.tenChiNhanh}
                                                </div>
                                            </td>
                                            <td style={{ padding: '5px 0' }}>
                                                <div style={{ fontSize: '12px' }}>
                                                    {formatDate2(+item?.timeStart * 1000)}
                                                </div>
                                                <div style={{ fontSize: '12px', fontWeight: 'bold' }}>đến</div>
                                                <div style={{ fontSize: '12px' }}>
                                                    {formatDate2(+item?.timeEnd * 1000)}
                                                </div>
                                            </td>
                                            <td>
                                                <Button
                                                    onClick={() => onclickXemTT(item)}
                                                >
                                                    Xem thông tin
                                                </Button>
                                            </td>
                                            <td>
                                                {
                                                    item.trangThai === 1 &&
                                                    <div style={{ color: 'green', fontWeight: 'bold' }}>
                                                        Đặt trước
                                                    </div>
                                                }
                                                {
                                                    item.trangThai === 2 &&
                                                    <div style={{ color: 'orange', fontWeight: 'bold' }}>
                                                        Nhận phòng
                                                    </div>
                                                }
                                                {
                                                    item.trangThai === 3 &&
                                                    <div style={{ color: 'red', fontWeight: 'bold' }}>
                                                        {item.isThanhToan === 0 ? 'Đã hủy' : 'Kết thúc'}
                                                    </div>
                                                }
                                            </td>
                                            <td>
                                                {
                                                    item.trangThai === 1 &&
                                                    <Button style={{ backgroundColor: 'red' }}
                                                        onClick={() => onClickBtnHuyPhong(item)}
                                                    >
                                                        Hủy phòng
                                                    </Button>
                                                }
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>


                </div>

                <Footer />
            </div>
            <Modal
                title={'Hủy phòng'}
                open={openModalHuyPhong}
                onOk={handleHuyPhong}
                onCancel={() => onCancelHuyPhong()}
            >
                <Spin spinning={loadingHuyPhong}>
                    <div className={styles.modalHuyPhong}>
                        <div className="">
                            <b>Hủy phòng: -</b>
                            {
                                itemHuyPhong?.ksPhong?.tenPhong
                            }
                        </div>
                        <br />
                        {
                            !isVerifycode &&
                            <Button onClick={handleGuiMa} loading={isLoadingGuiMa}>
                                Gửi mã
                            </Button>
                        }

                        {
                            isVerifycode &&
                            <VerificationInput
                                validChars={"0-9"}
                                autoFocus={true}
                                onChange={setVerifyCode}
                                value={verifyCode}
                                classNames={{
                                    container: styles["container"],
                                    character: styles["character"],
                                    characterInactive: styles["character--inactive"],
                                    characterSelected: styles["character--selected"],
                                }}
                            />
                        }

                    </div>

                </Spin>
            </Modal>
            <Modal
                title={itemXemTT?.ksPhong?.tenPhong}
                open={openModalXemTT}
                // onOk={handleHuyPhong}
                onCancel={() => setOpenModalXemTT(false)}
            >
                <div className={styles.modalXemTT}>
                    <table>
                        <tbody>
                            <tr>
                                <th>Tên phòng:</th>
                                <td>{itemXemTT?.ksPhong?.tenPhong}</td>
                            </tr>
                            <tr>
                                <th>Chi nhánh:</th>
                                <td>{itemXemTT?.ksPhong?.ksChiNhanh?.tenChiNhanh}</td>
                            </tr>
                            <tr>
                                <th>Thanh toán:</th>
                                <td>{itemXemTT?.isThanhToan ? 'Đã thanh toán' : 'Chưa thanh toán'}</td>
                            </tr>
                            <tr>
                                <th>Địa chỉ:</th>
                                <td>{itemXemTT?.ksPhong?.ksChiNhanh?.diaChi}</td>
                            </tr>
                            <tr>
                                <th>Từ ngày:</th>
                                <td>{formatDate2(+itemXemTT?.timeStart * 1000)}</td>
                            </tr>
                            <tr>
                                <th>Đến ngày:</th>
                                <td>{formatDate2(+itemXemTT?.timeEnd * 1000)}</td>
                            </tr>
                            <tr>
                                <th>Khuyến mãi:</th>
                                <td>{itemXemTT?.khuyenMai}%</td>
                            </tr>
                            <tr>
                                <th>Thành tiền:</th>
                                <td>{converNumberToMoney(itemXemTT?.thanhTien)} VND</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </Modal>
        </>
    )
}
