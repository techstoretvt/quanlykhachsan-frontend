import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    // withCredentials: true
});


instance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        // Xử lý lỗi khi gặp lỗi trong phản hồi
        return Promise.reject(error);
    }
);

export default instance;
