import React from 'react'
import c from './Avatar.module.css'

let Avatar = (props) => {
    return (
        <div className={c.avatar}>
            <img alt='avatar' src={props.img} height={props.size ? props.size : '50px'} width={props.size ? props.size : '50px'} />
        </div>
    );
}

export default Avatar