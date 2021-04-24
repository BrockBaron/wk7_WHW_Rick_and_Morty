import React, {useEffect, useState} from 'react';
import './App.css';
import RickAndMortyContainter from './containers/RickAndMortyContainer';
// import { Route } from "react-router-dom"

// fetch R&M api and convert objrct {} into array []

//fetch array itme [charachter;url] 
// use promis to convert array into json
// use promise to assign to state

// useEffct to call fetch function
function App() {
  return (   
    <div className="App">
      <h1>Rick & Morty</h1>
      <RickAndMortyContainter />
    </div>
  );

}

export default App;
// const categories = [] 

  // let array = () => {
    
  // }

  // const uniqueTransport = Array.from(new Set(allTransports));
  //   return [...uniqueTransport];


  // const [categories, setCategories] = useState([])

  // const FetchCategories = function() {
    // fetch('https://rickandmortyapi.com/api')
    
    // .then(res => console.log(res))



//   useEffect(() => {
//     FetchCategories();
// }, [])
//   }

// const uniqueTransport = Array.from(new Set(allTransports));
//   return [...uniqueTransport];

// ************ Tutor solution
  // const allTransports = this.journeys.map((journey) => {
  //   return journey.transport;
  // }) 

  // return allTransports.filter((transport, index, array) => {
  //   return  array.indexOf(transport) === index;
  // })