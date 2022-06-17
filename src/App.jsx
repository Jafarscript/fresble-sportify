
import { useEffect, useState } from 'react';
import './App.css';
import Comp from './components/Comp';

function App() {
  const [leagues, setLeagues] = useState([])

  useEffect(() => {
    const Token = 'cfabb657da514f678932d1aba856e8a1'
    async function fectchleague() {
      const response = await fetch('https://api.football-data.org/v2/competitions/', { headers: { 'X-Auth-Token': Token } });
      const result = await response.json();
      setLeagues(result.competitions);
      console.log( "RESULT",result.competitions);
    }
    fectchleague();
    
  }, [])

  return (
    <div className="App">
       <header className="App-header">
       <div className='logo' >
         <img src='https://res.cloudinary.com/dvo8xhx6r/image/upload/v1655412689/logo.efdde25b_jhrv58.png' alt='' />
       </div>
      </header>
      <Comp league={leagues} />
    </div>
  );
}

export default App;
