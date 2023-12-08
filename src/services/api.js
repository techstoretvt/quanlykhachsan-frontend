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
        return await axios.post('/api/v1/dat-phong-ks-loai1-user', data);
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

export const datPhongKsLoai2 = async (data) => {
    try {
        return await axios.post('/api/v1/dat-phong-ks-loai2-user', data);
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

export const datPhongKsLoai3 = async (form, data) => {
    try {
        return await axios.post('/api/v1/dat-phong-ks-loai3-user', form, {
            params: data
        });
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

export const guiEmailHuyDon = async (data) => {
    try {
        return await axios.get("/api/v1/gui-ma-huy-phong-admin", {
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

export const huyPhongByUser = async (data) => {
    try {
        return await axios.put("/api/v1/huy-phong-by-user", data);
    } catch (error) {
        console.log(
            "🚀 ~ file: adminService.js:534 ~ xoaBaiHat ~ error:",
            error?.response?.data || error
        );
        return error?.response?.data || { errCode: -1, errMessage: "Error" };
    }
};

export const getUserLogin = async (accessToken) => {
    try {
        return await axios.get("/api/get-user-login", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    } catch (error) {
        console.log(
            "🚀 ~ file: adminService.js:534 ~ xoaBaiHat ~ error:",
            error?.response?.data || error
        );
        return error?.response?.data || { errCode: -1, errMessage: "Error" };
    }
};

export const getUserLoginRefesh = async (token) => {
    try {
        return await axios.get("/api/v1/get-user-login-refresh-token", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        console.log(
            "🚀 ~ file: adminService.js:534 ~ xoaBaiHat ~ error:",
            error?.response?.data || error
        );
        return error?.response?.data || { errCode: -1, errMessage: "Error" };
    }
};

export const getListDisableDateDatPhongKs = async (data) => {
    try {
        return await axios.get("/api/v1/get-list-disable-dat-phong-ks", {
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

export const getListDatPhongByIdUser = async (token) => {
    try {
        return await axios.get("/api/v1/get-list-dat-phong-by-id-user", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        console.log(
            "🚀 ~ file: adminService.js:534 ~ xoaBaiHat ~ error:",
            error?.response?.data || error
        );
        return error?.response?.data || { errCode: -1, errMessage: "Error" };
    }
};