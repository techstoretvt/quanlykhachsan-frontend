'use client'
import React, { useEffect, useState } from 'react'

import styles from './styles.module.scss'
import Banner from '@/components/banner/banner'
import Footer from '@/components/footer/Footer'
import { useSearchParams } from 'next/navigation'
import { getDanhSachPhong, datPhongKs, getKhachHangBySdt, datPhongKsLoai2, datPhongKsLoai3 } from '../../services/api';
import swal from 'sweetalert'
import { Button, Modal, DatePicker, Input, Spin, Select } from 'antd';
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { converNumberToMoney } from '../../services/common';
import Fancybox from "../../components/Fancybox/Fancybox";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
const { RangePicker } = DatePicker;
dayjs.extend(customParseFormat);



const Item_phong = ({ data, addDsDaChon }) => {

    const [isMoreMota, setIsMoreMota] = useState(false)
    const [openModalMoreInfo, setOpenModalMoreInfo] = useState(false)

    var settings = {
        dots: false,
        infinite: false,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const RenderImagePhong = () => {
        if (!data) return;
        let { ksAnhPhongs } = data;

        return (
            <Slider {...settings}>
                {
                    ksAnhPhongs?.map(item => (
                        <div key={item.id}>
                            <Image src={item.urlAnh}
                                width={100}
                                height={100}
                                alt=''
                                className={styles.phongAnh_img}
                                data-fancybox={`gallery-${data?.id}`}
                                data-src={item.urlAnh}
                                data-thumb={item.urlAnh}
                                data-width={10000}
                                data-height={10000}
                            />
                        </div>
                    ))
                }
            </Slider>
        )
    }

    const handleOnClickChonPhong = () => {
        let newItem = {
            idPhong: data?.id,
            tenPhong: data?.tenPhong,
            donGia: data?.donGia,
            khuyenMai: data?.khuyenMai || 0
        }

        addDsDaChon(newItem)
    }

    return (
        <>
            <div className={styles.phong}>
                <div className={styles.top}>
                    <div className={styles.phongAnh}>
                        <Fancybox
                            options={{
                                infinite: true,
                                hideScrollbar: true,
                                Toolbar: {
                                    display: [
                                        { id: "prev", position: "center" },
                                        { id: "counter", position: "center" },
                                        { id: "next", position: "center" },
                                        "zoom",
                                        "slideshow",
                                        "fullscreen",
                                        "download",
                                        "thumbs",
                                        "close",
                                    ],
                                },
                            }}
                        >
                            <RenderImagePhong />
                        </Fancybox>


                    </div>
                    <div className={styles.phongInfo}>
                        <div className={styles.phongInfo_tenPhong}>
                            {data?.tenPhong}
                        </div>
                        <div className={styles.phongInfo_wrapNumber}>
                            <div className={styles.phongInfo_wrapNumber_item}>
                                <i className="fa-solid fa-user-tie"></i>
                                <div className={styles.phongInfo_wrapNumber_item_text}>
                                    Sleeps {data?.soNguoi}
                                </div>
                            </div>
                            <div className={styles.phongInfo_wrapNumber_item}>
                                <i className="fa-solid fa-bed"></i>
                                <div className={styles.phongInfo_wrapNumber_item_text}>
                                    Twin {data?.soGiuongDoi}
                                </div>
                            </div>
                            <div className={styles.phongInfo_wrapNumber_item}>
                                <i className="fa-solid fa-bath"></i>
                                <div className={styles.phongInfo_wrapNumber_item_text}>
                                    Bathroom {data?.soPhongTam}
                                </div>
                            </div>
                        </div>
                        <div className={styles.phongInfo_tienIch}
                            style={{ WebkitLineClamp: isMoreMota ? '20' : '2' }}
                        >
                            {data?.tienIch}
                        </div>

                        <div className={styles.phongInfo_moTa}
                            style={{ WebkitLineClamp: isMoreMota ? '20' : '2' }}
                        >
                            {data?.moTa}
                        </div>

                        <div className={styles.more}
                            onClick={() => setIsMoreMota(!isMoreMota)}
                        >
                            {
                                isMoreMota ? 'Less info' : 'More info'
                            }

                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    {
                        data?.khuyenMai !== 0 &&
                        <div className={styles.sale}>
                            Giảm {data?.khuyenMai}%
                        </div>
                    }
                    <div className={styles.wrap}>
                        <div className={styles.left}>
                            <div className={styles.title}>Standard Rate</div>
                            <div className={styles.wrap}>
                                <i className="fa-regular fa-circle-check"
                                    style={{ color: '#177f0f' }}
                                ></i>
                                <div className={styles.text}>Free cancellation!</div>
                            </div>
                            <div className={styles.wrap}>
                                <i className="fa-regular fa-circle-check"
                                    style={{ color: '#177f0f' }}
                                ></i>
                                <div className={styles.text}>Breakfast inclusive</div>
                            </div>
                            <div className={styles.wrap}>
                                <i className="fa-regular fa-circle-check"
                                    style={{ color: '#177f0f' }}
                                ></i>
                                <div className={styles.text}>Book now, pay later</div>
                            </div>
                            <div className={styles.more}
                                onClick={() => setOpenModalMoreInfo(true)}
                            >More info</div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.left}>
                                {
                                    data?.khuyenMai !== 0 &&
                                    <div className={styles.rootMoney}>
                                        VND {converNumberToMoney(data?.donGia)}
                                    </div>
                                }
                                <div className={styles.currentMoney}>
                                    VND {converNumberToMoney(+data?.donGia * (100 - data?.khuyenMai) / 100)}
                                </div>
                            </div>
                            <div className={styles.right}>
                                <Button style={{
                                    backgroundColor: '#210038', color: '#fff',
                                    padding: '0 20px'
                                }}
                                    onClick={handleOnClickChonPhong}
                                >
                                    Chọn
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                title={data?.tenPhong}
                open={openModalMoreInfo}
                onOk={handleOnClickChonPhong}
                onCancel={() => setOpenModalMoreInfo(false)}
                width={1000}
                okText={'Chọn'}
                cancelText={'Đóng'}
            >
                <div className={styles.Modal_MoreInfo + ' Modal_MoreInfo'}>
                    <div className={styles.left}>
                        <div className={styles.wrap_check}>
                            <div className={styles.checkItem}>
                                <i className="fa-regular fa-circle-check"
                                    style={{ color: '#177f0f' }}
                                ></i>
                                <div className={styles.text}>Breakfast inclusive</div>
                            </div>
                            <div className={styles.checkItem}>
                                <i className="fa-regular fa-circle-check"
                                    style={{ color: '#177f0f' }}
                                ></i>
                                <div className={styles.text}>Book now, pay later</div>
                            </div>
                            <div className={styles.checkItem}>
                                <i className="fa-regular fa-circle-check"
                                    style={{ color: '#177f0f' }}
                                ></i>
                                <div className={styles.text}>Free cancellation!</div>
                            </div>
                        </div>
                        <div className={styles.title}>
                            Mô tả phòng
                        </div>
                        <div className={styles.moTaPhong}>
                            {data?.moTa}
                        </div>
                        <div className={styles.title}>
                            Tiên ích phòng
                        </div>
                        <div className={styles.tienIchPhong}>
                            {data?.tienIch}
                        </div>
                        <div className={styles.wrap_tienIch}>
                            <div className={styles.tienIch_item}>
                                <div className={styles.left}>
                                    <i className="fa-solid fa-person"></i>
                                    <div className={styles.text}>Occupancy</div>

                                </div>
                                <div className={styles.right}>
                                    Sleeps {data?.soNguoi}
                                </div>

                            </div>
                            <div className={styles.tienIch_item}>
                                <div className={styles.left}>
                                    <i className="fa-solid fa-bed"></i>
                                    <div className={styles.text}>Room type</div>

                                </div>
                                <div className={styles.right}>
                                    Room
                                </div>

                            </div>
                            <div className={styles.tienIch_item}>
                                <div className={styles.left}>
                                    <i className="fa-solid fa-people-carry-box"></i>
                                    <div className={styles.text}>Bed configuration</div>

                                </div>
                                <div className={styles.right}>
                                    {data?.soGiuongDoi} Double Bed
                                </div>

                            </div>
                            <div className={styles.tienIch_item}>
                                <div className={styles.left}>
                                    <i className="fa-solid fa-maximize"></i>
                                    <div className={styles.text}>Room size</div>

                                </div>
                                <div className={styles.right}>
                                    {data?.dienTich}m²
                                </div>

                            </div>
                            <div className={styles.tienIch_item}>
                                <div className={styles.left}>
                                    <i className="fa-solid fa-bath"></i>
                                    <div className={styles.text}>Number of bathrooms</div>

                                </div>
                                <div className={styles.right}>
                                    {data?.soPhongTam}
                                </div>

                            </div>
                            <div className={styles.tienIch_item}>
                                <div className={styles.left}>
                                    <i className="fa-solid fa-sun"></i>
                                    <div className={styles.text}>Room view</div>

                                </div>
                                <div className={styles.right}>
                                    Limited View
                                </div>

                            </div>
                            <div className={styles.tienIch_item}>
                                <div className={styles.left}>
                                    <i className="fa-solid fa-smoking"></i>
                                    <div className={styles.text}>Smoking policy</div>

                                </div>
                                <div className={styles.right}>
                                    Non-Smoking
                                </div>

                            </div>
                        </div>
                        <div className={styles.title}>
                            Địa chỉ
                        </div>
                        <div className={styles.diaChi}>
                            {data?.ksChiNhanh?.diaChi}
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.anhPhong}>
                            <RenderImagePhong />
                        </div>
                        <div className={styles.title}>
                            Phân tích chi tiết
                        </div>
                        <div className={styles.wrap_price}>
                            <div className={styles.khuyenMai}>
                                <div className={styles.title}>Khuyễn mãi</div>
                                <div className={styles.number}>
                                    -{data?.khuyenMai}%
                                </div>
                            </div>
                            <div className={styles.thanhTien}>
                                <div className={styles.title}>Thành tiền</div>
                                <div className={styles.number}>
                                    VND {converNumberToMoney(data?.donGia * (100 - data?.khuyenMai) / 100)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}


export default function TimPhong() {
    const searchParams = useSearchParams()

    const [listPhong, setListPhong] = useState([])
    const [dsDaChon, setDsDaChon] = useState([])
    const [openModalDatPhong, setOpenModalDatPhong] = useState(false)
    const [timeStart, setTimeStart] = useState(0)
    const [timeEnd, setTimeEnd] = useState(0)
    const [sdt, setSdt] = useState('')
    const [hoTen, setHoTen] = useState('')
    const [email, setEmail] = useState('')
    const [isLoadingDatPhong, setIsLoadingDatPhong] = useState(false)
    const [isLoadingGetUser, setIsLoadingGetUser] = useState(false)
    const [loadiThanhToan, setLoaiThanhToan] = useState('1')
    const [fileAnhTT, setFileAnhTT] = useState(null);
    const [urlAnhTT, setUrlAnhTT] = useState('')
    const [openModalTTLoai3, setOpenModalTTLoai3] = useState(false)
    const [isLoadingModalTT, setIsLoadingModalTT] = useState(false)

    useEffect(() => {
        handleGetListPhong()
    }, [searchParams])


    const handleGetListPhong = async () => {
        const idChiNhanh = searchParams.get('idChiNhanh')
        const timeStart = searchParams.get('timeStart')
        const timeEnd = searchParams.get('timeEnd')
        const soNguoi = searchParams.get('soNguoi')

        let res = await getDanhSachPhong({
            idChiNhanh,
            timeStart,
            timeEnd,
            soNguoi
        })

        console.log(res);
        if (res?.errCode === 0) {
            setListPhong(res.data)
        }
        else {
            swal("Oh no!", res.errMessage, "warning");
        }

    }

    const addDsDaChon = (newItem) => {
        console.log(newItem);
        let arr = [...dsDaChon]
        let check = true
        arr.forEach(item => {
            if (item.idPhong === newItem.idPhong) check = false
        })

        if (check) {

            arr.push(newItem)
            setDsDaChon(arr)
        }
    }

    const deleteDsDaChonByIndex = (index) => {
        let arr = [...dsDaChon]
        arr.splice(index, 1)
        setDsDaChon(arr)
    }

    const onChangeTime = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);

        let start = (dateString && dateString[0] && dayjs(dateString[0], "DD-MM-YYYY").unix()) || 0
        let end = (dateString && dateString[0] && dayjs(dateString[1], "DD-MM-YYYY").unix()) || 0

        setTimeStart(start)
        setTimeEnd(end)

        console.log("range time: ", start, end);


    };

    const disabledDate = (current) => {
        // Can not select days before today and today
        if (current && current < dayjs().startOf('day'))
            return true;

        return false;
    };

    const onchangeSDT = async (value) => {
        if (value.length <= 10) setSdt(value)


        if (value.length === 10) {
            setIsLoadingGetUser(true)
            let res = await getKhachHangBySdt({ sdt: value })
            console.log(res);
            if (res?.errCode === 0) {
                setHoTen(res.data.hoTen)
                setEmail(res.data.email)
            }
            else {
                setHoTen('')
                setEmail('')
            }
            setIsLoadingGetUser(false)
        }
    }

    const handleDatPhong = () => {
        if (loadiThanhToan === '1') {
            handleDatPhongLoai1()
        }
        else if (loadiThanhToan === '2') {
            handleDatPhongPaypal()
        }
        else {
            //check value
            if (!timeStart || !timeEnd || !sdt || !hoTen || !email) {
                swal("Khoan!", 'Vui lòng điền đầy đủ thông tin', "warning");
                return
            }
            setOpenModalTTLoai3(true)

            //open modal
        }
    }

    const handleDatPhongLoai1 = async () => {
        if (isLoadingDatPhong) return
        if (!timeStart || !timeEnd || !sdt || !hoTen || !email) {
            swal("Khoan!", 'Vui lòng điền đầy đủ thông tin', "warning");
            return
        }

        let arrIdPhong = dsDaChon.map(item => item.idPhong)
        setIsLoadingDatPhong(true)
        let res = await datPhongKs({
            idPhong: arrIdPhong || [],
            timeStart,
            timeEnd,
            hoTen,
            email,
            sdt,
            idUser: localStorage.getItem("idUser")
        })

        console.log(res);
        if (res?.errCode === 0) {
            swal("Success", 'Đặt phòng thành công', "success");
            setOpenModalDatPhong(false)
            setDsDaChon([])
        }
        else {
            swal("Oh no!", res.errMessage, "warning");
        }


        setIsLoadingDatPhong(false)


    }

    const handleDatPhongPaypal = async () => {
        if (isLoadingDatPhong) return
        if (!timeStart || !timeEnd || !sdt || !hoTen || !email) {
            swal("Khoan!", 'Vui lòng điền đầy đủ thông tin', "warning");
            return
        }

        let arrIdPhong = dsDaChon.map(item => item.idPhong)
        setIsLoadingDatPhong(true)

        let res = await datPhongKsLoai2({
            idPhong: arrIdPhong || [],
            timeStart,
            timeEnd,
            hoTen,
            email,
            sdt,
            idUser: localStorage.getItem("idUser")
        })

        console.log("paypal: ", res);
        if (res?.errCode === 0) {
            window.location.href = res.link;
        }
        else {
            swal("Oh no!", res.errMessage, "warning");
            setIsLoadingDatPhong(false)
        }




    }

    const uploadImageTT = (e) => {
        let files = e.target.files
        let file = files[0]

        let url = URL.createObjectURL(file)
        setUrlAnhTT(url)
        setFileAnhTT(file)
    }


    const handleDatPhongLoai3 = async () => {
        if (!timeStart || !timeEnd || !sdt || !hoTen || !email) {
            swal("Khoan!", 'Vui lòng điền đầy đủ thông tin', "warning");
            return
        }
        if (!fileAnhTT) {
            swal("Khoan!", 'Hãy chọn ảnh giao dịch', "warning");
            return
        }

        let form = new FormData()
        form.append('file', fileAnhTT)
        let arrIdPhong = dsDaChon.map(item => item.idPhong)

        setIsLoadingModalTT(true)
        let res = await datPhongKsLoai3(form, {
            idPhong: arrIdPhong || [],
            timeStart,
            timeEnd,
            hoTen,
            email,
            sdt,
            idUser: localStorage.getItem("idUser")
        })

        console.log(res);
        if (res?.errCode === 0) {
            setOpenModalTTLoai3(false)
            setOpenModalDatPhong(false)
            swal("Success", "Đặt phòng thành công", "success");
        }
        else {
            swal("Oh no!", res.errMessage, "warning");
        }
        setIsLoadingModalTT(true)

    }

    const onCancelTTloai3 = () => {
        setOpenModalTTLoai3(false)
        setUrlAnhTT('')
        setFileAnhTT(null)
    }



    return (
        <>
            <div className={styles.TimPhong_container}>
                <Banner height={'50vh'} />

                <div className={styles.TimPhong_content + " TimPhong_container"}>
                    <div className={styles.listPhong}>
                        {
                            listPhong?.map((item, index) => (
                                <Item_phong key={item.id} data={item} addDsDaChon={addDsDaChon} />
                            ))
                        }


                    </div>
                    <div className={styles.fromBook}>
                        <div className={styles.fromBook_time}>
                            <div>8/12 - 13/12</div>
                            <div>5 ngay</div>
                        </div>
                        <div>Phong: 1 nguoi</div>
                        <div className={styles.wrap_chonPhong}>
                            {
                                dsDaChon.length === 0 &&
                                <div className={styles.wrap_chonPhong_nothing}>
                                    Chọn phòng để tiếp tục
                                </div>
                            }

                            {
                                dsDaChon?.map((item, index) => (
                                    <div key={index} className={styles.phongDaChon}>
                                        <div className={styles.title}>
                                            {item.tenPhong}
                                        </div>
                                        <div className={styles.wrap_info}>
                                            <div className={styles.left}>
                                                <div>
                                                    Breakfast inclusive
                                                </div>
                                                <div>
                                                    Book now, pay later
                                                </div>
                                                <div>
                                                    Non-refundable
                                                </div>
                                            </div>
                                            <div className={styles.right}>
                                                VND {converNumberToMoney(item.donGia * (100 - item.khuyenMai) / 100)}
                                            </div>
                                        </div>
                                        <div className={styles.btnDelete}
                                            onClick={() => deleteDsDaChonByIndex(index)}
                                        >
                                            <i className="fa-solid fa-trash-can"></i>
                                        </div>
                                    </div>
                                ))
                            }




                        </div>
                        <Button type="primary" className={styles.fromBook_btnDatPhong}
                            disabled={dsDaChon.length === 0}
                            onClick={() => setOpenModalDatPhong(true)}
                        >
                            Đặt phòng
                        </Button>

                    </div>
                </div>

                <Footer />
            </div>
            <Modal
                title={'Thanh toán'}
                open={openModalTTLoai3}
                onOk={handleDatPhongLoai3}
                onCancel={() => onCancelTTloai3()}
            >
                <Spin spinning={isLoadingModalTT}>
                    <div className={styles.modalThanhToan3}>
                        <div className={styles.info}>
                            <div className={styles.wrap}>
                                <div className={styles.title}>Số tài khoản ngân hàng: </div>
                                <div className={styles.value}>20094600000</div>
                            </div>
                            <div className={styles.wrap}>
                                <div className={styles.title}>Tên: </div>
                                <div className={styles.value}>Trần Văn A</div>
                            </div>
                            <div className={styles.wrap}>
                                <div className={styles.title}>Ngân hàng: </div>
                                <div className={styles.value}>Vietcombank</div>
                            </div>
                            <div className={styles.wrap}>
                                <div className={styles.title}>Chi nhánh: </div>
                                <div className={styles.value}>Cần thơ</div>
                            </div>
                            <div className={styles.wrap}>
                                <div className={styles.title}>Nội dung: </div>
                                <div className={styles.value}>123456 - Đặt phòng</div>
                            </div>
                        </div>
                        <div className={styles.warning}>
                            <div className={styles.title}>Lưu ý quan trọng</div>
                            <div className={styles.sub}>
                                Vui lòng không cung câp thông tin cá nhân hình ảnh giao dịch cho bất kì ai ngoài nhân viên CSKH trực tuyến của TBT Hotel.
                            </div>
                        </div>
                        <div className={styles.WrapAnhGiaoDich}>
                            <label className={styles.anhGiaoDich}>
                                {
                                    urlAnhTT &&
                                    <Image
                                        alt=''
                                        height={100}
                                        width={100}
                                        src={urlAnhTT}
                                        style={{ objectFit: 'cover' }}
                                    />
                                }
                                <input type='file' accept='image/*' hidden onChange={uploadImageTT} />
                            </label>
                            <b>Ảnh giao dịch</b>
                        </div>
                    </div>
                </Spin>
            </Modal>

            <Modal
                title={'Đặt phòng'}
                open={openModalDatPhong}
                onOk={handleDatPhong}
                onCancel={() => setOpenModalDatPhong(false)}
            >
                <Spin spinning={isLoadingGetUser || isLoadingDatPhong}>
                    <RangePicker
                        disabledDate={disabledDate}
                        format="DD-MM-YYYY"
                        // showTime={{
                        //   hideDisabledOptions: true,
                        // }}
                        onChange={onChangeTime}
                    />
                    <div style={{ margin: '6px 0' }}></div>
                    <Input placeholder="Số điện thoại"
                        onChange={(e) => onchangeSDT(e.target.value)}
                        value={sdt}
                        type='number'
                    />
                    <div style={{ margin: '6px 0' }}></div>
                    < Input placeholder="Họ và tên"
                        value={hoTen}
                        onChange={(e) => setHoTen(e.target.value)}
                    />
                    <div style={{ margin: '6px 0' }}></div>
                    <Input placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div style={{ marginTop: '10px' }}>
                        <b style={{ marginRight: '10px' }}>Phương thức thanh toán</b>

                        <Select
                            value={loadiThanhToan}
                            placeholder='shfj'
                            style={{

                            }}
                            onChange={(value) => setLoaiThanhToan(value)}
                            options={[
                                {
                                    value: '1',
                                    label: 'Thanh toán tại quầy',
                                },
                                {
                                    value: '2',
                                    label: 'Thanh toán Paypal',
                                },
                                {
                                    value: '3',
                                    label: 'Các Ngân hàng khác',
                                },
                            ]}
                        />

                    </div>



                </Spin>
            </Modal>


        </>
    )
}
