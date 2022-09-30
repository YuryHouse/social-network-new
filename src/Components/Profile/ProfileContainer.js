import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux'; 
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRadirect';
import { compose } from 'redux';
import withRouter from "react-router-dom/es/withRouter";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
           userId = this.props.authUserId;
           if(!userId) {
               this.props.history.push('/login');
           }
        }
        this.props.getUserProfile(userId);
        // setTimeout(() => {
        this.props.getStatus(userId);
        // }, 1000) 
        
    }
    render() {
        
        return ( 
            <Profile {...this.props} profile={this.props.profile} 
            status = {this.props.status}  updateStatus = {this.props.updateStatus} />
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
})


export default compose(
    connect (mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
) (ProfileContainer)