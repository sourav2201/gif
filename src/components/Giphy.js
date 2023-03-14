import React, { useEffect } from "react";
import axios from "axios";
import "./Giphy.css";

const Giphy = ({ gifData, setGifData, setClickedGifUrl, setClickedGifTitle}) => {


    useEffect(() => {
        const fetchData = async () => {
            let result = await axios("https://api.giphy.com/v1/gifs/search", {
                params: {
                    api_key: "F25PXBXsvMOIzNfuE2ue5KBs0SP6vtSX",
                    q: "cheeseburgers",
                    limit: 90
                }
            });
            setGifData(result.data.data);
        }

        fetchData();

    }, [setGifData]);

    function handleClick(element) {
        setClickedGifUrl(element.images.fixed_height.url);
        setClickedGifTitle(element.title);
    }



    return (
        <>

            {gifData.map((e) => (
                <div key={e.id} className="gif" onClick={() => handleClick(e)}>
                    <img className="gif-img" src={e.images.fixed_height.url} alt="giffs" />
                </div>
            ))}
            
        </>
    );
};

export default Giphy;