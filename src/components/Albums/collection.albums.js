// Component untuk GET API(Children)
import React, { useEffect, useState } from "react"
import Axios from "axios"
import { ButtonGroup, Carousel } from 'react-bootstrap'
import Loaders from '../Utiliti/Loaders'



const Collection = () => {
  const [datas, setDatas] = useState([])
  const [limit, setLimit] = useState(3)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // console.log(process.env.REACT_APP_BASEURL)
    let isCancelled = false
    if (isCancelled === false) {
      setLoading(true)
      Axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`,
      }).then((result) => setDatas(result.data)).catch((err) => console.log(err)).finally(() => setLoading(false))
    }
    // Clean Up render
    return () => {isCancelled = true}
  }, [limit])
  // console.log(datas)

  const handleLimit = (option) => {
    option === "+" ? setLimit((prev) => prev + 1) : setLimit((prev) => prev - 1)
  }

  if (loading) return <Loaders/>
  

  return (
    <React.Fragment> 
      <Carousel>
        <h3>{limit} collection</h3>
        {/*Mapping Data Start */}
        {datas.map((data, i) => {
          // console.table(data)
          return (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={data.url}
                alt="First slide"
                width={450}
                height={450}
              />
              <Carousel.Caption>
                <h3>{data.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
        {/* Mapping Data End */}
      </Carousel>
      <ButtonGroup className="d-flex justify-content-center align-items-center mt-2">
        <button onClick={() => handleLimit("+")} className="btn btn-outline-primary">+</button>
        {limit > 1 && 
          <button onClick={() => handleLimit("-")} className="btn btn-outline-primary">-</button>
        }
      </ButtonGroup>
    </React.Fragment>
  )
}

export default Collection
