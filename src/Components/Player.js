import React from "react";
import { useLocation } from 'react-router-dom';
import Nav from "./Nav";
import IndPlayer from "./IndPlayer";

function Player() {
  const Player_Arr = ["OPS","Golden Glove","ERA"]
  const location = useLocation();
  const id = location.pathname.split("/")[2]
    
  return (
    <div>
      <Nav/>
      <IndPlayer player={Player_Arr[id]}></IndPlayer>
    </div>
  );
}

export default Player