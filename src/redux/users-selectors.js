export let giveUsers = (state) => {
    return state.UsersPage.UsersData
}

export let giveTotalUsers = (state) => {
    return state.UsersPage.TotalUsers
}

export let givePageSize = (state) => {
    return state.UsersPage.PageSize
}

export let giveCurrentPage = (state) => {
    return state.UsersPage.CurrentPage
}

export let giveIsFetchingData = (state) => {
    return state.UsersPage.isFetching
}

export let giveDisabledButtons = (state) => {
    return state.UsersPage.disabledButtons
}

export let giveStatus = (state) => {
    return state.UserPage.status
}