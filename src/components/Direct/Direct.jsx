import React from 'react'
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import DialogsContainer from './Dialogs/DialogsContainer';
import c from './Direct.module.css'
import MessagesContainer from './Messages/MessagesContainer';

let Direct = (props) => {

    return (
        <section>
            <span className={c.span}>Direct</span>
            <div className={c.direct}>
                <MessagesContainer />
                <DialogsContainer />
            </div>
        </section>
    );
}



export default compose(
    withAuthRedirect
    )(Direct)