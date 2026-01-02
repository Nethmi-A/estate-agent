import {useParams} from "react-router-dom";
import { useState } from "react";
import houseData from "../data/properties.json";
import { useNavigate } from "react-router-dom";

const PropertyPage = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const property = houseData.properties.find(p => p.id ===id);

    const [currentIndex, setCurrentIndex] = useState(0);
    const pictures = property.pictures;

    const prevImage = () => {
        setCurrentIndex((prev) =>
        prev ===0? pictures.length -1: prev -1);
    };

    const nextImage = () => {
        setCurrentIndex((prev) => 
        prev ===pictures.length-1? 0: prev+1);
    };

    // state for navigation bar
    const [activeTab, setActiveTab] = useState("description");

    return (
        <div className="property-page">
            
            <button className="back-to-search" 
            onClick={() => navigate(-1)}>
                Back
            </button>
            {/* main image */}
            <div className="main-img">
                <img src={pictures[currentIndex]} alt={property.type} />
            </div>

            <button className="nav-arrow left" onClick={prevImage}>
                &#10094;
            </button>

            <button className="nav-arrow right" onClick={nextImage}>
                &#10095;
            </button>

            {/* thumbnails */}
            <div className="thumbnails">
                {property.pictures.map((img, index)=> (
                    <img 
                    key={index}
                    src={img} 
                    alt={`thumbnail.${index}`} 
                    className= {`thumbnail ${index===currentIndex ? "active":""}`}
                    onClick={() => setCurrentIndex(index)} />
                ))}
            </div>
            <div className='property-top'>
                <span className="price">£{property.price.toLocaleString()}</span>
                <span className="type">{property.type}</span>
            </div>
            <h4 className="location">{property.location}</h4>
            <hr className="divider" />



            <div className="tab-nav">
                <span
                    className={`tab-item ${activeTab === "description" ? "active": ""}`}
                    onClick={() => setActiveTab("description")}
                > Description
                </span>


                <span
                    className={`tab-item ${activeTab === "location" ? "active" : ""}`}
                    onClick={() => setActiveTab("location")}
                >
                    Location
                </span>
            </div>

            <div className="tab-content">
                {activeTab === "description" && (
                    <p className="property-description">
                    {property.description}
                    </p>
                )}

                {activeTab === "location" && (
                    <iframe
                    title="map"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                        property.location
                    )}&output=embed`}
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    loading="lazy"
                    />
                )}
                </div>

                <button className='favorite-button'
                    onClick={() => addToFavourites(property)}
                    >Add to Favourites
                </button>

        </div>
    );
};

export default PropertyPage;