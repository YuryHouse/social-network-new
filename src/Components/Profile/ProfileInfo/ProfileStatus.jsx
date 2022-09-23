import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
        // this.state;
        // this.props;
        console.log('componentDidUpdate');
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick = {this.activateEditMode}>{this.props.status || 'no status'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input value={this.state.status}
                        autoFocus={true}
                        onBlur = {this.deactivateEditMode} 
                        onChange={this.onStatusChange}></input>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;