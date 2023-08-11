import React from "react";
import css from './Myposts.module.css'
import Post from "./Post/Post";



const MyPosts = (props) => {
  
  let postsElements = props.posts
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