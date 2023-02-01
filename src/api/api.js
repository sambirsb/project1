import axios from "axios";

const instans = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '63172d91-259b-4abb-afeb-981831002ca4'
    }
})


export const loginApi = {
    askAuthMe() {
        return instans.get(`auth/me`).then(response => {
            return response.data
        })
    },
    getCaptcha() {
        return instans.get(`security/get-captcha-url`).then(response => {
            return response.data
        })
    },

    login(email, password, rememberMe, captcha) {
        if(captcha) {
            return instans.post(`auth/login`, {email, password, rememberMe, captcha})
        }
        else {
            return instans.post(`auth/login`, {email, password, rememberMe})
        }
    },

    logout() {
        return instans.delete(`auth/login`)
    },
}

export const usersApi = {
    askUsers(CurrentPage = 1, PageSize = 9) {
        return instans.get(`users?count=${PageSize}&page=${CurrentPage}`).then(response => {
            return response.data
        })
    },

    askFollow(UserId) {
        return instans.post(`follow/${UserId}`)
    },

    askUnfollow (UserId) {
        return instans.delete(`follow/${UserId}`)
    }
}

export const profileApi = {

    updateProfile(FormData) {
        return instans.put(`profile`, FormData).then(response => {
            return response
        })
    },

    updatePhoto(photo) {
        return instans.put(`profile/photo`, {'image': photo}, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            return response
        })
    },

    askStatus(userId) {
        return instans.get(`profile/status/${userId}`).then(response => {
            return response.data
        })
    },

    aksProfile(userId) {
        return instans.get(`profile/${userId}`).then(response => {
            return response.data
        })
    },

    setStatus(status) {
        return instans.put(`profile/status`, {status}).then(response => {
            if(response.resultCode === 0) {
                return response.data
            }
        })
    },
}