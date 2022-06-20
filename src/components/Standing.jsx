import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import "./Standing.css";
const Standing = ({selected, league}) => {
  const [standing, setStanding] = useState([]);

  useEffect(() => {
    const Token = 'cfabb657da514f678932d1aba856e8a1';
    const URL = 'https://api.football-data.org/v2/competitions/'+ selected + '/standings';
    async function fectchleague() {
      const response = await fetch(URL, { headers: { 'X-Auth-Token': Token } });
      const result = await response.json();
      const row = result.standings[0];
      setStanding(row.table); 
    }
    fectchleague();
    
  }, [selected])
console.log( "RESULT", standing);

  // const [name, setName] = useState('');
  // league.filter(comp => comp.id)
  return (
    <>
      <div className="head">
        <Link to='/' className="fan-link">All Competition</Link>
        <span>/</span>
       <div>
       {league.filter(comp => comp.id === selected).map(comp =>(
        <h3 key={comp.id}>{comp.name}</h3>
      ))}
       </div>
      </div>
      {league.filter(comp => comp.id === selected).map(comp =>(
        <h3 key={comp.id}>{comp.name}</h3>
      ))}
      <div className="table-responsive mt-5">
      <table>
          <thead>
            <tr>
              <th className="position"></th>
              <th className="team" colSpan="2">
                Team
              </th>
              <th className="played">Played</th>
              <th className="won">Won</th>
              <th className="draw">Draw</th>
              <th className="lost">Lost</th>
              <th className="ga">GA</th>
              <th className="points">Points</th>
            </tr>
            {standing.map(stands => (
              <tr key={stands.position}>
              <td>{stands.position}</td>
              <td className="badge-td"><div className="badge"><img src={stands.team.crestUrl} alt={stands.team.name} /></div></td>
              <td className="text-left">{stands.team.name}</td>
              <td>{stands.playedGames}</td>
                <td>{stands.won}</td>
                <td>{stands.draw}</td>
                <td>{stands.lost}</td>
                <td>{stands.goalsFor}</td>
                <td>{stands.goalsAgainst}</td>
                <td>{stands.goalDifference}</td>
                <td>{stands.points}</td><td>{stands.playedGames}</td>
                <td>{stands.won}</td>
                <td>{stands.draw}</td>
                <td>{stands.lost}</td>
                <td>{stands.goalsFor}</td>
                <td>{stands.goalsAgainst}</td>
                <td>{stands.goalDifference}</td>
                <td>{stands.points}</td>
              </tr>
            ))}
              {/* {standing.map(stands => (
                <tr key={stands.position}>
                <td>{stands.position}</td>
                <td className="badge-td"><div className="badge"><img src={stands.badge} alt={stands.team} /></div></td>
                <td className="text-left">{stands.team}</td>
                <td>{stands.playedGames}</td>
                <td>{stands.won}</td>
                <td>{stands.draw}</td>
                <td>{stands.lost}</td>
                <td>{stands.goalsFor}</td>
                <td>{stands.goalsAgainst}</td>
                <td>{stands.goalDifference}</td>
                <td>{stands.points}</td>
            </tr>
            ))} */}
          </thead>
        </table>
      </div>
    </>
  );
};

export default Standing;
