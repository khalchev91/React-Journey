import './App.css';
import Location from './Components/Location.js'
import Header from './Components/Header.js'
import locationsArray from './locations.js'

function App() {
  
  let locations = locationsArray.map(location => <Location key={location.id} item = {location}/>)
  return (
    <div className="App">
        <Header />
        {locations}
    </div>
  );
}

export default App;
