import React from 'react'
import './Comp.css'
const Comp = ({league}) => 
{

 
  return (
   <section className='competit'>
     <div className='container'>
        <h4>
          <strong>All Competitions</strong>
        </h4>
       <div className='grid'>
       {league.filter(comp => comp.emblemUrl !== null).map(comp => (
        <div key={comp.id} className='card'>
          <img src={comp.emblemUrl} alt={comp.name} />
          <div className='title'>
            <h3>{comp.name}</h3>
            <h5>{comp.area.name}</h5>
          </div>
        </div>
      ))}
       </div>
    </div>
   </section>
  )
}

export default Comp