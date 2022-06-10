import { Avatar } from "antd";
import React, { useState } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import "./index.less";

export default function MusicInfo() {
  const [isHeart, setIsHeart] = useState(false);
  return (
    <div className="musicInfo">
      <Avatar shape="square" size={50} />
      <div>
        <span className="musicInfo_title">
          逆战
          <a className="heart" onClick={() => setIsHeart(!isHeart)}>
            {isHeart ? <HeartFilled /> : <HeartOutlined />}
          </a>
        </span>
        <span className="musicInfo_author">张杰</span>
      </div>
    </div>
  );
}
