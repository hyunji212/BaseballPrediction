import React from "react";
import "../css/Home.css";
import TotalNav from "./TotalNav";

function Home() {
  return (
    <div style={{overflowX: 'hidden'}}>
    <div className="intro" style={{overflowX: 'hidden'}}>
      
    <TotalNav/>
      
      <div className="intro_text">
            <h1>현재 <br /> 구단 순위</h1>
            <h4>2022 KBO 정규리그 10개 팀의 승률입니다. <br /> 각 팀을 누르면 팀별 페이지로 이동합니다.</h4>
            <button className="trial" type="button" onclick="alert('Hello World!')">Start free trial</button>
      </div>
    
    </div>
                
    <div className="intro2" style={{overflowX: 'hidden'}}>
      <div className="title1">
          KBO가 제공하는 서비스
      </div>
      <ul className="service1">
          <li>
              <div className="icon1"><img src="" width={40} height={40} alt=""/></div>
              <div className="subtitle1">팀별 순위 예측</div>
              <div className="content1">팀별 순위 예측에 관한 설명</div>
          </li>
          <li>
              <div className="icon2"><img src="" width={40} height={40} alt=""/></div>
              <div className="subtitle2">선수별 랭킹</div>
              <div className="content2">선수별 랭킹에 관한 설명</div>
          </li>
          <li>
              <div className="icon3"><img src="" width={40} height={40} alt=""/></div>
              <div className="subtitle3">선수별 순위 예측</div>
              <div className="content3">선수별 순위 예측에 관한 설명</div>
          </li>
      </ul>
      <ul className="service2">
          <li>
              <div className="icon4"><img src="" width={40} height={40} alt=""/></div>
              <div className="subtitle4">검색</div>
              <div className="content4">검색에 관한 설명</div>
          </li>
          <li>
              <div className="icon5"><img src="" width={40} height={40} alt=""/></div>
              <div className="subtitle5">우리팀 응원하기</div>
              <div className="content5">우리팀 응원하기에 관한 설명</div>
          </li>
          <li>
              <div className="icon6"><img src="" width={40} height={40} alt=""/></div>
              <div className="subtitle6">최근 경기 기록</div>
              <div className="content6">최근 경기 기록에 관한 설명</div>
          </li>
      </ul>
    </div>
    </div>
  );
}

export default Home;