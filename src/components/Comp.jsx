import React from 'react'
import { Link } from 'react-router-dom'
// import { useState, useEffect } from 'react';

import './Comp.css'
const Comp = ({league,selected,onSelect}) => 
{
  

 
  return (
   
     <>
        <h4>
          <strong>All Competitions</strong>
        </h4>
       <div className='grid'>
       {league.map((club, index) => (
        // <div key={index}>{club.name}</div>
        <Link to='/standing' key={index} className='card' onClick={() =>onSelect(club.name)}>
          <img src={club.badgeUrl} alt={club.name} />
          <div className='title'>
            <h3>{club.name}</h3>
            <h5>{club.country}</h5>
          </div>
        </Link>
      ))}
      {/* <Standing league={league} /> */}
       </div>
       </>
  )
}

export default Comp



