// Children Component
import React from 'react'

const Testing = (props) => {
  const { title, description } = props
  // console.log(props);
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <p>{description}</p>
    </React.Fragment>
  )
}
export default Testing