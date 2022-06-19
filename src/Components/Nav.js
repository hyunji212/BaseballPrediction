import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import NavItem from "./NavItem";
import '../css/HomeNav.css';

function Nav() {
    
    // URL의 path값 받기
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const pathName = useLocation().pathname;

    const Menu = [
        {name: "Home", path: "/"},
        {name: "Team", path: "/MainTeam"},
        {name: "Player", path: "/MainPlayer"},
        {name: "Live", path: "/Live"}

    ]
    return (
        <div className="nav">
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