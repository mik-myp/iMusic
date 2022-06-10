import { Space, Button } from "antd";
import React, { useEffect, useState } from "react";
import { RetweetOutlined } from "@ant-design/icons";
export default function MusicPlay() {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(5);
  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     setStartTime(startTime + 1);
  //     setEndTime(endTime - 1);
  //   }, 1000);
  // }, [startTime]);

  return (
    <div className="musicplay_area">
      <div className="musicPlay">
        <Space></Space>
      </div>
      <div className="musicProgress"></div>
    </div>
  );
}
