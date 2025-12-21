import { useState } from 'react'
import houseData from './data/properties.json';
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';
import './App.css';
function App() {
  return (
    <div>
      <h1>Property List</h1>
      <SearchBar/>
      <Gallery properties={houseData.properties}/>

    </div>
  );
}

export default App;
