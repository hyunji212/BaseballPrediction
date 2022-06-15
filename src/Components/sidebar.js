import React from "react";
import {NavLink} from "react-router-dom";

function SideBar() {
const Team_ARR = ["KIA","롯데","삼성","두산","LG","SSG","한화","키움","NC","kt"]

  return (
    <div>
        {Team_ARR.map((team,idx)=> (
            <NavLink to={`/Team/${idx}`}>{team}<br/></NavLink>

        ))}
    </div>
  );
}

export default SideBar;


