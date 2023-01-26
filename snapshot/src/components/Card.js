import React from 'react';

function Card({ image, index, handleLikeClick, likes }) {
  return (
    <div className="col-md-2">
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
