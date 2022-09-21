import React from 'react';
import './country.css';

const Country = (props) => {
    console.log(props.country);
    const { flags, name, population, area } = props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h3>Name: {name.common}</h3>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;