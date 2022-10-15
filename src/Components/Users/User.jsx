import React from "react";
import style from './Users.module.css';
import {NavLink} from 'react-router-dom';
import userPhoto from '../../assets/images/userPhoto.png';


let User = ({
                user,
                followingInProgress,
                unfollow,
                follow,
            }) => {
    return (
        <div>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img alt='' src={user.photos.small !== null ? user.photos.small : userPhoto}
                                     className={style.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button className={style.unfollowButton}
                                          disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => unfollow(user.id)
                                          }>Unfollow</button>

                                : <button className={style.followButton}
                                          disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => follow(user.id)
                                          }>Follow</button>}
                        </div>
                    </span>
            <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
            <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
        </div>)


}

export default User;