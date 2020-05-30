import React from "react";
import Post from "./Post/Post";
import classes from "./Posts.module.css";

const Posts = () => {
  let postsData = [
    { id: 1, message: "Hi,how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Hi,how are you?", likesCount: 12 },
    { id: 4, message: "It's my first post", likesCount: 11 },
  ];

  let postsElements = postsData.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>{postsElements}</div>
    </div>
  );
};

export default Posts;
