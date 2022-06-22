import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import "../css/SideBar.css";
import icon from "../img/baseball_icon.png"

function SideBar() {
  const Team_Arr = ["KIA 타이거즈","롯데 자이언츠","삼성 라이온즈","두산 베어스","LG 트윈스","SSG LANDERS","한화 이글스","키움 히어로즈","NC 다이노스","kt wiz" ];
  const pathName = useLocation().pathname;
  const nowlocation = Number(pathName.split("/")[2])


  
  return (
    <div className="sidebar">
        <h3>Team</h3>
        {Team_Arr.map((team,idx)=> (
            <NavLink className="sideBarTeam" to={`/Team/${idx}`} key={idx} style={{ textDecoration: 'none'}}>
              <img className="sidebarlogo" src={icon} style={{width:"2vh"}} alt="logo"/>
              {idx===nowlocation ?(
                <div style={{color:"#3C64B1"}}> {team} </div>
              ) : (
                <div> {team} </div>
              )}
              </NavLink>
        ))}
    </div>
  );
}


export default SideBar;


