import React, { useState } from 'react';
import Images from '../images.js';
import data from "./data.json"

const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    const newIndex = currentIndex - 3 >= 0 ? currentIndex - 3 : Images.length - 3;
    setCurrentIndex(newIndex);
  };

  const next = () => {
    const newIndex = currentIndex + 3 < Images.length ? currentIndex + 3 : 0;
    setCurrentIndex(newIndex);
  };

  const displayedImages = Images.concat(Images.slice(0, 3)).slice(currentIndex, currentIndex + 3);
console.log(data);
  return (

    <div className="Card">
      <button className="btn" onClick={prev}>
        {"<"}
      </button>
      {displayedImages.map((image, index) => (
        <div key={index} className="image-div">
          <img className="round-image" src={image} alt={`Image ${currentIndex + index}`} />
        </div>
      ))}
      <button className="btn" onClick={next}>
       {">"}
      </button>
    </div>
  );
};

export default Card;
