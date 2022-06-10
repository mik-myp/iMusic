import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { menuList, myMusic, createPlayList } from './dataConfig';
import './index.less';

export default function MusicSider() {
  const [myMusicList, setMyMusicList] = useState([]);
  const [createMusicList, setCreateMusicList] = useState([]);
  return (
    <div className="sider">
      <div className="siderList">
        {menuList.map((item) => (
          <NavLink to={item.path} key={item.key}>
            {item.title}
          </NavLink>
        ))}
      </div>
      <div className="siderList">
        <div className="siderListTitle">我的音乐</div>
        {myMusic.map((item) => (
          <NavLink to={item.path} key={item.key}>
            {item.title}
          </NavLink>
        ))}
      </div>
      <div className="siderList">
        <div className="siderListTitle">创建的歌单</div>
        {createPlayList.map((item) => (
          <NavLink to={item.path} key={item.key}>
            {item.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
