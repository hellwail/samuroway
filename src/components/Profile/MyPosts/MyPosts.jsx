import React from "react";
import css from './Myposts.module.css'
import Post from "./Post/Post";



const MyPosts = (props) => {
  let posts = [
    { id: 1, message: 'Hi, how are you?', likesCount: 23 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: 'Are you free today?', likesCount: 17 },
    { id: 4, message: 'Do you want a date?', likesCount: 4 }
  ]

  let postsElements = posts
    .map(p => <Post message={p.message} likesCount={p.likesCount} />);

  return (
    <div className={css.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={css.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;