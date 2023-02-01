import { loginApi, profileApi } from "../api/api"

let LOGIN = 'LOGIN'
let LOGOUT = 'LOGOUT'
let SET_USER = 'SET_USER'

let initialState = {
    isLogined: null,
    user: null,
    userData: {
        fullname: null,
        aboutMe: null,
        useId: null,
        photos: {
            small:null,
            large: null,
        }
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                user: action.user,
                isLogined: true,
            }
        }

        case LOGOUT: {
            return {
                ...state,
                user: null,
                userData: {
                    photos: {
                        large: null,
                        small: null,
                    },
                },
                isLogined: false,
            }
        }

        case SET_USER: {
            return {
                ...state,
                userData: action.user,
            }
        }

        default: return state
    }
}

export const login = (userData) => {
    return { type: LOGIN, user: userData }
}

export const logout = () => {
    return { type: LOGOUT }
}

export const setUser = (user) => {
    return { type: SET_USER, user: user }
}

export const authMe = () => async (dispatch, getState) => {

    let response = await loginApi.askAuthMe()
    if (response.resultCode === 0) {
        dispatch(login(response))
        let user = await profileApi.aksProfile(response.data.id)
        dispatch(setUser(user))
    }
    else if (response.resultCode === 1) {
        dispatch(logout())
    }

}

export const getCaptcha = () => async (dispatch) => {

    let response = await loginApi.getCaptcha()
    return response

}

export const loginMe = ({ Login, Password, RememberMe = false, Captcha }) => async (dispatch) => {

    let response = await loginApi.login(Login, Password, RememberMe, Captcha)
    if (response.data.resultCode === 0) {
        dispatch(authMe())
        return 0
    }
    else if(response.data.resultCode === 10) {
        if(response.data.messages[0] === "Incorrect Email or Password") {
            return "Incorrect Email or Password"
        }
        else {
            return 10
        }
    }
    else {
        return response.data.messages[0]
    }

}

export const logoutMe = () => async (dispatch) => {

    let response = await loginApi.logout()
    if (response.data.resultCode === 0) {
        dispatch(logout())
    }
    else alert('Wrong')

}

export default authReducer