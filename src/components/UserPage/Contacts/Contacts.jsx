import c from '../UserPage.module.css'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"

const Contacts = (props) => {
    return (
        <div className={c.contacts}>
            {props.user.contacts.instagram ? <a target="_blank" href={props.user.contacts.instagram} className={`${c.contact_container} ${c.instagram}`}>
                <FontAwesomeIcon className={c.contact_logo} icon={faInstagram} />
                <div className={c.contact_text}>
                    Instagram
                </div>
            </a>
                : <></>}
            {props.user.contacts.twitter ?
                <a target="_blank" href={props.user.contacts.twitter} className={`${c.contact_container} ${c.twitter}`}>
                    <FontAwesomeIcon className={c.contact_logo} icon={faTwitter} />
                    <div className={c.contact_text}>
                        Twitter
                    </div>
                </a>
                : <></>}
            {props.user.contacts.youtube ?
                <a target="_blank" href={props.user.contacts.youtube} className={`${c.contact_container} ${c.youtube}`}>
                    <FontAwesomeIcon className={c.contact_logo} icon={faYoutube} />
                    <div className={c.contact_text}>
                        Youtube
                    </div>
                </a>
                : <></>}
            {props.user.contacts.github ?
                <a target="_blank" href={props.user.contacts.github} className={`${c.contact_container} ${c.github}`}>
                    <FontAwesomeIcon className={c.contact_logo} icon={faGithub} />
                    <div className={c.contact_text}>
                        GitHub
                    </div>
                </a>
                : <></>}
            {props.user.contacts.facebook ?
                <a target="_blank" href={props.user.contacts.facebook} className={`${c.contact_container} ${c.facebook}`}>
                    <FontAwesomeIcon className={c.contact_logo} icon={faFacebook} />
                    <div className={c.contact_text}>
                        Facebook
                    </div>
                </a>
                : <></>}
            {props.user.contacts.mainLink ?
                <a target="_blank" href={props.user.contacts.mainLink} className={`${c.contact_container} ${c.site}`}>
                    <FontAwesomeIcon className={c.contact_logo} icon={faGlobe} />
                    <div className={c.contact_text}>
                        Site
                    </div>
                </a>
                : <></>}
        </div>
    )
}

export default Contacts