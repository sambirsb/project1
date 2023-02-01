import React from 'react'
import Avatar from '../Avatar/Avatar';
import Buttons from './Buttons/Buttons';
import Nickname from './Nickname/Nickname';
import c from './Post.module.css'
import ProfileName from './ProfileName/ProfileName';

let Post = (props) => {
    return (
        <section className={c.post_container}>
        <div className={c.post}>
            <div className={c.top}>
                <Avatar img="https://media.istockphoto.com/id/685132245/pl/zdj%C4%99cie/mature-businessman-smiling-over-white-background.jpg?s=612x612&w=0&k=20&c=_yamBAj-fughqgz8Ed99m7sePXw4dV3sQABBH2Q2xK0=" />
                <div className={c.name}>
                    <ProfileName name={props.name}/>
                    <Nickname />
                </div>
            </div>
            <div className={c.text}><p>{props.text}</p></div>
            <Buttons />
        </div>
        </section>
    );
}

export default Post