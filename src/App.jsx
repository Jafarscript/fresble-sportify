
import { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Comp from './components/Comp';
import Standing from './components/Standing';

function App() {
  const [leagues, setLeagues] = useState([]);
  const [selected, setSelected] = useState([]);
  const handleSelection = (id,name) => {
   setSelected(id);
  //  console.log(selected);
};

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

    <Router>
    <div className="App">
       <header className="App-header">
       <div className='logo' >
         <img src='https://res.cloudinary.com/dvo8xhx6r/image/upload/v1655412689/logo.efdde25b_jhrv58.png' alt='' />
       </div>
      </header>
      <section className='competit'>
      <div className='container'>
      <Routes>
      <Route path="/" exact element={<Comp league={leagues} selected={selected} onSelect={handleSelection}/>}>
      {/* <Comp league={leagues}/> */}
      </Route>
      <Route path='/standing' element={
      <Standing  league={leagues} selected={selected} onSelect={handleSelection}/>}
      ></Route>
      </Routes>
      </div>
      </section>
    </div>
    </Router>
  );
}

export default App;
