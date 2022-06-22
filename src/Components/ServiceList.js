import React from 'react'
import { NavLink } from 'react-router-dom'
import "../css/MainPlayer.css";
import era from "../img/ERA.png";
import glove from "../img/GLOVE.png";
import ops from "../img/OPS.png";



function ServiceList(props) {
  const img=[era, glove, ops]
  const id = Number(props.id)

  return (
      <div className='Service_List'>
        <div>
          <img className='Service_Img' src={img[id]}/>
          <NavLink to={`/Player/${props.id}`} key={props.id}> 
          <div>{props.title}<br/>{props.content}</div>
          </NavLink>
        </div>
      </div>
  )
}


export default ServiceList