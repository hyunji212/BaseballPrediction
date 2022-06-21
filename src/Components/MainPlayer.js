import React from "react";
import TotalNav from "./TotalNav";
import ServiceList from "./ServiceList";

function MainPlayer() {
  return (
    <div>
      <TotalNav/>
      <h1>현재 선수 랭킹 확인</h1>
      <h4>선수들의 현재 정규 시즌 순위를 확인합니다.</h4>
      <ServiceList id="0" title="OPS" content="출루율 + 장타율"></ServiceList>
      <ServiceList id="1" title="FPCT" content="야수의 수비 지표"></ServiceList>
      <ServiceList id="2" title="ERA" content="평균자책점"></ServiceList>

    </div>
  );
}

export default MainPlayer;