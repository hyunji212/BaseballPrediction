import React from 'react'
import { NavLink } from 'react-router-dom'
function ServiceList(props) {

  return (
      <div>
        <NavLink to={`/Player/${props.id}`} key={props.id}> 
        <div>{props.title}</div>
        <div>{props.content}</div>
        </NavLink>
      </div>
  )
}


export default ServiceList