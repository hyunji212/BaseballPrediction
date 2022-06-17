import React from "react";
import "../css/Home.css";
import TotalNav from "./TotalNav";
import NowRanking from "./NowRanking"
import {NavLink} from "react-router-dom";
import { Button} from 'react-bootstrap';
import ServiceList from "./ServiceList"


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
<<<<<<< HEAD
        <div className="title1"> KBO가 제공하는 서비스 </div>
                       
                       
        </div>
=======
      <div className="title1">
        KBO가 제공하는 서비스
      </div>
      <div className="service1">
         <ServiceList id="1" title="1제목" content="1내용"/>
         <ServiceList id="2" title="2제목" content="2내용"/> 
         <ServiceList id="3" title="3제목" content="3내용"/> 
         <ServiceList id="4" title="4제목" content="4내용"/> 
         <ServiceList id="5" title="5제목" content="5내용"/> 
         <ServiceList id="6" title="6제목" content="6내용"/>                    
      </div>
    </div>
>>>>>>> 86ec33abe5a4951d4cdc1f51eb499d6bbf8dd15c
    </div>
  );
}

export default Home;