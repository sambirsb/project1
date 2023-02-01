import React from 'react'
import { NavLink } from 'react-router-dom';
import Avatar from '../../../Content/NewsFeed/Avatar/Avatar';
import c from './Dialog.module.css'

let Dialog = (props) => {
    return (
        <NavLink to={'/direct/diaolgs/' + props.way} className={c.dialog}>
            <Avatar img={props.avtrimg} />
            <div className={c.name}>
                <span>{props.name}</span>
            </div>
        </NavLink>
    );
}

export default Dialog