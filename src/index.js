import App from './App';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import { addPost, sendMessage, updateNewMessageText, updateNewPostText } from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));
let reRenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>
    );
}



reRenderEntireTree(store.getState());
store.subscribe(reRenderEntireTree);
