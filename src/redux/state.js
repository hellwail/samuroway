import imgd from '../assets/ava.jpg'
import { renderEntireTree } from '../render';

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 23 },
            { id: 2, message: "It's my first post", likesCount: 11 },
            { id: 3, message: 'Are you free today?', likesCount: 17 },
            { id: 4, message: 'Do you want a date?', likesCount: 4 }
        ]
    },
    dialogsPage: {
        messages: [
            { id: 1, message: 'Hi!' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Are you free today?' },
            { id: 4, message: '1x1?' }
        ],
        dialogs: [
            { id: 1, name: 'Taras', img: imgd },
            { id: 2, name: 'Sveta', img: imgd },
            { id: 3, name: 'Andrey', img: imgd },
            { id: 4, name: 'Lena', img: imgd },
            { id: 5, name: 'Vanya', img: imgd }
        ]

    }

}

 export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
}

export default state;