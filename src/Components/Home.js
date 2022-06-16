import React from "react";
import "../css/Home.css";
import TotalNav from "./TotalNav";
import ServiceList from "./ServiceList";

function Home() {
  return (
    <div style={{overflowX: 'hidden'}}>
    <div className="intro" style={{overflowX: 'hidden'}}>
        <TotalNav/>
        <div className="intro_text">
            <h1>현재 <br /> 구단 순위</h1>
            <h4>2022 KBO 정규리그 10개 팀의 승률입니다. <br /> 각 팀을 누르면 팀별 페이지로 이동합니다.</h4>
            <button className="trial" type="button">Start free trial</button>
        </div>
    </div>
                
    <div className="intro2" style={{overflowX: 'hidden'}}>
        <div className="intro2_text">
            KBO가 제공하는 서비스
        </div>
        <ul className="service">
        <ServiceList id="1번" title="1번 제목" content="1번 내용"/>
        <ServiceList id="2번" title="2번 제목" content="2번 내용"/>
        <ServiceList id="3번" title="3번 제목" content="3번 내용"/>
        <ServiceList id="4번" title="4번 제목" content="4번 내용"/>
        <ServiceList id="5번" title="5번 제목" content="5번 내용"/>
        <ServiceList id="6번" title="6번 제목" content="6번 내용"/>
        </ul>
    </div>
    </div>
  );
}

export default Home;