import React from "react";
import "./App.css";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Navbar from "./Components/Navbar/Navbar";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Set from "./Components/Set/Set";
import { Route } from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import LoginPage from "./Components/Login/Login";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        {/* <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} /> */}
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Set} />
        <Route
          path="/dialogs"
          render={() => <DialogsContainer />}
        />
        <Route
          path="/profile/:userId?"
          render={() => <ProfileContainer />} />
        <Route 
          path="/users"
          render={() => <UsersContainer />} />
        <Route
          path="/login"
          render={() => <LoginPage />}
        />
      </div>
    </div>
  );
};

export default App;
