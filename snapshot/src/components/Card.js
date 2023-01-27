import React, { useState } from 'react';

function Card({ image, index, handleLikeClick, likes }) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleCardClick = (e) => {
    if (e.target.className !== "btn btn-danger") {
      setIsZoomed(!isZoomed);
    }
  }

  return (
    <div className={`col-md-3 ${isZoomed ? 'zoomed' : ''}`} onClick={handleCardClick}>
      <div className="card">
        <img className="card-img-top" src={image.src.landscape} alt={image.photographer} />
        <div className="card-body">
          <p className="card-text">{image.photographer}</p>
          <button className="btn btn-danger" onClick={() => handleLikeClick(index)}>
            &#x2764; {likes[index]}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
