import React from "react";
import "./App.css";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Set from "./Components/Set/Set";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
import LoginPage from "./Components/Login/Login";
import {connect, Provider} from "react-redux";
import withRouter from "react-router-dom/es/withRouter";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/common/preloader/preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import Switch from "react-router-dom/es/Switch";
import Redirect from "react-router-dom/es/Redirect";

const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"));

// const UsersContainer = React.lazy(() => import("./Components/Users/UsersContainer"));

class App extends React.Component {
    catchAllUnhandledErrors = (reason, promise) => {
        alert("Some error occurred");
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route
                            exact path="/social-network-new"
                            render={() => <Redirect to={"/profile"}/>}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Set}/>
                        <Route
                            path="/dialogs"
                            render={withSuspense(DialogsContainer)}
                        />
                        <Route
                            path="/profile/:userId?"
                            render={withSuspense(ProfileContainer)}/>
                        <Route
                            path="/users"
                            render={() => <UsersContainer/>}/>
                        <Route
                            path="/login"
                            render={() => <LoginPage/>}
                        />
                        <Route path="*"
                               render={() => <div>{'404 Page not found'}</div>}
                        />
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

export const SocialNetworkApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}