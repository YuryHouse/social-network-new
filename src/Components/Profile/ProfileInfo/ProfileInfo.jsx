import React from 'react';
import Preloader from '../../common/preloader/preloader';
import style from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/* <div className = {style.profile_wrap}>
                    <img alt='' src='https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-fresh-natural-product-poster-background-image_146684.jpg' />
            </div> */}
            <div className={style.descriptionBlock}>
                <div className={style.avatar}>
                    <img alt='' src={props.profile.photos.large} />
                </div>
                <div>
                    <div><h2>{props.profile.fullName}</h2></div>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                </div>
                <div>
                    <ul>
                        <li>User ID: {props.profile.userId}</li>
                        <li>Looking for new job: {props.profile.lookingForAJob} </li>
                        <li>Job Description: {props.profile.lookingForAJobDescription}</li>
                    </ul>
                    <h4>Contact info:</h4>
                    <ul>
                        <li>Github: {props.profile.contacts.github}</li>
                        <li>VK: {props.profile.contacts.vk}</li>
                        <li>Facebook: {props.profile.contacts.facebook}</li>
                        <li>Instagram: {props.profile.contacts.instagram}</li>
                        <li>Twitter: {props.profile.contacts.twitter}</li>
                        <li>Website: {props.profile.contacts.website}</li>
                        <li>Youtube: {props.profile.contacts.youtube}</li>
                        <li>Main Link: {props.profile.contacts.mainLink}</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default ProfileInfo;