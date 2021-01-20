
import './App.css';
import React,{useState,useEffect} from 'react';
import CardList from './Components/Card-List';
import SearchBox from './Components/SearchBox';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [flag, setflag] = useState(false)
  const [filteredmonsters, setfilteredmonsters] = useState([]);
  // const [heading, setHeading] = useState('MonsterBook');

 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users => setMonsters(users))   
  })

  
  function handlechange(e) {
    let val = e.target.value
    // setHeading(val);
    setsearchTerm(val);
    setflag(true);
  }

  React.useEffect(() => {
    const results = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setfilteredmonsters(results);
    },[searchTerm]);

  return ( 
    <div className="App">
      <header className="App-header">
       <h2>MonsterBook</h2>
        <SearchBox searchvalue={searchTerm} placeholder="Search Monster" handlechange={handlechange} />
        <CardList monsters={flag?filteredmonsters:monsters} />
      </header>
    </div>
  );
}

export default App;
