import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Other from "./components/Other/Other";
import Footer from "./components/Footer/Footer";
import Messages from "./components/Messages/Messages";
import { Route, BrowserRouter } from "react-router-dom";
import Friends from "./components/Friends/Friends";
import Images from "./components/Images/Images";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Videos from "./components/Videos/Videos";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile" component={Profile} />
          <Route path="/news" component={News} />
          <Route path="/messages" component={Messages} />
          <Route path="/friends" component={Friends} />
          <Route path="/images" component={Images} />
          <Route path="/music" component={Music} />
          <Route path="/videos" component={Videos} />
        </div>
        <Other />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
