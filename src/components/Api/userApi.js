import * as axios from 'axios'

export const userApi = {
    getUsers(page, pageSize) {
        return axios.get(`https://localhost:5001/users?page=${page}&count=${pageSize}`, {
            withCredentials: true
        }).then(response => response.data);
    },

    followUser(userId) {
        return axios.post(`https://localhost:5001/users/follow/${userId}`, {}, {
            withCredentials: true
        }).then(response => response.data);
    },

    unfollowUser(userId) {
        return axios.post(`https://localhost:5001/users/unfollow/${userId}`, {}, {
            withCredentials: true
        }).then(response => response.data);
    }
}