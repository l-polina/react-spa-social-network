import React from "react";
import Post from "./Post/Post";
import classes from "./Posts.module.css";

const Posts = () => {
  return (
    <div>
      My posts
      <div>New posts</div>
      <Post message="Hi,how are you?" />
      <Post message="It's my first post" />
    </div>
  );
};

export default Posts;
