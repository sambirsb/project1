import React from 'react';
import Dialogs from './Dialogs';
import Dialog from './Dialog/Dialog';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        DialogElements: state.DirectPage.DialogsData.map(dialog => <Dialog key={dialog.id} way={dialog.id} name={dialog.name} avtrimg={dialog.img} />)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer