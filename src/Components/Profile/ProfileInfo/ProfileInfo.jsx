import React, {useState} from 'react';
import Preloader from '../../common/preloader/preloader';
import style from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/userPhoto.png'
import ProfileDataFormReduxForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={style.descriptionBlock}>
            <div className={style.avatar}>
                <img alt='' src={profile.photos.large || userPhoto} className={style.mainPhoto}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            </div>
            <div>
                <b>{'Status'}</b>: <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <hr/>
                {editMode
                    ? <ProfileDataFormReduxForm profile={profile}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }}/>}
                <ProfileData profile={profile}/>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}


const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <>
            {isOwner && <div onClick={goToEditMode}>
                <button>Edit profile info</button>
            </div>}
            <div>
                <div><h2>{profile.fullName}</h2></div>
            </div>
            <div>
                <div>
                    <b>User ID</b>: {profile.userId}
                </div>
                <div>
                    <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
                </div>
                {profile.lookingForAJob &&
                    <div>
                        <b>Job description</b>: {profile.lookingForAJobDescription}
                    </div>
                }
                <div>
                    <b>About me</b>: {profile.aboutMe}
                </div>
            </div>
        </>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={style.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

export default ProfileInfo;