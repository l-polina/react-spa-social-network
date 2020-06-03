import React from "react";
import classes from "./Profile.module.css";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <div>Cover</div>
      <ProfileInfo />
      <Posts postsData={props.state.postsData} />
    </div>
  );
};

export default Profile;
