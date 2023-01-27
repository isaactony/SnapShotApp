import React,{useState,useEffect}from 'react';
import LikeButton from './LikeButton';

function Nature(){
    const [images, setImages] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [likes, setLikes] = useState(Array(images.length).fill(0));
    useEffect(() => {
      const handleSearch = async () => {
        const response = await fetch(`https://api.pexels.com/v1/search?query=${searchInput}&per_page=15`, {
          headers: {
            Authorization: "2DKKpd6LevhrI90M8YszntYlBBGyR0iHnJ8NWpa46QZ0R8NXQUj6iJhc"
          }
        });
        const data = await response.json();
        setImages(data.photos);
      }
      if (searchInput.length > 2) {
        handleSearch();
      }
    }, [searchInput]);
    <form  value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="d-flex" role="search">
                    <input className="form-control me-2 form-control-sm" type="search" placeholder="Search..." aria-label="Search"/>
                    <button onClick={() => searchInput(searchInput)} className="btn btn-outline-success" type="submit">Search</button>
                </form>
    
    


    const apikey = "2DKKpd6LevhrI90M8YszntYlBBGyR0iHnJ8NWpa46QZ0R8NXQUj6iJhc";
    const page_num = 50;
    useEffect(() => {
      fetch(`https://api.pexels.com/v1/search?query=nature&per_page=${page_num}`, {
        headers: {
          Authorization: apikey
        }
      })
        .then(response => response.json())
        .then(data => {
          setImages(data.photos);
          setLikes(Array(data.photos.length).fill(0));
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
                  
                  <LikeButton count={likes[index]} onClick={() => handleLikeClick(index)} />

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