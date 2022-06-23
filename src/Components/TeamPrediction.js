import React from "react";
import "../css/MainTeam.css";
import NowRanking from "./NowRanking"
import SideBar from "./sidebar";

function TeamPredicion() {
  return (
    <div className="mainteam">
      <div className="mainteam_sidebar">
        <SideBar/>
      </div>
      <div className="mainteam_title">
         KBO 정규리그 현재 순위&예측 순위
      </div>
      <div className="mainteam_ranking_title" style={{fontWeight: "bold", color:"white", fontSize: "20px", marginLeft: "38.5vw", marginTop: "3.5vh"}}>현재 순위</div>
      <div className="mainteam_ranking">
        <NowRanking/>
      </div>
    </div>
  );
}

export default TeamPredicion;