import React from 'react'

function ServiceList(props) {

  return (
      <li>
        <div>{props.id}</div>
        <div>{props.title}</div>
        <div>{props.content}</div>
      </li>
  )
}

export default ServiceList