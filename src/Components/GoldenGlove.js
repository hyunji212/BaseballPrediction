import React from "react";
import GGRanking from "./GGRanking";
import Nav from "./Nav";

function GoldenGlove() {

  return (
    <div>
      <Nav/>
      <p>Golden Glove</p>
      <GGRanking id="0"/>
      <GGRanking id="1"/>
      <GGRanking id="2"/>
    </div>
  );
}

export default GoldenGlove;