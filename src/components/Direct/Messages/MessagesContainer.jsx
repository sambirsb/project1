import React from 'react'
import { connect } from 'react-redux';
import Message from './Message/Message';
import Messages from './Messages';


let mapStateToProps = (state) => {
    return {
        messagesElements: state.DirectPage.MessagesData.map(m => <Message key={m.id} message={m.message} />),
        isLogined: state.auth.isLogined,
    }
}


let MessagesContainer = connect(mapStateToProps, {  })(Messages)

export default MessagesContainer

