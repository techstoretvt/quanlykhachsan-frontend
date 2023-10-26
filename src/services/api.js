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

export const getDanhSachChiNhanh = async () => {
    try {
        return await axios.get('/api/v1/lay-danh-sach-chi-nahnh-ks');
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

export const getDanhSachPhong = async (data) => {
    try {
        return await axios.get('/api/v1/tim-kiem-phong-ks-user', { params: data });
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

export const datPhongKs = async (data) => {
    try {
        return await axios.post('/api/v1/dat-phong-ks-user', data);
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

export const getKhachHangBySdt = async (data) => {
    try {
        return await axios.get("/api/v1/get-info-khach-hang-by-sdt", {
            params: data
        });
    } catch (error) {
        console.log(
            "🚀 ~ file: adminService.js:534 ~ xoaBaiHat ~ error:",
            error?.response?.data || error
        );
        return error?.response?.data || { errCode: -1, errMessage: "Error" };
    }
};

export const getListDatPhong = async (data) => {
    try {
        return await axios.get("/api/v1/get-list-dat-phong-by-id-khach", {
            params: data
        });
    } catch (error) {
        console.log(
            "🚀 ~ file: adminService.js:534 ~ xoaBaiHat ~ error:",
            error?.response?.data || error
        );
        return error?.response?.data || { errCode: -1, errMessage: "Error" };
    }
};

