const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    ]
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };    
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            };
        default:
            return state;
    }
}


export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

// export const updateNewMessageBody = (body) => 
// ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default messagesReducer;