import React from "react";
import SideBar from "./sidebar";
import TeamPrediction from "./TeamPrediction";
import Nav from "./Nav"

function MainTeam() {
  return (
    <div>
      <Nav/>
      <SideBar/>
      <TeamPrediction/>
    </div>
  );
}

export default MainTeam;