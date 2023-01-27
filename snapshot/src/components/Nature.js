import React,{useState,useEffect}from 'react';

function Nature(){
    const [images, setImages] = useState([]);
    const [likes, setLikes] = useState([]);



    const apikey = "2DKKpd6LevhrI90M8YszntYlBBGyR0iHnJ8NWpa46QZ0R8NXQUj6iJhc";
    const page_num = 50;
    useEffect(() => {
        fetch(`https://api.pexels.com/v1/search?query=nature&per_page=${page_num}`, {
          headers: {
            Authorization: apikey
          }
        })
          .then(response => response.json())
          .then(data => setImages(data.photos))
          .catch(error => console.log(error));
      }, [page_num]);

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
            <div key={image.id} className="col-md-2">
              <div className="card">
                <img className="card-img-top" src={image.src.landscape} alt={image.photographer} />
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
    
)


}
export default Nature;