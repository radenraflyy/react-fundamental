// Parent Component
import React, { useEffect, useRef, useState } from 'react';
import Testing from './components/testing';

const App = () => {
  const [getLimit, setLimit] = useState(1)
  const [getMyName, setMyName] = useState("Dea Afrizal")
  const inputNameRef = useRef(getMyName)

  useEffect(() => {
    setMyName(inputNameRef.current.value)
  }, [getLimit])

  return (
    <>
      <center>
        {getMyName}
        {getLimit}
        <br></br>
        <input ref={inputNameRef} defaultValue={inputNameRef.current}></input>
        <button onClick={() => setLimit((prev) => prev + 1)}>
          Naikkan Limit
        </button> 
        <button onClick={() => setLimit((prev) => prev - 1)}>
          Turunkan Limit
        </button>
      </center>
      <Testing title={"Hello Title"} description={"Ini Testing Description"} />
    </>
  )
}

export default App;
