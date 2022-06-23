import React from "react";

function IndTeam(props) {

  const Team_Arr = ["KIA","롯데","삼성","두산","LG","SSG","한화","키움","NC","kt" ]
  function wordcloud(){
    const imgURL = require("../img/WC/" + Team_Arr[Number(props.id)] + ".png")
    return(
      <>
      <img src={imgURL} alt={Team_Arr[Number(props.id)]}/>
      </>
    );
  }
  return (
    <div>
      {props.team}
      <div>역대 우승 횟수 <br/> 8 </div>
      <div>현재 순위 <br/> 1 </div>
      <div>시즌 최고 순위 <br/> 1 </div>
      <div>시즌 최하 순위 <br/> 1 </div>
      {wordcloud()}

    </div>
  );
}

export default IndTeam;