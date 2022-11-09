import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (      
        <div className={style.item}>
            <img src="https://static.thenounproject.com/png/448730-200.png" alt="" />
            { props.message }
            <div>
                <span>Like</span> { props.likesAmount }
            </div>
        </div>
    )
}

export default Post;