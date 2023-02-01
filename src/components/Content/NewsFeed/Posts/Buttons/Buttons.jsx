import React from 'react'
import c from './Buttons.module.css'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let Buttons = () => {
    return (
       <div className={c.buttons}>
        <div className={`${c.btn} ${c.like}`}><FontAwesomeIcon icon={faHeart} /></div>
        <div className={`${c.btn} ${c.comment}`}><FontAwesomeIcon icon={faComment} /></div>
        <div className={`${c.btn} ${c.share}`}><FontAwesomeIcon icon={faPaperPlane} /></div>
        <div className={`${c.btn} ${c.hide}`}><FontAwesomeIcon icon={faEyeSlash} /></div>
       </div>
    );
}

export default Buttons