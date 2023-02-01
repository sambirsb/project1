import React from 'react'
import Avatar from './Avatar/Avatar';
import c from './NewsFeed.module.css'
import { Form, Formik, Field } from 'formik';
import * as yup from 'yup'

const validationSchema = yup.object().shape({
    NewPost: yup.string().required('Required'),
})

let NewPostForm = (props) => {
    return <Formik initialValues={{
        NewPost: '',
    }}
        validationSchema={validationSchema}
        onSubmit={(value, {resetForm}) => {
            props.AddPost(value.NewPost)
            resetForm({
                NewPost: '',
            })
        }}>
        {({errors, touched}) => (
            <Form>
            <div className={errors.NewPost && touched.NewPost ? c.inp_error : c.inp}>
                <Field type={'text'} name={'NewPost'} placeholder={'Type something...'} />
            </div>
            <div className={c.button}>
                <button className={c.btn}>Post</button>
            </div>
        </Form>
        )}
    </Formik>
}

let NewsFeed = (props) => {

    return (
        <section className={c.feed}>

            <section className={c.span}>
                <a>Your Posts</a>
            </section>

            <section className={c.new_post}>
                <div className={c.text}>
                    <a>What's new?</a>
                </div>

                <div className={c.post_inp}>
                    <Avatar img="https://media.istockphoto.com/id/685132245/pl/zdj%C4%99cie/mature-businessman-smiling-over-white-background.jpg?s=612x612&w=0&k=20&c=_yamBAj-fughqgz8Ed99m7sePXw4dV3sQABBH2Q2xK0=" />
                    <NewPostForm AddPost={props.AddPost}/>
                </div>
            </section>
            {props.posts}
        </section>
    );

}


export default NewsFeed