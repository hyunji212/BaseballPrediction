import React from "react";
import SideBar from "./sidebar";
import TeamPrediction from "./TeamPrediction";
import AutumnPredicion from "./AutumnPrediction";
import TotalNav from "./TotalNav"

function MainTeam() {
  return (
    <div>
      <TotalNav/>
      <SideBar/>
      <TeamPrediction/>
      <AutumnPredicion/>
    </div>
  );
}

export default MainTeam;