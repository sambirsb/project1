import { Form, Formik, Field } from 'formik'
import React from 'react'
import c from './MessageInput.module.css'
import * as yup from 'yup'
import { connect } from 'react-redux'
import { AddMessage } from '../../../../../redux/direct-reducer'

const validationSchema = yup.object().shape({
    Message: yup.string().required('Requried'),
})

let MessageInput = (props) => {
    return (
        <Formik initialValues={{
            Message: '',
        }}
            validationSchema={validationSchema}
            onSubmit={(value, { resetForm }) => {
                props.AddMessage(value.Message)
                resetForm({
                    Message: '',
                })
            }}>
            {({ errors, touched }) => (
                <Form className={errors.Message && touched.Message ? c.message_input_error : c.message_input}>
                    <Field type={'text'} name={'Message'} placeholder='Type Something...' />
                    <button>Send</button>
                </Form>
            )}
        </Formik>
    );
}

let MessageInputContainer = connect(null, { AddMessage })(MessageInput)

export default MessageInputContainer
