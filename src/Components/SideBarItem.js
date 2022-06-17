import React from 'react'
import "../css/SideBar.css";

function SideBarItem(team, isActive) {
    return isActive === true ? (
        <div className="sidebar-item-active">
            <p>{team.name}</p>
        </div>
    ) : (
        <div className="sidebar-item">
            <p>{team.name}</p>
        </div>
    )
}

export default SideBarItem