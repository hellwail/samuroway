import React from "react";
import css from './Post.module.css'
import ava from '../../../../assets/ava.jpg'


const Post = (props) => {
  return (
    <div className={css.item}>
      <img className={css.ava} src={ava} alt="ava" />
      {props.message}
      <div>
        <span>like {props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post;