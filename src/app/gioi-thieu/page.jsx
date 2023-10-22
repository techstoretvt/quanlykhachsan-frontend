import React from 'react'
import styles from './styles.module.scss'
import Banner from '@/components/banner/banner'
import Footer from '@/components/footer/Footer'

const ds_khachsan = [
    {
        ten: 'TBT Hotel – Airport',
        diachi: '315 Hoàng Văn Thụ, Phường 2, Quận Tân Bình, Tp. Hồ Chí Minh',
    },
    {
        ten: 'TBT Hotel – Cần Thơ',
        diachi: '02 Hai Bà Trưng, Quận Ninh Kiều, Tp. Cần Thơ',
    },
    {
        ten: 'TBT Hotel – Ngọc Lan',
        diachi: '42 Nguyễn Chí Thanh, Tp. Đà Lạt',
    },
    {
        ten: '	TBT Hotel – Đà Lạt',
        diachi: '04 Nguyễn Thị Minh Khai, Phường 1, TP Đà Lạt',
    },
    {
        ten: 'TBT Hotel – Phan Thiết',
        diachi: 'Khu Đồi Dương, Đường Lê Lợi, Phường Hưng Long, TP.Phan Thiết, Tỉnh Bình Thuận',
    },
    {
        ten: 'TBT Resort – Kê Gà',
        diachi: 'Thôn Thuận Thành, Xã Thuận Quý, Huyện Hàm Thuận Nam, Tỉnh Bình Thuận',
    },
    {
        ten: 'TBT Resort – Ninh Thuận',
        diachi: 'Biển Ninh Chữ, Đường Yên Ninh, Thành phố Phan Rang - Tháp Chàm, tỉnh Ninh Thuận',
    },
    {
        ten: 'TBT Hotel - Michelia',
        diachi: '04 Pasteur, Phường Xương Huân, Thành phố Nha Trang, Tỉnh Khánh Hòa',
    },
    {
        ten: '	TBT Resort – Dốc Lết',
        diachi: 'Đông Cát, Ninh Hải, Thị xã Ninh Hòa, tỉnh Khánh Hòa ',
    },
    {
        ten: 'TBT Hotel – Hội An',
        diachi: '224-226 Lý Thái Tổ, P. Cẩm Châu, Tp. Hội An, T. Quảng Nam',
    },
    {
        ten: 'Imperial Hotel',
        diachi: '8 Hùng Vương, Tp. Huế',
    },
    {
        ten: 'TBT Van Phong Bay Resort',
        diachi: 'Dốc Lết, Thị xã Ninh Hòa, Tỉnh Khánh Hòa',
    },
    {
        ten: '	TBT Hotel – Angkor',
        diachi: 'National Road 6, Siem Reap City, Kingdom Of Cambodia',
    },

]

export default function index() {
    return (
        <div className={styles.gioithieu_container}>
            <Banner />
            <div className={styles.wrap_gioithieu}>
                <div className={styles.title}>TBT Hotel</div>
                <div className={styles.sub}>
                    TBT Hotel là thương hiệu khách sạn/ resort thuộc Ngành du lịch TBT (TBT Hospitality), trực thuộc Tập đoàn TBT. Với định hướng phát triển chuỗi khách sạn, resort theo tiêu chuẩn dịch vụ đẳng cấp từ 3 đến 5 sao, TBT Hotel đã và đang nâng cấp, định vị lại chuỗi hệ thống, nâng cao chất lượng sản phẩm và dịch vụ nhằm “Khẳng định thương hiệu bằng chất lượng dịch vụ” theo phương châm của Ngành.
                </div>
                <div className={styles.sub}>
                    Hệ thống TBT Hotel gồm 12 khách sạn/ resort tọa lạc tại các tỉnh, thành du lịch trọng điểm của cả nước, gồm thành phố Hồ Chí Minh, Cần Thơ, Bến Tre, Đà Lạt, Bình Thuận, Ninh Thuận, Nha Trang, Hội An, Huế và khách sạn tại thành phố Siem Reap, vương quốc Campuchia. Các khách sạn/ resort đạt tiêu chuẩn 3-5 sao, đặc biệt 3 resort đều sở hữu bãi biển riêng và là những bãi biển đẹp nổi tiếng của Việt Nam.
                </div>

                <table border={1} style={{ width: '100%', marginTop: '50px' }}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>kHÁCH SẠN/ RESORT</th>
                            <th>ĐỊA CHỈ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ds_khachsan.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.ten}</td>
                                    <td>{item.diachi}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <div className={styles.sub}>
                    Lợi thế là một trong những mắc xích của hệ sinh thái Lưu trú - Vui chơi - Trung tâm hội nghị - Lữ hành của TBT Hospitality, quý khách lưu trú tại hệ thống TBT Hotel sẽ có những trải nghiệm khép kín và tiện ích.
                </div>

                <div className={styles.title2}>Quy mô hoạt động</div>
                <div className={styles.wrap_quymo}>
                    <div className={styles.wrap_quymo_item}>
                        <div className={styles.wrap_quymo_image + " " + styles.img1}></div>
                        <div className={styles.wrap_quymo_text}>9 khách sạn & 3 resort</div>
                    </div>
                    <div className={styles.wrap_quymo_item}>
                        <div className={styles.wrap_quymo_image + " " + styles.img2}></div>
                        <div className={styles.wrap_quymo_text}>2 Trung tâm
                            hội nghị</div>
                    </div>
                    <div className={styles.wrap_quymo_item}>
                        <div className={styles.wrap_quymo_image + " " + styles.img3}></div>
                        <div className={styles.wrap_quymo_text}>20.000  Lượt khách
                            mỗi năm</div>
                    </div>
                </div>

                <div className={styles.wrap_quymo}>
                    <div className={styles.wrap_quymo_item}>
                        <div className={styles.title}>Tầm Nhìn</div>
                        <div className={styles.wrap_quymo_text}>Trở thành chuỗi thương hiệu du lịch uy tín – chất lượng – sự lựa chọn hàng đầu của khách hàng.</div>
                    </div>
                    <div className={styles.wrap_quymo_item}>
                        <div className={styles.title}>Sứ Mệnh</div>
                        <div className={styles.wrap_quymo_text}>Hoàn thiện chuỗi giá trị Lưu trú – Giải trí - Ẩm thực mang đến cho khách hàng trải nghiệm chất lượng dịch vụ khác biệt.</div>
                    </div>
                    <div className={styles.wrap_quymo_item}>
                        <div className={styles.title}>Giá Trị Cốt Lõi</div>
                        <div className={styles.wrap_quymo_text}>Đáp ứng và đa dạng hóa loại hình dịch vụ với phong cách phục vụ và chuyên nghiệp.</div>
                    </div>
                </div>

            </div>
            <Footer />
        </div >
    )
}
