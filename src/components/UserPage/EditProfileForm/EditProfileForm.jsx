import React, { useState } from "react";
import c from './EditForm.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import Avatar from '../../Content/NewsFeed/Avatar/Avatar'
import { Field, Form, Formik } from "formik";

let EditForm = React.memo((props) => {

    let [serverHaveError, setHaveServerError] = useState()
    let [serverError, setServerError] = useState()

    return <Formik initialValues={{
        FullName:props.user.fullName,
        AboutMe:props.user.aboutMe,
        LookingForAJobDescription:props.user.lookingForAJobDescription,
        LookingForAJob: props.user.lookingForAJob,
        contacts: {
            instagram: props.user.contacts.instagram,
            twitter: props.user.contacts.twitter,
            youtube: props.user.contacts.youtube,
            github: props.user.contacts.github,
            facebook: props.user.contacts.facebook,
            mainLink: props.user.contacts.mainLink,
        }
    }}
    onSubmit={async (values) => {
        let response = await props.onUpdateProfile(values)
        if(response === 0) {
            setHaveServerError(false)
        }
        else {
            setHaveServerError(true)
            setServerError(response)
        }
    }}>
        <Form className={c.form}>
            <div className={c.images}>
                <div className={c.img_container}>
                    <Avatar img={props.user.photos.large !== null
                        ? props.user.photos.large
                        : 'https://img.favpng.com/18/18/18/computer-icons-icon-design-avatar-png-favpng-X29r5WhWMXVYvNsYXkR4iBgwf.jpg'}
                        size={'150px'} />
                </div>
                <div className={c.photo_text}>Photo saving automaticly</div>
                <label className={c.clip_container}>
                    <FontAwesomeIcon className={c.clip} icon={faPaperclip} />
                    <input className={c.img} type={'file'} onChange={(e) => {
                        props.updatePhoto(e.target.files[0])
                    }} />
                </label>

            </div>
            <div className={c.texts}>
                <div>
                    <Field type={"text"} name={'FullName'} placeholder={props.user.fullName} />
                </div>
                <div>
                    <Field type={"text"} name={'AboutMe'} placeholder={props.user.aboutMe} />
                </div>
                <div>
                    <Field type={"text"} name={'LookingForAJobDescription'} placeholder={'Your skills'} />
                </div>
                <div className={c.checkbox}>
                    <Field type={'checkbox'} name={'LookingForAJob'} />
                    <span>Yes, I`m looking for job</span>
                </div>
                <div>
                    <span>Contacts:</span>
                </div>
                <div className={c.contacts}>
                    <div className={c.edit_contact}>
                        <Field type={"text"} name={'contacts.instagram'} placeholder={'Add your Instagram'} />
                    </div>
                    <div className={c.edit_contact}>
                        <Field type={"text"} name={'contacts.twitter'} placeholder={'Add your Twitter'} />
                    </div>
                    <div className={c.edit_contact}>
                        <Field type={"text"} name={'contacts.youtube'} placeholder={'Add your Youtube'} />
                    </div>
                    <div className={c.edit_contact}>
                        <Field type={"text"} name={'contacts.github'} placeholder={'Add your Github'} />
                    </div>
                    <div className={c.edit_contact}>
                        <Field type={"text"} name={'contacts.facebook'} placeholder={'Add your Facebook'} />
                    </div>
                    <div className={c.edit_contact}>
                        <Field type={"text"} name={'contacts.mainLink'} placeholder={'Add your site'} />
                    </div>
                </div>
                {serverHaveError && <div className={c.error}>{serverError}</div>}
                <button className={c.btn}>Save</button>
            </div>
        </Form>
    </Formik>
})

export default EditForm