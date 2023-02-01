import React from 'react'
import c from './Dialogs.module.css'


let Dialogs = (props) => {

    return (
        <div className={c.dialogs_container}>
            <div className={c.dialogs}>
                {props.DialogElements}
            </div>
        </div>
    );

}

export default Dialogs