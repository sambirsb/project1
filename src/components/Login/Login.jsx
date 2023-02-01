import { Field, Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { LoginedRedirect } from "../../hoc/LoginedRedirect";
import { loginMe, getCaptcha } from "../../redux/auth-reducer";
import * as yup from 'yup'
import c from './Login.module.css'
import { useState } from "react";

const validationSchema = yup.object().shape({
    Login: yup.string().required(),
    Password: yup.string().required(),
    Captcha: yup.string(),
})

const LoginForm = React.memo((props) => {

    let [serverHaveError, setHaveServerError] = useState(false)
    let [serverError, setServerError] = useState()
    let [needCaptcha, setNeedCaptcha] = useState(false)
    let [captcha, setCaptcha] = useState()

    return (
        <Formik initialValues={{
            Login: '',
            Password: '',
            RememberMe: false,
            captcha:'',
        }}
            validationSchema={validationSchema}
            onSubmit={ async (values) => {
                let response = await props.loginMe(values)
                let captcha = await props.getCaptcha()
                setCaptcha(captcha.url)
                if(response === 0) {
                    setHaveServerError(false)
                }
                else if(response === 10) {
                    setHaveServerError(true)
                    setServerError('You need to complete captcha')
                    setNeedCaptcha(true)
                }
                else {
                    setHaveServerError(true)
                    setServerError(response)
                }
            }}>
            <Form className={c.form} >
                <div>
                    <Field placeholder="Login" name="Login" />
                </div>
                <div>
                    <Field placeholder="Password" type={'password'} name="Password" />
                </div>
                <div className={c.checkbox}>
                    <Field type={'checkbox'} name='RememberMe' /><span>Remember Me</span>
                </div>
                {needCaptcha && <div className={c.captcha}>
                    <div>
                        <img src={captcha}/>
                    </div>
                    <Field name='Captcha' placeholder='Text from photo'/>
                </div>}
                {serverHaveError && <div className={c.error}>{serverError}</div>}
                <div>
                    <button type='submit'className={c.btn}>Login</button>
                </div>
            </Form>
        </Formik>
    )
})

const Login = React.memo((props) => {

    return <div className={c.container}>
        <h1 className={c.span}>Login</h1>
        <div className={c.form_container}>
            <LoginForm loginMe={props.loginMe} getCaptcha={props.getCaptcha} />
        </div>
    </div>
})


export default compose(
    LoginedRedirect,
    connect(null, { loginMe, getCaptcha })
)(Login)