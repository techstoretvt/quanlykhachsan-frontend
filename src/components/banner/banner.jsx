"use client"
import React, { useEffect, useState } from 'react'
import Header from '../header/Header';
import { Select, DatePicker, Input } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import swal from 'sweetalert'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import styles from './banner.module.scss'
import { getDanhSachChiNhanh } from '../../services/api';
const { RangePicker } = DatePicker;
dayjs.extend(customParseFormat);
import { useRouter } from 'next/navigation'

export default function Banner(props) {

    let { height } = props;
    const router = useRouter()

    const [listChiNhanh, setListChiNhanh] = useState([])
    const [timeStart, setTimeStart] = useState(0)
    const [timeEnd, setTimeEnd] = useState(0)
    const [soNguoi, setSoNguoi] = useState(1)
    const [idChiNhanh, setIdChiNhanh] = useState('')

    useEffect(() => {
        getListChiNhanh()
    }, [])

    const getListChiNhanh = async () => {

        let res = await getDanhSachChiNhanh()
        // console.log(res);
        if (res?.errCode === 0) {
            let arr = res.data.map(item => ({
                value: item.id,
                label: item.tenChiNhanh
            }))
            setListChiNhanh(arr)
        }
        else {
            swal("Oh no!", res.errMessage, "warning");
        }
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


    const handleTimPhong = () => {
        if (!idChiNhanh) {
            swal("Khoan!", "Vui lòng chọn chi nhánh", "warning");
            return
        }
        let data = {
            idChiNhanh,
            timeStart,
            timeEnd,
            soNguoi
        }
        // console.log(data);

        router.push(`/tim-phong?idChiNhanh=${idChiNhanh}&timeStart=${timeStart}&timeEnd=${timeEnd}&soNguoi=${soNguoi}`,
            { scroll: true })
    }

    return (
        <div className={styles.banner_container} style={{ height: height ? height : '100vh' }}>
            <Header />

            <div className={styles.from_dat_lich}>
                <div className={styles.group}>
                    <div className={styles.title}>Lựa chọn khách sạn</div>
                    <div className={styles.wrap_input}>
                        <Select
                            showSearch
                            placeholder="Chọn khách sạn..."
                            optionFilterProp="children"
                            style={{ width: '100%' }}
                            onChange={(value) => setIdChiNhanh(value)}
                            // onSearch={onSearch}
                            // filterOption={filterOption}
                            options={listChiNhanh}
                        />
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.title}>Ngày đến/ngày đi</div>
                    <div className={styles.wrap_input}>
                        <RangePicker
                            disabledDate={disabledDate}
                            format="DD-MM-YYYY"
                            // showTime={{
                            //   hideDisabledOptions: true,
                            // }}
                            onChange={onChangeTime}
                        />
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.title}>Số lượng khác</div>
                    <div className={styles.wrap_input}>
                        <Input
                            size="large"
                            placeholder="Số lượng người..."
                            prefix={<UserOutlined />}
                            type='number'
                            value={soNguoi}
                            onChange={(e) => setSoNguoi(e.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.btn_Dat_Lich}>
                        <button className={styles.button} onClick={handleTimPhong}>
                            Đặt ngay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
