import React from "react";
import cap from '../../../assets/cap.jpg'
import css from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return(
        <div>
        <img className={css.cap} src={cap} alt='cap' />
      </div>
    )
}

export default ProfileInfo;