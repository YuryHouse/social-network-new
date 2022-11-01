import React from "react";
import {createField, Input} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";


const ProfileDataForm = ({profile}) => {
    return (
        <form>
            <div>
                <button>Save</button>
            </div>
            <div>
                <div><h2>{createField("Full name","fullName", [], Input)}</h2></div>
            </div>
            <div>
                <div>
                    <b>User ID</b>: {profile.userId}
                </div>
                <div>
                    <b>Looking for a job</b>: {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
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
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);
export default ProfileDataFormReduxForm;