import React from 'react'
import MessageInput from './Message/MessageInput/MessageInput';
import c from './Messages.module.css'


let Messages = (props) => {

    return (
        <div className={c.all_container}>
            <div className={c.messages_container}>
                <div className={c.messages}>
                    {props.messagesElements}
                </div>
                <MessageInput store={props.store} AddMessage={props.AddMessage} />
            </div>
        </div >
    );
}

export default Messages

