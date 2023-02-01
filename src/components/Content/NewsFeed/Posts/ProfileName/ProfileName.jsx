import React from "react"
import c from './ProfileName.module.css'

let ProfileName = (props) => {
    return (
        <div className={c.profile}>
            <a href="profile">{props.name}</a>
        </div>
    );
}

export default ProfileName