import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {Button} from "@mui/material";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className='sidebar'>
      {/*アイコン*/}
    <TwitterIcon className='sidebar_twitterIcon'/>


      {/*オプション */}
      <SidebarOption  text="ホーム" Icon={HomeIcon} link={`/`} active/>
      <SidebarOption  text="話題を検索" Icon={SearchIcon} link={`/topic`}/>
      <SidebarOption  text="通知" Icon={NotificationsNoneIcon } link={'/notice'}/>
      <SidebarOption  text="メッセージ" Icon={MailOutlineIcon} link={`/message`}/>
      <SidebarOption  text="ブックマーク" Icon={BookmarkBorderIcon} link={`/bookmark`} />
      <SidebarOption  text="リスト" Icon={ ListAltIcon} link={`/list`} />
      <SidebarOption  text="プロフィール" Icon={PermIdentityIcon} link={`profile`} />
      <SidebarOption  text="もっと見る" Icon={MoreHorizIcon} link={`about`} />
      
      {/*ボタン */}
      <Button variant="outlined" className="sidebar_tweet" fullWidth>ツイートする</Button>
    </div>
  )
}

export default Sidebar