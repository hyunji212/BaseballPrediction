import React from "react";
import "../css/Home.css";
import TotalNav from "./TotalNav";
import NowRanking from "./NowRanking"
import {NavLink} from "react-router-dom";
import { Button} from 'react-bootstrap';


function Home() {
  return (
    <div style={{overflowX: 'hidden'}}>
     <div className="intro" style={{overflowX: 'hidden'}}>
      <TotalNav/>                   
       <div className="intro_text">
       <h1>현재 <br/> 구단 순위</h1>
       <h4>2022 KBO 정규리그 10개 팀의 승률입니다. <br /> 각 팀을 누르면 팀별 페이지로 이동합니다.</h4>
     <NavLink to="/MainTeam"> <Button className="trial"> Start free trial </Button></NavLink>
     <NowRanking/>
    </div>
    </div>

    <div className="intro2" style={{overflowX: 'hidden'}}>
        <div className="title1"> KBO가 제공하는 서비스 </div>
                       
                       
        </div>
    </div>
  );
}

export default Home;