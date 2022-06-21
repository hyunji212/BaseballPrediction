import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import NavItem from "./NavItem";
import '../css/HomeNav.css';
import logo from "../img/ybo_logo.png";
function Nav() {
    
    // URL의 path값 받기
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const pathName = useLocation().pathname;

    const Menu = [
        {name: "Home", path: "/"},
        {name: "구단랭킹", path: "/MainTeam"},
        {name: "선수랭킹", path: "/MainPlayer"},
        {name: "골든글러브", path: "/GoldenGlove"}

    ]
    return (
        <div className="nav">
            <img className="logo" src={logo}/>

            {Menu.map((menu, index) => {
                return (
                    <NavLink to={menu.path} key={index} style={{ textDecoration: 'none'}}>
                        <NavItem 
                            menu={menu}
                            isActive={pathName===menu.path ? true : false}
                        />
                    </NavLink>
                )
            })
            }
        </div>
    )
}

export default Nav