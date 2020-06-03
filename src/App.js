import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Other from "./components/Other/Other";
import Footer from "./components/Footer/Footer";
import Messages from "./components/Pages/Messages/Messages";
import { Route, BrowserRouter } from "react-router-dom";
import Friends from "./components/Pages/Friends/Friends";
import Images from "./components/Pages/Images/Images";
import Music from "./components/Pages/Music/Music";
import News from "./components/Pages/News/News";
import Videos from "./components/Pages/Videos/Videos";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/profile"
            render={() => <Profile state={props.state.profilePage} />}
          />
          <Route path="/news" render={() => <News />} />
          <Route
            path="/messages"
            render={() => <Messages state={props.state.messagesPage} />}
          />
          <Route path="/friends" render={() => <Friends />} />
          <Route path="/images" render={() => <Images />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/videos" render={() => <Videos />} />
        </div>
        <Other />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
