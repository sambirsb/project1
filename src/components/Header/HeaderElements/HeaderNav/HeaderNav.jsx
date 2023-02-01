import React from 'react'
import { NavLink } from 'react-router-dom';
import c from './HeaderNav.module.css'

let HeaderNav = () => {
    return (
        <div className={c.header_nav}>
            <div className={c.nav_item}>
                <NavLink to='/' className={c.nav_text}>feed</NavLink>
                </div>
                <div className={c.nav_item}>
                <NavLink to='/direct' className={c.nav_text}>direct</NavLink>
                </div>
                <div className={c.nav_item}>
                <NavLink to='/users' className={c.nav_text}>users</NavLink>
                </div>
                <div className={c.nav_item}>
                <NavLink to='/profile/myprofile' className={c.nav_text}>profile</NavLink>
                </div>
        </div>
    );
}

export default HeaderNav