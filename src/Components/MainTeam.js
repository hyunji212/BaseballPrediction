import React from "react";
import SideBar from "./sidebar";
import TeamPrediction from "./TeamPrediction";
import AutumnPredicion from "./AutumnPrediction";
import Nav from "./Nav"

function MainTeam() {
  return (
    <div>
      <Nav/>
      <SideBar/>
      <TeamPrediction/>
      <AutumnPredicion/>
    </div>
  );
}

export default MainTeam;