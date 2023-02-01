import React from 'react'
import Avatar from '../../../Content/NewsFeed/Avatar/Avatar';
import c from './Message.module.css'

let Message = (props) => {
    return (
        <div className={c.message}>
            <div>
                <Avatar img="https://media.istockphoto.com/id/685132245/pl/zdj%C4%99cie/mature-businessman-smiling-over-white-background.jpg?s=612x612&w=0&k=20&c=_yamBAj-fughqgz8Ed99m7sePXw4dV3sQABBH2Q2xK0=" />
            </div>
            <div className={c.text}>
                <p>{props.message}</p>
            </div>
        </div>
    );
}

export default Message