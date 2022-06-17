import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import "../css/SideBar.css";

function SideBar() {
  const Team_Arr = ["KIA","롯데","삼성","두산","LG","SSG","한화","키움","NC","kt" ]

  return (
    <div className="sidebar">
        {Team_ARR.map((team,idx)=> (
              <NavLink to={`/Team/${idx}`} key={idx} style={{ textDecoration: 'none'}}>
                {team.name}
              </NavLink>
        ))}
    </div>
  );
}

export default SideBar;


