import Card from 'react-bootstrap/Card';
import './Home.css'

function Home(props) {
  return (
    <Card className="big-card">
      <Card.Body>
        <Card.Title><h1>{props.weatherData.name}</h1></Card.Title>
        <Card.Text className='temp'>{Math.round(((props.weatherData.main.temp - 273.15) *(9/5)) + 32)}°F</Card.Text>
        <Card.Text className='description'>{props.weatherData.weather[0].description}</Card.Text>
        <Card.Text className='hilo'>H: {Math.round(((props.weatherData.main.temp_max - 273.15) *(9/5)) + 32)} | L: {Math.round(((props.weatherData.main.temp_min - 273.15) *(9/5)) + 32)}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Home;