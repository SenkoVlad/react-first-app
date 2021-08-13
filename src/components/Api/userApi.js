import * as axios from 'axios'

const instance = axios.create({
    withCredentials : true,
    baseURL : 'https://localhost:5001/'
});

export const userApi = {
    getUsers(page, pageSize) {
        return instance.get(`users?page=${page}&count=${pageSize}`)
                    .then(response => response.data);
    },
    followUser(userId) {
        return instance.post(`users/follow/${userId}`)
                    .then(response => response.data);
    },
    unfollowUser(userId) {
        return instance.post(`users/unfollow/${userId}`)
                    .then(response => response.data);
    }
}