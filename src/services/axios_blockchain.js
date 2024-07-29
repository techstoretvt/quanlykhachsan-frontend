import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:3002",
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
