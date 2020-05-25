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

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        <Post
          message={postsData[0].message}
          likesCount={postsData[0].likesCount}
        />
        <Post
          message={postsData[1].message}
          likesCount={postsData[1].likesCount}
        />
        <Post
          message={postsData[2].message}
          likesCount={postsData[2].likesCount}
        />
        <Post
          message={postsData[3].message}
          likesCount={postsData[3].likesCount}
        />
      </div>
    </div>
  );
};

export default Posts;
