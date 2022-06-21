import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import "../css/SideBar.css";

function SideBar() {
  const Team_Arr = ["KIA 타이거즈","롯데 자이언츠","삼성 라이온즈","두산 베어스","LG 트윈스","SSG LANDERS","한화 이글스","키움 히어로즈","NC 다이노스","kt wiz" ];

  return (
    <div className="sidebar">
        <h3>Team</h3>
        {Team_Arr.map((team,idx)=> (
              <NavLink to={`/Team/${idx}`} key={idx} style={{ textDecoration: 'none'}}>{team} </NavLink>
        ))}
    </div>
  );
}

export default SideBar;


