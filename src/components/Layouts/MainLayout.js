// Children Component
import React from "react"
import Navigation from "./navigationLayout"

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <Navigation/>
      {props.children}
    </React.Fragment>
  )
}

export default MainLayout