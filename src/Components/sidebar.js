import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import "../css/SideBar.css";

function SideBar() {
  const Team_ARR = [
  {id: 0, name:"KIA"},{id:1, name:"롯데"},{id:2, name:"삼성"},
  {id:3, name:"두산"},{id:4, name:"LG"},{id:5, name:"SSG"},{id:6, name:"한화"},
  {id:7, name:"키움"},{id:8, name:"NC"},{id:9, name:"kt"}]
  const pathName = useLocation().pathname;

  return (
    <div className="sidebar">
        {Team_ARR.map((team,idx)=> (
              <NavLink to={`/Team/${team.id}`} key={idx} style={{ textDecoration: 'none'}}>
                {team.name}
              </NavLink>
        ))}
    </div>
  );
}

export default SideBar;


