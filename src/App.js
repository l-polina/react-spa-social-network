import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Other from "./components/Other/Other";
import Footer from "./components/Footer/Footer";
import Messages from "./components/Messages/Messages";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Messages />
      </div>
      {/*<Profile />*/}
      <Other />
      <Footer />
    </div>
  );
};

export default App;
