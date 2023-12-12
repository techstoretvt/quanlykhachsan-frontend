import styles from './home.module.scss'

import Banner from '../components/banner/banner'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <div className={styles.Homepage}>
      <Banner />

      <div className={styles.wrap_icon}>
        <div className={styles.icon}>
          <i className='fa-solid fa-user-ninja'></i>
          <div className={styles.text}>Thương hiệu du lịch hàng đầu</div>
        </div>
        <div className={styles.icon}>
          <i className='fa-solid fa-money-check-dollar'></i>
          <div className={styles.text}>Luôn có giá tốt</div>
        </div>
        <div className={styles.icon}>
          <i className='fa-solid fa-thumbs-up'></i>
          <div className={styles.text}>99% khách hàng hài lòng</div>
        </div>
      </div>

      <div className={styles.wrap_info}>
        <div className={styles.item_info}>
          <div className={styles.title}>TBT HOSPITALITY</div>
          <div className={styles.sub}>
            TBT Hospitality đặt nền móng cho ngành du lịch bền vững khi tiên phong sở hữu chuỗi giá trị theo trải nghiệm của khách hàng {'"'}Lưu trú - Trung tâm hội nghị/ Nhà hàng - Khu vui chơi - Lữ hành{'"'} tại các trung tâm du lịch nổi tiếng trong và ngoài nước, như: Bến Tre, Cần Thơ, Đà Lạt, Lâm Đồng, Bình Thuận, Ninh Thuận, Nha Trang, Hội An, Campuchia ... Hơn 1,200 phòng nghỉ đạt tiêu chuẩn 3 - 5 sao, 02 khu vui chơi giải trí và 2 trung tâm hội nghị đã phục vụ hơn 2 triệu lượt khách Việt Nam & Quốc tế mỗi năm.
          </div>
          <div className={styles.button}>
            <button className={styles["uiverse"]}>
              <div className={styles["wrapper"]}>
                <span>XEM THÊM</span>
                <div className={styles["circle"] + " " + styles["circle-12"]}></div>
                <div className={styles["circle"] + " " + styles["circle-11"]}></div>
                <div className={styles["circle"] + " " + styles["circle-10"]}></div>
                <div className={styles["circle"] + " " + styles["circle-9"]}></div>
                <div className={styles["circle"] + " " + styles["circle-8"]}></div>
                <div className={styles["circle"] + " " + styles["circle-7"]}></div>
                <div className={styles["circle"] + " " + styles["circle-6"]}></div>
                <div className={styles["circle"] + " " + styles["circle-5"]}></div>
                <div className={styles["circle"] + " " + styles["circle-4"]}></div>
                <div className={styles["circle"] + " " + styles["circle-3"]}></div>
                <div className={styles["circle"] + " " + styles["circle-2"]}></div>
                <div className={styles["circle"] + " " + styles["circle-1"]}></div>
              </div>
            </button>


          </div>
        </div>
        <div className={styles.image1}>

        </div>
        <div className={styles.image2}>

        </div>
      </div>


      <Footer />

    </div>
  )
}
