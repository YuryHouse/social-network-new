import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, like: 7, message: 'Hi, how are you?'},
        {id: 2, like: 9, message: 'It\'s my first post'},
    ],
};

it('length of posts array should be incremented', () => {
    let action = addPost('it-kamasutra.com')

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);

})

it('posts message should be correct', () => {
    let action = addPost('it-kamasutra.com')

    let newState = profileReducer(state, action);

    expect(newState.posts[2].message).toBe('it-kamasutra.com');
})

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
})