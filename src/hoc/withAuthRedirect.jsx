import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        isLogined: state.auth.isLogined,
    }
}


export const withAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        if(!props.isLogined) {
            return <Navigate to={'/login'}/>
        }
        return <Component {...props}/>
    }
    return connect(mapStateToProps, {})(RedirectComponent)
}