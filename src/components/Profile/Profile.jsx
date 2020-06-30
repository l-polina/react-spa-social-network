import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
  return (
    <div>
      <div>Cover</div>
      <ProfileInfo />
      <PostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
