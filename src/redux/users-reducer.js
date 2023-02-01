import { usersApi } from "../api/api";

let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SET_USERS'
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
let SET_TOTAL_USERS = 'SET_TOTAL_USERS'
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
let DISABLE_BUTTON = 'DISABLE_BUTTON'

let initialState = {
    UsersData: [],
    TotalUsers: 0,
    PageSize: 12,
    CurrentPage: 1,
    isFetching: false,
    disabledButtons: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW: {
            return {
                ...state,
                UsersData: [...state.UsersData.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true,
                            followersAmount: u.followersAmount + 1
                        }
                    }
                    else {
                        return u
                    }
                })]
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                UsersData: [...state.UsersData.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false,
                            followersAmount: u.followersAmount - 1
                        }
                    }
                    else {
                        return u
                    }
                })]
            }

        }

        case SET_USERS: {
            return {
                ...state,
                UsersData: action.usersData,
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                CurrentPage: action.CurrentPage
            }
        }

        case SET_TOTAL_USERS: {
            return {
                ...state,
                TotalUsers: action.TotalUsers
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case DISABLE_BUTTON: {
            return {
                ...state,
                disabledButtons: action.following
                    ? [...state.disabledButtons, action.userId]
                    : state.disabledButtons.filter(id => id !== action.userId)
            }
        }

        default: return state
    }
}

export const follow = (userId) => {
    return { type: FOLLOW, userId: userId }
}

export const unfollow = (userId) => {
    return { type: UNFOLLOW, userId: userId }
}

export const setUsers = (usersData) => {
    return { type: SET_USERS, usersData: usersData }
}

export const selectPage = (page) => {
    return { type: SET_CURRENT_PAGE, CurrentPage: page }
}

export const setTotalUsers = (usersNum) => {
    return { type: SET_TOTAL_USERS, TotalUsers: usersNum }
}

export const isFetching = (isFetching) => {
    return { type: TOGGLE_IS_FETCHING, isFetching: isFetching }
}

export const disableButton = (following, userId) => {
    return { type: DISABLE_BUTTON, following: following, userId: userId }
}

// THUNKS //
// THUNKS //
// THUNKS //

export const getUsers = (CurrentPage, PageSize) => async (dispatch) => {

    dispatch(isFetching(true))
    
    let response = await usersApi.askUsers(CurrentPage, PageSize)
    dispatch(setUsers(response.items))
    dispatch(setTotalUsers(response.totalCount))
    dispatch(isFetching(false))

}

export const changePage = (pageNum, PageSize) => async (dispatch) => {

    dispatch(isFetching(true))
    dispatch(selectPage(pageNum))

    let response = await usersApi.askUsers(pageNum, PageSize)
    dispatch(setUsers(response.items))
    dispatch(isFetching(false))

}

export const followUser = (id) => async (dispatch) => {

    let response = await usersApi.askFollow(id)
    if (response.data.resultCode === 0) {
        dispatch(follow(id))
    }
    else {
        console.error('Follow error')
    }
    dispatch(disableButton(false, id))

}

export const unfollowUser = (id) => async (dispatch) => {

    let response = await usersApi.askUnfollow(id)
    if (response.data.resultCode === 0) {
        dispatch(unfollow(id))
    }
    else {
        console.error('Unfollow error')
    }
    dispatch(disableButton(false, id))

}


export default usersReducer