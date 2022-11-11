import Card from 'react-bootstrap/Card';
import './Home.css'

function Home(props) {
  return (
    <Card style={{ width: '82%' }} className="big-card">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.weatherData.name}, {props.weatherData.sys.country}</Card.Title>
        <Card.Text>{props.weatherData.weather[0].description}</Card.Text>
        <Card.Text>{Math.round(((props.weatherData.main.temp - 273.15) *(9/5)) + 32)}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Home;