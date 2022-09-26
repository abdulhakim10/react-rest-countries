import React from 'react';
import { addToDb, removedFromDb } from '../utilities/fakeDB';
import './Country.css'
const Country = (props) => {

   const {name, population, region, area, flags, cca3} = props.country;
//    event handler with parameter
   const marked = (cca3) =>{
   addToDb(cca3);
   }

   const removed = cca3 => {
    removedFromDb(cca3);
   }
   
    return (
        <div className='Country'>
            <h2>Country: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p><small>Area: {area}</small></p>
            <p>Code: {cca3}</p>
            <button onClick={() => marked(cca3)}>Marked</button>
            <button onClick={() => removed(cca3)}>Remove</button>
        </div>
    );
};

export default Country;