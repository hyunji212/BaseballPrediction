import React from "react";

function HomeRanking(props) {
  const id = Number(props.id);
  const title = [["항목","타율","출루율","장타율","타점","득점","홈런"],
                ["항목","다승","세이브","홀드","삼진","도루","방어율"]] 

  return (
    <div>
      {title[id].map((title, index) => (
          <th>{title}</th>
      ))}
    </div>
  );
}

export default HomeRanking;