import imgd from '../assets/ava.jpg'
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 23 },
                { id: 2, message: "It's my first post", likesCount: 11 },
                { id: 3, message: 'Are you free today?', likesCount: 17 },
                { id: 4, message: 'Do you want a date?', likesCount: 4 }
            ],
            newPostText: 'type smth'
        },
        dialogsPage: {
            newMessageText: '',
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

    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state);    
    }
}

export default store;
window.store = store;