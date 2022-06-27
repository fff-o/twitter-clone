import React from 'react'
import {Search} from '@mui/icons-material'
import { TwitterTimelineEmbed, TwitterShareButton,TwitterTweetEmbed} from 'react-twitter-embed';
import "./Widgets.css";

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets-input'>
        <Search className='widget-searchIcon'/>
        <input placeholder='キーワード検索' type="text" />
      </div>
      <div className='widgets-container'>
        <h2>いまどうしてる？</h2>
        {/* ライブラリを追加、追記 */}
        <TwitterTweetEmbed tweetId={'1355326490720698376'}/>
        <TwitterTimelineEmbed 
          sourceType='profile'
          screenName='nntnarabot'
          options={{height:400}}
        />
        <TwitterShareButton 
          url={'https://twitter.com/nntnarabot'}
          options={{text: "私は奈良県民です。" , via: "nntnarabot"}}
        />
      </div>
    </div>
  )
}

export default Widgets