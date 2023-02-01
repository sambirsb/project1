import React from "react"
import { NavLink } from "react-router-dom"
import c from './Account.module.css'

const LoginButtton = (props) => {
    return (
        <div className={c.login_buttons}>
            <NavLink to='/login'className={c.text_buttons}>Login </NavLink>
            <span className={c.slash}>/</span>
            <NavLink to='/signup'className={c.text_buttons}> Signup</NavLink>
        </div>
    )
}

export default LoginButtton