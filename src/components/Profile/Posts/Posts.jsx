import React from "react";
import Post from "./Post/Post";
import classes from "./Posts.module.css";

const Posts = (props) => {
  let postsElements = props.postsData.map((p) => (
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
