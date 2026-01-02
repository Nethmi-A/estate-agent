import { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import houseData from './data/properties.json';
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';
import './App.css';
import FavouritePanel from './components/FavouritePanel';
import PropertyPage from './components/PropertyPage';


function App() {
  const [filteredProperties, setFilteredProperties] = useState(houseData.properties);

  // favourites
  const [favouriteList, setFavouriteList] = useState([]);
  const [showFavourites, setShowFavourites] = useState(false);

  // notification
  const [notification, setNotification] = useState('');

  // search filter
  // const filteredProperties = houseData.properties.filter(property =>
  //   property.location.toLowerCase().includes(submittedTerm.toLowerCase()) ||
  //   property.type.toLowerCase().includes(submittedTerm.toLowerCase()) ||
  //   property.tenure.toLowerCase().includes(submittedTerm.toLowerCase())
  // );

  const handleSearch = (filters) => {
    const results = houseData.properties.filter((p) =>
      (!filters.tenure || p.tenure.toLowerCase() === filters.tenure.toLowerCase()) &&
      (!filters.type || p.type.toLowerCase() === filters.type.toLowerCase()) &&
      (!filters.location ||
        p.location.toLowerCase().includes(filters.location.toLowerCase()))
    );

    setFilteredProperties(results);
  };


  // show message
  const showNotificationMessage = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 2000);
  };

  // add favourite
  const addToFavourites = (property) => {
    setFavouriteList(prev => {
      if (prev.find(item => item.id === property.id)) {
        showNotificationMessage('Property already in favourites');
        return prev;
      }
      showNotificationMessage('Added to favourites ❤️');
      return [...prev, property];
    });
    setShowFavourites(true);
  };

  // remove favourite
  const removeFromFavourites = (id) => {
    setFavouriteList(prev => {
      showNotificationMessage('Removed from favourites');
      return prev.filter(item => item.id !== id);
    });
  };

  // clear all
  const clearFavourites = () => {
    setFavouriteList([]);
    showNotificationMessage('Favourites cleared');
  };

  return (
    <div className={`app-container ${showFavourites ? 'favourites-open' : ''}`}>
      
      {/* MAIN CONTENT */}
      <div
        className="main-content"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          const removeId = e.dataTransfer.getData("removeId");
          if (removeId) removeFromFavourites(removeId);
        }}
      >
        <Routes>

          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <SearchBar
                  onSearch = {handleSearch}
                  toggleFavourites={() => setShowFavourites(prev => !prev)}
                />

                <Gallery
                  properties={filteredProperties}
                  addToFavourites={addToFavourites}
                  favouriteList={favouriteList}
                />
              </>
            }
          />

          {/* PROPERTY PAGE */}
          <Route
            path="/property/:id"
            element={
              <PropertyPage
                addToFavourites={addToFavourites}
                favouriteList={favouriteList}
                toggleFavourites={() => setShowFavourites(prev => !prev)}
              />
            }
          />

        </Routes>
      </div>

      {/* FAVOURITES PANEL */}
      {showFavourites && (
        <FavouritePanel
          className="show"
          favouriteList={favouriteList}
          removeFromFavourites={removeFromFavourites}
          clearFavourites={clearFavourites}
          toggleFavourites={() => setShowFavourites(false)}
          addToFavourites={addToFavourites}
          allProperties={houseData.properties}
        />
      )}

      {/* NOTIFICATION */}
      {notification && (
        <div className="notification">{notification}</div>
      )}
    </div>
  );
}

export default App;
