import React from "react";
import "./App.css";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Navbar from "./Components/Navbar/Navbar";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Set from "./Components/Set/Set";
import {Route} from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import LoginPage from "./Components/Login/Login";
import {connect} from "react-redux";
import withRouter from "react-router-dom/es/withRouter";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/common/preloader/preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Set}/>
                    <Route
                        path="/dialogs"
                        render={() => <DialogsContainer/>}
                    />
                    <Route
                        path="/profile/:userId?"
                        render={() => <ProfileContainer/>}/>
                    <Route
                        path="/users"
                        render={() => <UsersContainer/>}/>
                    <Route
                        path="/login"
                        render={() => <LoginPage/>}
                    />
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) =>({
    initialized: state.app.initialized
})

export default compose(withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
