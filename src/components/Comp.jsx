import React from 'react'
import { useState, useEffect } from 'react';

import './Comp.css'
const Comp = ({league,selected,onSelect}) => 
{
  

 
  return (
   
     <div className='container'>
        <h4>
          <strong>All Competitions</strong>
        </h4>
       <div className='grid'>
       {league.filter(comp => comp.plan === "TIER_ONE").map(comp => (
        <div key={comp.id} className='card' onClick={() =>onSelect(comp.id)}>
          <img src={comp.emblemUrl} alt={comp.name} />
          <div className='title'>
            <h3>{comp.name}</h3>
            <h5>{comp.area.name}</h5>
          </div>
        </div>
      ))}
       </div>
    </div>
  )
}

export default Comp