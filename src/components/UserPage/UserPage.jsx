import React from "react"
import Preloader from "../Preloader/Preloader"
import Avatar from '../Content/NewsFeed/Avatar/Avatar'
import c from './UserPage.module.css'
import EditProfileForm from "./EditProfileForm/EditProfileForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Contacts from "./Contacts/Contacts"


let UserPage = React.memo((props) => {
    return <div className={c.container}>
        <div className={c.bg}>
            {!props.editable
                ? <>
                    <div className="row">
                        <div className={c.img_container}>
                            <Avatar img={props.user.photos.large ? props.user.photos.large : 'https://img.favpng.com/18/18/18/computer-icons-icon-design-avatar-png-favpng-X29r5WhWMXVYvNsYXkR4iBgwf.jpg'} size={'150px'} />
                        </div>
                        <div className={c.texts}>
                            <div>
                                <a className={c.fullName}>{props.user.fullName}</a>{props.isYourProfile && <button onClick={props.onEdit} className={c.edit_button}>Edit</button>}
                            </div>
                            <div>
                                <a className={c.aboutMe}>{props.user.aboutMe}</a>
                            </div>
                        </div>
                        <div className={c.contacts_container}>
                            <Contacts user={props.user} />
                        </div>
                    </div>
                    {props.status
                        ? <div className={c.status}>
                            <span>{props.status}</span>
                        </div>
                        : <div className={c.status}>
                            <span>{props.isYourProfile ? 'You have no status' : 'User have no status'}</span>
                        </div>
                    }
                </>
                : <div className={c.edit_span_div}>
                    <span className={c.edit_span}>Edit your profile</span>
                    <FontAwesomeIcon className={c.x} icon={faXmark} onClick={props.offEdit} />
                    <EditProfileForm
                        {...props}
                        onUpdateProfile={props.onUpdateProfile} />
                </div>
            }

        </div>
    </div>
})

export default UserPage