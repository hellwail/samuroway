import React from 'react';
import css from '../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;
    return (
        <div className={css.dialogz}> 
        {/* //+ '' + css.active */}
            <img className={css.img} src={props.img} alt="ava" />
            <NavLink to={path}>   {props.name}</NavLink>
            
        </div>
    )
}




export default DialogItem;