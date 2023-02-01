import { connect } from "react-redux";
import React from "react";
import { follow, selectPage, getUsers, isFetching, unfollow, disableButton, changePage, followUser, unfollowUser } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import { compose } from "redux";
import { giveCurrentPage, giveDisabledButtons, giveIsFetchingData, givePageSize, giveTotalUsers, giveUsers } from "../../redux/users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.CurrentPage, this.props.PageSize)
    }

    onSelectPage = (pageNum) => {
        this.props.changePage(pageNum, this.props.PageSize)
    }

    render() {
        return <>

            {this.props.isFetchingData
                ? <Preloader />
                : <Users {...this.props}
                    onSelectPage={this.onSelectPage} />}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: giveUsers(state),
        TotalUsers: giveTotalUsers(state),
        PageSize: givePageSize(state),
        CurrentPage: giveCurrentPage(state),
        isFetchingData: giveIsFetchingData(state),
        disabledButtons: giveDisabledButtons(state),
    }
}

export default compose(

    connect(mapStateToProps, {
        follow,
        unfollow,
        selectPage,
        isFetching,
        disableButton,
        getUsers,
        changePage,
        followUser,
        unfollowUser,
    })

)(UsersContainer)