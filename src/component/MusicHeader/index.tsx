import { Avatar, Button, Dropdown, Image, Input, Menu, Space } from 'antd';
import React, { useState } from 'react';
import './index.less';
import {
  LeftOutlined,
  RightOutlined,
  AudioFilled,
  SearchOutlined,
} from '@ant-design/icons';
import UserDropDown from './component/UserDropDown';
import { useNavigate } from 'react-router-dom';

export default function MusicHeader() {
  // const navigate = useNavigate();

  return (
    <div className="music_header">
      <div className="music_logo">
        <Image />
      </div>
      <Space className="music_search_area">
        <Button
          shape="circle"
          icon={<LeftOutlined />}
          size="small"
          className="music_circle"
          // onClick={() => navigate(-1)}
        />
        <Button
          shape="circle"
          icon={<RightOutlined />}
          size="small"
          className="music_circle"
          // onClick={() => navigate(1)}
        />
        <Input
          className="music_input"
          prefix={<SearchOutlined />}
          placeholder="大家都在搜....."
        />
        <Button
          shape="circle"
          icon={<AudioFilled />}
          size="small"
          className="music_circle"
        />
      </Space>
      <div className="music_user">
        <UserDropDown />
      </div>
    </div>
  );
}
