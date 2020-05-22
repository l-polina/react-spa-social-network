import React from "react";
import classes from "./Profile.module.css";
import Posts from "./Posts/Posts";

const Profile = () => {
  return (
    <div>
      <div>Cover</div>
      <div>ava+description</div>
      <Posts />
    </div>
  );
};

export default Profile;
