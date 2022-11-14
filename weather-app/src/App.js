import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherNav from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import Loading from './components/Loading';

function App() {
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [data, setData] = useState({});

  {/* Hook to set weather to user location on initial visit to the website*/}
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });

      await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=92abaca45f3fcc4b3c2415b155afc482`, { mode: 'cors'})
      .then(res => res.json())
      .then(result => {
        setData(result);
      });
    }
    fetchData();
  }, [lat,lon])

  {/* function to transfer data from Navbar to App*/}

  const navToApp = (navData) => {
    setData(navData);
  }



  return (
    <div className="App">
      <WeatherNav fixed="top" navToApp={navToApp}/>
      <div className='main'>
        <Sidebar/>
        {(typeof data.main != 'undefined') ? (
         <Home className="home" weatherData={data}/>):(<Loading/>)}
      </div>
    </div>
  );
}

export default App;
