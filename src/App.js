// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Moreinfo from './compunents/Moreinfo';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}
function Countries() {
  const [countrise, setCountry] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountry(data))
  }, [])
  console.log(countrise);
  return (
    <div className="countries">
      <h1 style={{ gridColumn: 'span 3' }}>Information of country length:{countrise.length}</h1>
      {
        countrise.map(country => <SingleCountries img={country.flag} name={country.name} population={country.population} gini={country.gini}></SingleCountries>)
      }
    </div>
  )
}
function SingleCountries(props) {
  const singleStyle = {
    border: '1px solid blue',
    margin: '20px',
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(30px)"

  }
  return (
    <div style={singleStyle}>
      <img style={{ width: '100%' }} src={props.img} alt="" />
      <h2>Name of country : {props.name ? props.name : 'not dfd found'}</h2>
      <h2>population of country : {props.population}</h2>
      <h2>gini: {props.gini ? props.gini : 'false'}</h2>

    </div>
  )
}

export default App;
