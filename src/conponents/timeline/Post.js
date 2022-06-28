import React, { forwardRef, useState } from "react";
import { Avatar } from "@mui/material";
import { VerifiedUser } from "@mui/icons-material";
import { ChatBubbleOutline } from "@mui/icons-material";
import { Repeat } from "@mui/icons-material";
import { FavoriteBorder } from "@mui/icons-material";
import { PublishOutlined } from "@mui/icons-material";
import "./Post.css";

const Post = forwardRef(
  ({ displayName, userName, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post-avater">
          <Avatar src={avatar} />
        </div>
        <div className="post-body">
          <div className="post-header">
            <div className="post-header-text">
              <h3>
                {displayName}
                <span className="post-header-spechial">
                  <VerifiedUser className="post-badge" />@{userName}
                </span>
              </h3>
            </div>
            <div className="post-header-discription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          {console.log(image)}
          <div className="post-footer">
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <PublishOutlined fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
