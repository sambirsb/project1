import React from "react"
import c from './Nickname.module.css'

let Nickname = () => {
    return (
        <div className={c.nickname}>
            <a href="nickname">@elonmusk</a>
        </div>
    );
}

export default Nickname