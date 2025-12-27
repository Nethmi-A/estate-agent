import { useState } from 'react'
import houseData from './data/properties.json';
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';
import './App.css';
function App() {
  const[searchTerm, setSearchTerm] = useState('');
  const[submittedTerm, setSubmittedTerm] = useState(''); 

  const filteredProperties = houseData.properties.filter(property =>
    property.location.toLowerCase().includes(submittedTerm.toLowerCase()) ||
    property.type.toLowerCase().includes(submittedTerm.toLowerCase())||
    property.tenure.toLowerCase().includes(submittedTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(submittedTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar setSubmittedTerm={setSubmittedTerm}/>
      <Gallery properties={filteredProperties}/>

    </div>
  );
}

export default App;
