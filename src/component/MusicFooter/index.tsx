import React from "react";
import MusicInfo from "./component/MusicInfo";
import MusicPlay from "./component/MusicPlay";
import "./index.less";

export default function MusicFooter() {
  return (
    <div className="musicFooter">
      <MusicInfo />
      <MusicPlay />
    </div>
  );
}
