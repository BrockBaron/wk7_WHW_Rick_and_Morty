import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  // const [category, setCategory] = useState([]);
  // const [location, setLocation] = useState([]);
  // const [episode, setEpisode] = useState([]);






  const fetchCategories = function() {
    fetch('https://rickandmortyapi.com/api')
    .then(res => res.json())
    .then(res => console.log(res))
    // .then (category => setCategory(category))
    // .catch(error => console.error(error));
}

//   useEffect(() => {
//     fetchCategories();
// }, [])




  return (
    <div className="App">
      <h1>Rick & Morty app</h1>
    </div>
  );
}

export default App;

// const uniqueTransport = Array.from(new Set(allTransports));
//   return [...uniqueTransport];

// ************ Tutor solution
  // const allTransports = this.journeys.map((journey) => {
  //   return journey.transport;
  // }) 

  // return allTransports.filter((transport, index, array) => {
  //   return  array.indexOf(transport) === index;
  // })