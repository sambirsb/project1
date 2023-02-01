import { profileApi } from "../api/api"
import { authMe } from "./auth-reducer"

let SET_USER_DATA = 'SET_USER_DATA'
let SET_STATUS = 'SET_STATUS'
let ISLOADING = 'ISLOADING'
let UPDATE_PHOTO = 'UPDATE_PHOTO'

let initialState = {
    UserData: {
        photos: {},
    },
    status: null,
    isLoading: true,
}

const UserPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                UserData: action.UserData,
            }
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        case ISLOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case UPDATE_PHOTO: {
            return {
                ...state,
                UserData: { ...state.UserData, photos: action.photos }
            }
        }

        default: return state
    }

}


// ACTION CREATORS //

export const setStatusData = (status) => {
    return { type: SET_STATUS, status: status }
}

export const setUserData = (UserData) => {
    return { type: SET_USER_DATA, UserData: UserData }
}

export const setIsLoading = (value) => {
    return { type: ISLOADING, isLoading: value }
}

const updatePhotolocal = (photos) => {
    return { type: UPDATE_PHOTO, photos }
}

// THUNKS //
// THUNKS //
// THUNKS //

export const updateProfile = ({ FullName, AboutMe, LookingForAJob, LookingForAJobDescription, contacts= {
                                                                                                            facebook:null,
                                                                                                            website:null,
                                                                                                            twitter:null,
                                                                                                            instagram:null,
                                                                                                            youtube:null,
                                                                                                            github:null,
                                                                                                            mainLink:null,
                                                                                                        }
}) => async (dispatch, getState) => {

    let fullNameAudit = () => {
        if(FullName) {
            return FullName
        }
        else return getState().UserPage.UserData.fullName
    }

    let aboutMeAudit = () => {
        if(AboutMe) {
            return AboutMe
        }
        else {
            return getState().UserPage.UserData.aboutMe
        } 
    }

    let lookingForAJobDescriptionAudit = () => {
        if(LookingForAJobDescription) {
            return LookingForAJobDescription
        }
        else return getState().UserPage.UserData.lookingForAJobDescription
    }

    let fullName = fullNameAudit()
    let aboutMe = aboutMeAudit()
    let lookingForAJobDescription = lookingForAJobDescriptionAudit()
    let lookingForAJob = LookingForAJob

    let response = await profileApi.updateProfile({ fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts })
    if (response.data.resultCode === 0) {
        dispatch(setUserData({ fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts, photos: getState().UserPage.UserData.photos }))
        dispatch(authMe())
        return 0
    }
    else {
        return response.data.messages[0]
    }
}

export const updatePhoto = (photo) => async (dispatch) => {

    let response = await profileApi.updatePhoto(photo)
    if (response.data.resultCode === 0) {
        dispatch(updatePhotolocal(response.data.data.photos))
        dispatch(authMe())
    }
    else {
        console.log(response)
        return alert('Something Wrong')
    }

}

export const getProfile = (userId) => async (dispatch) => {

    dispatch(setIsLoading(true))
    let response = await profileApi.aksProfile(userId)
    dispatch(setUserData(response))
    dispatch(setIsLoading(false))

}

export const getStatus = (userId) => async (dispatch) => {

    let response = await profileApi.askStatus(userId)
    dispatch(setStatusData(response))

}

export const setStatus = (status) => async (dispatch) => {

    dispatch(setIsLoading(true))
    await profileApi.setStatus(status)
    dispatch(setStatusData(status))
    dispatch(setIsLoading(false))

}


export default UserPageReducer