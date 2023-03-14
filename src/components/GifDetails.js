import React, { useState, useEffect } from "react";
import "./Giphy.css";


const GifDetails = ({ clickedGifUrl, setClickedGifUrl, clickedGifTitle, setClickedGifTitle, favorites, setFavorites }) => {

    const [hue, setHue] = useState("red");
    const [buttonText, setButtonText] = useState("Add to favorites");

    useEffect(() => {
        if (favorites.some(favorite => favorite.url === clickedGifUrl)) {
            setHue("green");
            setButtonText("Added to favourite");
        } else {
            setHue("red");
            setButtonText("Add to favorites");
        }
    }, [clickedGifUrl, favorites]);

    function handleClose(e) {
        setClickedGifUrl("");
        setClickedGifTitle("");
        e.stopPropagation();
    }

    function handleFavorite(e) {
        e.stopPropagation();
        let isAlreadyFavorite = favorites.some(favorite => favorite.url === clickedGifUrl);
        if (!isAlreadyFavorite) {
            setFavorites([...favorites, { url: clickedGifUrl, title: clickedGifTitle, isfav: "true" }]);
        }
        else {
            const filteredFav = favorites.filter(item => item.url !== clickedGifUrl);
            setFavorites(filteredFav);
        }
    }

    return (
        <>
            <div className="gif-description">
                <button className="close-button" onClick={(e) => handleClose(e)} >X</button>
                <div className="gif-clicked-img">
                    <img src={clickedGifUrl} alt={clickedGifUrl} />
                </div>

                <div className="gif-clicked-title">
                    <h5> tittle = {clickedGifTitle}</h5>
                </div>
                <div className="fav-button">
                    <button onClick={(e) => handleFavorite(e)} style={{ backgroundColor: hue }}>
                        {buttonText}
                    </button>
                </div>
            </div>
        </>
    );
};

export default GifDetails;