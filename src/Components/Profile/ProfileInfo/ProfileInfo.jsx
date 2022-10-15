import React from 'react';
import Preloader from '../../common/preloader/preloader';
import style from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={style.descriptionBlock}>
                <div className={style.avatar}>
                    <img alt='' src={profile.photos.large} />
                </div>
                <div>
                    <div><h2>{profile.fullName}</h2></div>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                </div>
                <div>
                    <ul>
                        <li>User ID: {profile.userId}</li>
                        <li>Looking for new job: {profile.lookingForAJob} </li>
                        <li>Job Description: {profile.lookingForAJobDescription}</li>
                    </ul>
                    <h4>Contact info:</h4>
                    <ul>
                        <li>Github: {profile.contacts.github}</li>
                        <li>VK: {profile.contacts.vk}</li>
                        <li>Facebook: {profile.contacts.facebook}</li>
                        <li>Instagram: {profile.contacts.instagram}</li>
                        <li>Twitter: {profile.contacts.twitter}</li>
                        <li>Website: {profile.contacts.website}</li>
                        <li>Youtube: {profile.contacts.youtube}</li>
                        <li>Main Link: {profile.contacts.mainLink}</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default ProfileInfo;