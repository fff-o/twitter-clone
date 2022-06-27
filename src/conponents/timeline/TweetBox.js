import React, { useState } from 'react'
import {Avatar} from '@mui/material';
import {Button} from '@mui/material'
import "./TweetBox.css";
import {collection, addDoc, serverTimestamp} from  "firebase/firestore"
import db from '../../firebase';
import ikebe from "./Icon.png";

function TweetBox() {
  const [tweetMessage,setTweetMessage] = useState("");
  const [tweetImage,setTweetImage] = useState("");

  const sendTweet = (e) => {
    // firebaseのデータベースにデータを追加する。
    //ツイートボタンを押しても画面をリロードさせないため
    e.preventDefault();

    addDoc(collection(db,"posts") , {
      displayName:"ゲスト",
      userName:"guest_test",
      verified:true,
      text:tweetMessage,
      avatar:"https://i.pinimg.com/550x/ce/6f/b8/ce6fb8b3b8a94f494af6d3cfbcc008dd.jpg",
      image:tweetImage,
      timestamp: serverTimestamp(),
  });
    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox-input'>
          <Avatar />
          <input 
            value={tweetMessage}
            placeholder='今どうしてる？'
            type="text" 
            onChange={(e) => setTweetMessage(e.target.value)}>
          </input>
        </div>
        <input
          value={tweetImage}
          className='tweetBox-imageInput'
          placeholder='画像のURLを入力してください'
          type="text"
          onChange={(e) => setTweetImage(e.target.value)}>
          </input>
          <Button className='tweetBox-tweetButton' type='submit' 
          onClick={sendTweet}>
            ツイートする
          </Button>
      </form>
    </div>
  )
}

export default TweetBox