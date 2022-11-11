import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherNav from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import { useEffect, useState } from 'react';

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("Latitude is:", lat)
    console.log("Longitude is:", long)
  }, [lat, long]);



  return (
    <div className="App">
      <WeatherNav fixed="top"/>
      <div className='main'>
        <Sidebar/>
        <Home className="home"/>
      </div>
    </div>
  );
}

export default App;
