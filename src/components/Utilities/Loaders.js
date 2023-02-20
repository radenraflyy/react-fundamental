import React from 'react'
import {Spinner} from 'react-bootstrap'

const Loaders = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className='d-flex'>
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
      </div>
    </div>
  )
}

export default Loaders
