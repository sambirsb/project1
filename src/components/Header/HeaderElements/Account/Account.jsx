import React from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import { logoutMe } from "../../../../redux/auth-reducer"
import Avatar from "../../../Content/NewsFeed/Avatar/Avatar"
import Preloader from '../../../Preloader/Preloader'
import c from './Account.module.css'

const Account = React.memo((props) => {
    return <>
        {props.user
            ? <div className={c.login_container}>
                <NavLink to='/profile/myprofile'>
                    <Avatar img={props.photo ? props.photo : 'https://img.favpng.com/18/18/18/computer-icons-icon-design-avatar-png-favpng-X29r5WhWMXVYvNsYXkR4iBgwf.jpg'} />
                </NavLink>
                <div className={c.text}>
                    <NavLink to='/profile/myprofile'>
                        <span className={c.login}>{props.user.fullName}</span>
                    </NavLink>
                    <span className={c.email}>{props.user.userId}</span>
                    <span onClick={props.logoutMe} className={c.logout}>logout</span>
                </div>
            </div>
            : <Preloader />
        }
    </>
})

export default connect(null, { logoutMe })(Account)