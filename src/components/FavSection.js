import React from "react";
import "./FavSection.css";

const FavSection = ({ favorites }) => {

    if (!Array.isArray(favorites)) {
        return <div>No favorites to display</div>;
    }

    return (
        <>
            <h2>Favorites</h2>
            <div className="FavSection">
                {favorites.map((favorite, index) => (
                    <div key={index} className="favorite">
                        <img src={favorite.url} alt={favorite.title} />
                        <h5>{favorite.title}</h5>
                    </div>
                ))}
            </div>
        </>
    );
};

export default FavSection;