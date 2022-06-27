import React from 'react'
import { Link } from 'react-router-dom';
import "./SidebarOption.css";


function SidebarOption({text,Icon,link,active}) {

  return (
    //${active &&} activeが存在するならば、の意
    //sidebarOption--activeというクラスをつけるよ、の意味
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2><Link to={link}>{text}</Link></h2>
    </div>
  )
}

export default SidebarOption