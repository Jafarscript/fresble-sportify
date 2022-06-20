import React from 'react'
import { Link } from 'react-router-dom'
// import { useState, useEffect } from 'react';

import './Comp.css'
import Standing from './Standing'
const Comp = ({league,selected,onSelect}) => 
{
  

 
  return (
   
     <>
        <h4>
          <strong>All Competitions</strong>
        </h4>
       <div className='grid'>
       {league.filter(comp => comp.plan === "TIER_ONE").map(comp => (
        <Link to='/standing' key={comp.id} className='card' onClick={() =>onSelect(comp.id,comp.name)}>
          <img src={comp.emblemUrl} alt={comp.name} />
          <div className='title'>
            <h3>{comp.name}</h3>
            <h5>{comp.area.name}</h5>
          </div>
        </Link>
      ))}
      <Standing league={league} />
       </div>
       </>
  )
}

export default Comp