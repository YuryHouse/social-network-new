import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {
    let state = props.messagesPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);



    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>

    )
}

const maxLength50 = maxLengthCreator(50);

const  AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                placeholder='Enter your message'
                component={Textarea}
                validate={[required, maxLength50]}
                name='newMessageBody' />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'}) (AddMessageForm);


export default Dialogs;