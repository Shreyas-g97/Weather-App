import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherNav from './components/Navbar';

function App() {
  return (
    <div className="App">
      <WeatherNav fixed="top"/>
      <div className="bg"></div>
    </div>
  );
}

export default App;
