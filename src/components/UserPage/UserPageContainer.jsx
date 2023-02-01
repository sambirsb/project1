import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import withRouter from "../../hoc/withRouter";
import { getProfile, setUserData, getStatus, setStatus, updateProfile, updatePhoto } from "../../redux/user-page-reducer";
import { follow, unfollow } from "../../redux/users-reducer";
import { giveStatus } from "../../redux/users-selectors";
import Preloader from "../Preloader/Preloader";
import UserPage from "./UserPage";


let UserPageContainer = React.memo((props) => {
    let [statusText, setStatus] = useState(props.status)
    let [editable, setMode] = useState(false)
    let [isYourProfile, setProfile] = useState(true)

    let onEdit = () => {
        setMode(true)
    }

    let offEdit = () => {
        setMode(false)
    }

    let updateStatusText = (statusText) => {
        setStatus(statusText)
    }

    let onSetStatus = () => {
        if (statusText.length <= 4) {
            alert('Статус повивен бути більшим за 5 символів')
        }
        else if (statusText.length >= 300) {
            alert('Статус повивен бути меншим за 300 символів')
        }
        else {
            props.setStatus(statusText)
        }
    }

    let onUpdateProfile = async (FormData) => {
        let response = props.updateProfile(FormData)
        offEdit()
        return response
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    useEffect(() => {
        if (props.params.userId === 'myprofile') {
            props.getProfile(props.myprofile)
            props.getStatus(props.myprofile)
            setProfile(true)
        }
        else {
            props.getProfile(props.params.userId)
            props.getStatus(props.params.userId)
            setProfile(false)
        }
    }, [props.params.userId])


    return <>
        {props.isLoading
            ? <Preloader />
            : <UserPage user={props.user}
                editable={editable}
                onEdit={onEdit}
                offEdit={offEdit}
                isYourProfile={isYourProfile}
                status={props.status}
                updateStatusText={updateStatusText}
                onSetStatus={onSetStatus}
                statusText={statusText}
                isLoading={props.isLoading}
                follow={props.follow}
                unfollow={props.follow}
                onUpdateProfile={onUpdateProfile}
                updatePhoto={props.updatePhoto} />}
    </>
})

let mapStateToProps = (state) => {
    return {
        user: state.UserPage.UserData,
        myprofile: state.auth.user.data.id,
        status: giveStatus(state),
        isLoading: state.UserPage.isLoading,
    }
}

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, { setUserData, getProfile, getStatus, setStatus, follow, unfollow, updateProfile, updatePhoto })
)(UserPageContainer)
