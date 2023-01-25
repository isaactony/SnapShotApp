import React, { useState, useEffect } from "react";
import "../App.css"


function Gallery () {
  const [images, setImages] = useState([]);
  const [likes, setLikes] = useState([]);

  const apikey = "2DKKpd6LevhrI90M8YszntYlBBGyR0iHnJ8NWpa46QZ0R8NXQUj6iJhc";
  const page_num = 2;

  useEffect(() => {
    fetch(`https://api.pexels.com/v1/curated?page=${page_num}`, {
      headers: {
        Authorization: apikey
      }
    })
      .then(response => response.json())
      .then(data => {
        setImages(data.photos);
        setLikes(data.photos.map(() => 0));
      })
      .catch(error => console.log(error));
  }, [page_num]);

  const handleLikeClick = (index) => {
    setLikes(prevLikes => {
      const newLikes = [...prevLikes];
      newLikes[index]++;
      return newLikes;
    });
  }

  return (
    <div className="image-grid-container"> 
      <div className="image-grid">
        <div className="row">
          {images.map((image, index) => (
            <div key={image.id} className="col-md-2">
              <div className="card">
                <img className="card-img-top" src={image.src.large} alt={image.photographer} />
                <div className="card-body">
                  <p className="card-text">{image.photographer}</p>
                  <button className="btn btn-danger" onClick={() => handleLikeClick(index)}>&#x2764; {likes[index]}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




export default Gallery;