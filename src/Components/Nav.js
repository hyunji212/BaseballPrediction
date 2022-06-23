import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import '../css/HomeNav.css';
import logo from "../img/ybo_logo.png";
import NavItem from "./NavItem";
function Nav() {
    
    const pathName = useLocation().pathname;

    // URL의 path값 받기
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const Menu = [
        {name: "Home", path: "/"},
        {name: "구단랭킹", path: "/MainTeam"},
        {name: "선수랭킹", path: "/MainPlayer"},
        {name: "골든글러브", path: "/GoldenGlove"}

    ]
    return (
        <div className = "navheader">
        <div className="navlogo">
                <img className="nav_logo" src={logo} alt="logo"/>
                <span className="navcomment">YBO</span>
        </div>
        <div className="nav">
            {Menu.map((menu, index) => {
                return (
                    <NavLink to={menu.path} key={index} className="navbutton">
                    <NavItem    menu={menu} isActive={pathName===menu.path ? true : false}/>
                     </NavLink>
                )
            })
            }
        </div>
        </div>
    )
}

export default Nav