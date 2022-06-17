import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import "../css/SideBar.css";
import SideBarItem from "./SideBarItem";

function SideBar() {
  const Team_ARR = [{name:"KIA"},{name:"롯데"},{name:"삼성"},{name:"두산"},{name:"LG"},{name:"SSG"},{name:"한화"},{name:"키움"},{name:"NC"},{name:"kt"}]
  const pathName = useLocation().pathname;

  return (
    <div className="sidebar">
        {Team_ARR.map((team,idx)=> (
              <NavLink to={`/Team/${idx}`} key={idx} style={{ textDecoration: 'none'}}>
                <SideBarItem
                    team = {team}
                    isActive={pathName===`/Team/${idx}` ? true : false} 
                />
              </NavLink>
        ))}
    </div>
  );
}

export default SideBar;


