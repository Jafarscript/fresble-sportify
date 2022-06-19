import React from 'react'
import { useState, useEffect } from 'react';
import './Standing.css'
const Standing = (selected) => {
    const [standing, setStanding] = useState([])
 

useEffect(() => {
  const Token = 'cfabb657da514f678932d1aba856e8a1';
  async function fetchstanding() {
    const response = await fetch('https://api.football-data.org/v2/competitions/' + selected + '/standings', { headers: { 'X-Auth-Token': Token } });
    const result = await response.json();
    setStanding(result.standing);
    console.log( "RESULT",result.standing);
  }
  fetchstanding();
  
}, [selected])
  return (
    <div className='container'>
         <h4>
          <strong>All Competitions</strong>
        </h4>
    </div>
  )
}

export default Standing