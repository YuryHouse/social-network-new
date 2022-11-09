import React from 'react';
import {Field, reduxForm} from 'redux-form';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo((props) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesAmount={p.like}/>)


    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };


    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
});

const addNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} placeholder='How are you?' name='newPostText'
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(addNewPostForm);


export default MyPosts;