import {React} from "react";
import { useLocation } from 'react-router-dom';
import IndTeam from "./IndTeam";
import SideBar from "./sidebar";
import TotalNav from "./TotalNav";

function Team() {
  const Team_Arr = ["KIA","롯데","삼성","두산","LG","SSG","한화","키움","NC","kt" ]
  const location = useLocation();
  const id = location.pathname.split("/")[2]
    
  return (

    <div>
      <TotalNav/>
      <SideBar/>
      <IndTeam team={Team_Arr[id]}></IndTeam>
    </div>
  );
}

export default Team;