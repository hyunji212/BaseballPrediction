import React from 'react'

function ServiceList(props) {

  return (
      <div>
        <div>{props.id}</div>
        <div>{props.title}</div>
        <div>{props.content}</div>
      </div>
  )
}

export default ServiceList