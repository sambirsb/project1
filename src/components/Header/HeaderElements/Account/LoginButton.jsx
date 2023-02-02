import React from "react"
import { NavLink } from "react-router-dom"
import c from './Account.module.css'

const LoginButtton = (props) => {
    return (
        <div className={c.login_buttons}>
            <NavLink to='/login'className={c.text_buttons}>Login </NavLink>
        </div>
    )
}

export default LoginButtton