import React from 'react'
import { NavLink } from 'react-router-dom'
import "../css/MainPlayer.css";
import era from "../img/ERA.png";
import glove from "../img/GLOVE.png";
import ops from "../img/OPS.png";



function ServiceList(props) {
  const img=[era, glove, ops]
  const id = Number(props.id)
  const Player_Arr = ["OPS","Golden Glove","ERA"]
  const title = ["OPS","Golden Glove","ERA"]
  const content = ["출루율 + 장타율", "선수들의 예상 순위","평균자책점"]

  return (
      <div className='Service_List'>
        <span>
          <NavLink to={`/player/${id}`} key={id} style={{ textDecoration: 'none'}}>
          <img className='Service_Img' src={img[id]}/>
          <div className='Service_Name'>{title[id]}</div>
          <div className='Service_Info'>{content[id]}</div>
          </NavLink>
        </span>
      </div>
  )
}


export default ServiceList