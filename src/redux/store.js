import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, like: 7, message: 'Hi, how are you?'},
                {id: 2, like: 9, message: "It's my first post"},
            ],
            newPostText: 'Whats up yall?'
        },
    
        
        messagesPage: {
            messages: [
                {id:1, message: 'Hi!'},
                {id:2, message: 'How are you?'},
                {id:3, message: 'Yo!'},
                {id:4, message: 'Wow!'},
                {id:5, message: 'Yeah!'},
            ],
        
            dialogs: [
                {id:1, name: 'Yurasz'},
                {id:2, name: 'Kate'},
                {id:3, name: 'Grase'},
                {id:4, name: 'Vanya'},
                {id:5, name: 'Angela'},
            ],

            newMessageBody: '',
        },
    
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State was changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // _addPost() {
    //     let newPost = {
    //         id: 3,
    //         like: 0,
    //         message: this._state.profilePage.newPostText
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber();
    // },
    // _updateNewPostText(newText) {
        // this._state.profilePage.newPostText = newText;
        // this._callSubscriber();
    // },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}



export default store;
window.store = store;