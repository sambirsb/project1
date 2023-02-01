import { connect } from "react-redux"
import React, { useEffect } from "react"
import Account from "./Account"
import LoginButtton from "./LoginButton"

let AccountContainer = (props) => {

    return <>
        {props.isLogined
            ? <Account {...props} />
            : <LoginButtton />
        }
    </>
}

let mapStateToProps = (state) => {
    return {
        isLogined: state.auth.isLogined,
        user: state.auth.userData,
        photo: state.auth.userData.photos.large,
    }
}

export default connect(mapStateToProps, null)(AccountContainer)