import React,{useState,useEffect}from 'react';
import Card from './Card';

function ImageGrid({query, perPage}) {
    const [images, setImages] = useState([]);
    const [likes, setLikes] = useState(new Array(images.length).fill(0));


    const apikey = "CrTWcyntot24vIxCoYojcEP9lfAXBcf8X2d3v7psz0V9qMMUNsN9X0NS";
    useEffect(() => {
        fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}`, {
          headers: {
            Authorization: apikey
          }
        })
          .then(response => response.json())
          .then(data => setImages(data.photos))
          .catch(error => console.log(error));
      }, [query, perPage]);

      const handleLikeClick = (index) => {
        setLikes(prevLikes => {
          const newLikes = [...prevLikes];
          newLikes[index]++;
          return newLikes;
        });
      }
    
  
return(

    <div className="image-grid-container"> 
      <div className="image-grid">
        <div className="row">
        {images.map((image, index) => (
        <Card 
          key={index} 
          image={image} 
          index={index} 
          handleLikeClick={handleLikeClick} 
          likes={likes} 
        />
      ))}
        </div>
      </div>
    </div>
    
)

}

export default ImageGrid;
