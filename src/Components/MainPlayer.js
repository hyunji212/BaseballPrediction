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
      <ServiceList id="0" title="OPS" content="출루율 + 장타율"></ServiceList>
      <ServiceList id="1" title="Golden Glove" content="선수들의 예상 순위"></ServiceList>
      <ServiceList id="2" title="ERA" content="평균자책점"></ServiceList>
    </div>
  );
}

export default MainPlayer;