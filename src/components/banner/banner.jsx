import React from 'react'
import Header from '../header';
import { Select, DatePicker, Input } from 'antd'
import { UserOutlined } from '@ant-design/icons';

import styles from './banner.module.scss'

export default function banner() {
    return (
        <div className={styles.banner_container}>
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
                            // onChange={onChange}
                            // onSearch={onSearch}
                            // filterOption={filterOption}
                            options={[
                                {
                                    value: 'jack',
                                    label: 'Jack',
                                },
                                {
                                    value: 'lucy',
                                    label: 'Lucy',
                                },
                                {
                                    value: 'tom',
                                    label: 'Tom',
                                },
                            ]}
                        />
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.title}>Ngày đến</div>
                    <div className={styles.wrap_input}>
                        <DatePicker style={{ width: '100%' }} />
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.title}>Ngày đi</div>
                    <div className={styles.wrap_input}>
                        <DatePicker style={{ width: '100%' }} />
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
                        />
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.btn_Dat_Lich}>
                        <button className={styles.button}>
                            Đặt ngay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
