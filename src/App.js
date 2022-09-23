// import logo from './logo.svg';
import './App.css';
// import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
    {/* <LoadCountries></LoadCountries> */}
    <Countries></Countries>
    </div>
  );
}

// function LoadCountries(){

//   // step-1
//   const [countries, setCountries] = useState([]);

//   // step-2
//   // useEffect( () => {}, [])
//   useEffect( () => {
//     // step-3
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   },[])
//   return(
//     <div>
//       <h1>Visiting All Countries In The World.</h1>
//       <h4>{countries.length}</h4>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country> )
//       }
//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div>
//       <h3>Name: {props.name}</h3>
//       <p>{props.population}</p>
//     </div>
//   )
// }


export default App;
