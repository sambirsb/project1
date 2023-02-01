import React from 'react';
import Post from './Posts/Post';
import { connect } from 'react-redux';
import NewsFeed from './NewsFeed';
import { AddPost } from '../../../redux/feed-reducer';


let mapStateToProps = (state) => {
    return {
        posts: state.ProfilePage.PostsData.map(post => <Post key={post.id} name={post.user} text={post.text} />),
        NewPostText: state.ProfilePage.NewPostText
    }
}


let NewsFeedContainer = connect(mapStateToProps, { AddPost})(NewsFeed)



export default NewsFeedContainer