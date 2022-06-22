import React from "react";
import Nav from "./Nav";
import ServiceList from "./ServiceList";
import "../css/MainPlayer.css";

function MainPlayer() {
  return (
    <div>
      <Nav/>
      <div className="Player_Main_Title">
        <h1 className="Big_Title">현재 선수 랭킹 확인</h1>
        <h4 className="Small_Content">선수들의 현재 정규 시즌 순위를 확인합니다.</h4>
      </div>
      <ServiceList id="0"></ServiceList>
      <ServiceList id="1"></ServiceList>
      <ServiceList id="2"></ServiceList>
    </div>
  );
}

export default MainPlayer;