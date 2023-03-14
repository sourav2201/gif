import React, { useState } from "react";
import './App.css';
import './components/Giphy';
import Giphy from './components/Giphy';
import GifDetails from "./components/GifDetails";
import FavSection from "./components/FavSection";

function App() {

  const [gifData, setGifData] = useState([]);
  const [clickedGifUrl, setClickedGifUrl] = useState("");
  const [clickedGifTitle, setClickedGifTitle] = useState("");
  const [favorites, setFavorites] = useState([]);


  return (
    <div>
      <div className="gif_Container">
        <Giphy
          gifData={gifData} setGifData={setGifData}
          clickedGifUrl={clickedGifUrl} setClickedGifUrl={setClickedGifUrl}
          clickedGifTitle={clickedGifTitle} setClickedGifTitle={setClickedGifTitle}
          favorites={favorites} setFavorites={setFavorites}
        />

        {clickedGifUrl && clickedGifTitle && (
          <GifDetails
            clickedGifUrl={clickedGifUrl} setClickedGifUrl={setClickedGifUrl}
            clickedGifTitle={clickedGifTitle} setClickedGifTitle={setClickedGifTitle}
            favorites={favorites} setFavorites={setFavorites}
          />
        )}
      </div>

      <div className="section">
        <FavSection favorites={favorites} />
      </div>



    </div>
  );
}

export default App;
