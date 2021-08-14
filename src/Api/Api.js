import * as axios from 'axios'

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://localhost:5001/'
});

export const userApi = {
    getUsers(page, pageSize) {
        return axiosInstance.get(`users?page=${page}&count=${pageSize}`)
            .then(response => response.data);
    },
    followUser(userId) {
        return axiosInstance.post(`users/follow/${userId}`)
            .then(response => response.data);
    },
    unfollowUser(userId) {
        return axiosInstance.post(`users/unfollow/${userId}`)
            .then(response => response.data);
    },
    getUserProfile(userId) {
        return axiosInstance.get(`users/profile/${userId}`).then(response => response.data);
    }
}
export const authApi = {
    getAuthState() {
        return axiosInstance.get('auth/status').then(response => response.data);
    },
    login(login, password) {
        return axiosInstance.post('auth/login', {
            login: login,
            password: password,
        }).then(response => response.data);
    }
}