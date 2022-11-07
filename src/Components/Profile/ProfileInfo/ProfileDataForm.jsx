import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";


const ProfileDataForm = ({handleSubmit, profile}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
            </div>
            <div>
                <div><h2>{createField("Full name", "fullName", [], Input)}</h2></div>
            </div>
            <div>
                <div>
                    <b>User ID</b>: {profile.userId}
                </div>
                <div>
                    <b>Looking for a job</b>: {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
                </div>
                <div>
                    <b>My professional skills</b>:
                    {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
                </div>

                <div>
                    <b>About me</b>:
                    {createField('About me', 'aboutMe', [], Textarea)}
                </div>
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);
export default ProfileDataFormReduxForm;