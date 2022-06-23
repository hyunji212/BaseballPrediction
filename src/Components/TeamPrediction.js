import React from "react";
import "../css/MainTeam.css";
import NowRanking from "./NowRanking"

function TeamPredicion() {
  return (
    <div className="mainteam">
      <div className="mainteam_title">
         KBO 정규리그 현재 순위&예측 순위
      </div>
      <div className="mainteam_ranking">
        <p className="mainteam_ranking_title" style={{fontWeight: "bold", color:"white", fontSize: "20px"}}>현재 순위</p>
        <NowRanking/>
        </div>
    </div>
  );
}

export default TeamPredicion;