import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AddPost, TextUpdate} from './redux/state'


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {

    

    root.render(
    <React.StrictMode>
        <App state={state} AddPost={AddPost} UpdatePost={TextUpdate}/>
    </React.StrictMode>
    );
}

export default rerenderEntireTree
