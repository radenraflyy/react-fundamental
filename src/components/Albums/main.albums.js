// Children Component
import React  from 'react'
import { Container } from 'react-bootstrap'
import Collection from './collection.albums'


const Albums = (props) => {
  const { title, description } = props
  // console.log(props);

  return (
    <React.Fragment>
      <Container className="mt-5">
        <h1>{title}</h1>
        <i>{description}</i>
        <Collection/>
      </Container>
    </React.Fragment>
  )
}
export default Albums