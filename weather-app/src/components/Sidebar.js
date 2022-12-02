import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import './Sidebar.css'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';


function Sidebar(props) {
  return (
    <Container className='sidebar-cont d-none d-xl-block'>
        <ListGroup variant="flush">
        <ListGroupItem className='card'>
          <Card style={{width: '15rem'}}>
            <Card.Body>
            <Card.Title>{props.forecastData.list.map(3).dt_txt}</Card.Title>
            {/* <Card.Text>{Math.round(((props.forecastData.list[3].main.temp - 273.15) *(9/5)) + 32)}°F</Card.Text>
           <Card.Text>{props.forecastData.list[3].weather[0].description}</Card.Text>
           <Card.Text>H: {Math.round(((props.forecastData.list[3].main.temp_max - 273.15) *(9/5)) + 32)} | L: {Math.round(((props.forecastData.list[3].main.temp_min - 273.15) *(9/5)) + 32)}</Card.Text> */}
            </Card.Body>
          </Card>
        </ListGroupItem>
        <ListGroup.Item className='card'>
            <Card style={{ width: '15rem'}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </ListGroup.Item>

        <ListGroup.Item className='card'>
            <Card style={{ width: '15rem'}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </ListGroup.Item>

        <ListGroup.Item className='card'>
            <Card style={{ width: '15rem'}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </ListGroup.Item>
        </ListGroup>
    </Container>
  )
  }


export default Sidebar;