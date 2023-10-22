import axios from './axios';


export const getDanhSachBaiViet = async () => {
    try {
        return await axios.get('/api/v1/lay-danh-sach-bai-viet-ks');
    } catch (error) {
        console.log(
            'Loi: ',
            error?.response?.data
        );
        return {
            errCode: -1,
        };
    }
};

export const getNoiDungBaiViet = async (data) => {
    try {
        return await axios.get('/api/v1/lay-noi-dung-bai-viet-ks', { params: data });
    } catch (error) {
        console.log(
            'Loi: ',
            error?.response?.data
        );
        return {
            errCode: -1,
        };
    }
};

export const guiEmailService = async (data) => {
    try {
        return await axios.post('/api/v1/send-email-from-contact', data);
    } catch (error) {
        console.log(
            'Loi: ',
            error?.response?.data
        );
        return {
            errCode: -1,
        };
    }
};

