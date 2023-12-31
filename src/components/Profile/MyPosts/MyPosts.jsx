import React from "react";
import css from './Myposts.module.css'
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/profileReducer";


const MyPosts = (props) => {

  let postsElements = props.posts
    .map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => { 
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = (updateNewPostActionCreator(text));
    props.dispatch(action);
  }

  return (
    <div className={css.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={css.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;