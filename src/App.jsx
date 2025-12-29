import { useState } from 'react'
import houseData from './data/properties.json';
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';
import './App.css';
import FavouritePanel from './components/FavouritePanel';
function App() {
  const[searchTerm, setSearchTerm] = useState('');
  const[submittedTerm, setSubmittedTerm] = useState(''); 

  // handling favorites list
  // Array of favourited properties
  const [favouriteList, setFavouriteList] = useState([]);
  // whether user clicked the favourites icon
  const [showFavourites, setShowFavourites] = useState(false);

  const [notification, setNotification] = useState('');

  const filteredProperties = houseData.properties.filter(property =>
    property.location.toLowerCase().includes(submittedTerm.toLowerCase()) ||
    property.type.toLowerCase().includes(submittedTerm.toLowerCase())||
    property.tenure.toLowerCase().includes(submittedTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(submittedTerm.toLowerCase())
  );

  // add a property to favourites
  const addToFavourites = (property) => {
    setFavouriteList(prev => {
      //if there are duplications
      if(prev.find(item => item.id === property.id)) {
        showNotification('Property already added to Favourites ')
        return prev;
      }
      showNotification('Property added to favourites ❤️')
      return [...prev, property];
    });
  };

  // clearing and removing items from Favourite list
  const removeFromFavourites = (id) => {
    setFavouriteList(prev =>{
      showNotification('Property removed from favourites')
      return prev.filter(item => item.id !== id);
    });
  };

  const clearFavourites = () => {
    setFavouriteList([]);
  }

  // function to show message
  const showNotification = (message) => {
    setNotification(message);

    setTimeout(()=> {
      setNotification('');
    }, 2000);
  };


  return (
    <div className= {`app-container ${showFavourites ? 'favourites-open': ''}`}>
      <div className='main-content'>
        <SearchBar 
        setSubmittedTerm={setSubmittedTerm}
        toggleFavourites={() => setShowFavourites(prev => !prev)}/>

        <Gallery 
        properties={filteredProperties}
        addToFavourites = {addToFavourites}/>

      </div>

      {/* rendering FavouritePanel */}
      {showFavourites && (
        <FavouritePanel
        className= {showFavourites? 'show': ''}
        favouriteList={favouriteList}
        removeFromFavourites={removeFromFavourites}
        clearFavourites={clearFavourites}
        toggleFavourites={() => setShowFavourites(false)}/>
      )}

      {notification &&(
        <div className='notification'>
          {notification}
        </div>
      )}
    </div>
  );
}

export default App;
