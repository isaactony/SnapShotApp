import React,{useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import Card from './Card';

function NavBar(){
    const [searchInput, setSearchInput] = useState('');
    const [images, setImages] = useState([]);
    const [likes, setLikes] = useState([]);

    const apikey = "CrTWcyntot24vIxCoYojcEP9lfAXBcf8X2d3v7psz0V9qMMUNsN9X0NS";

    useEffect(() => {
        const handleSearch = async () => {
          const response = await fetch(`https://api.pexels.com/v1/search?query=${searchInput}&per_page=20`, {
            headers: {
              Authorization: apikey
            }
          });
          const data = await response.json();
          setImages(data.photos);
        }
        if (searchInput.length > 2) {
          handleSearch();
        }
      }, [searchInput]);


    const handleLikeClick = (index) => {
        setLikes(prevLikes => {
          const newLikes = [...prevLikes];
          newLikes[index]++;
          return newLikes;
        });
      }


    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light text-white d-flex align-items-center justify-content-center">
            <div className='container-fluid d-flex flex-column align-items-center justify-content-center'>
                <h1 className="font-weight-bold text-center my-4">SNAPSHOT APP</h1>
                <div className='d-flex align-items-center justify-content-center my-4'>
                <NavLink style={{marginRight: '70px', textDecoration: 'none'}} to='/'>Home</NavLink>
                  <NavLink style={{marginRight: '70px', textDecoration: 'none'}} to='gallery'>Gallery</NavLink>
                  <NavLink style={{marginRight: '70px', textDecoration: 'none'}} to='/people'>People</NavLink>
                  <NavLink style={{marginRight: '70px', textDecoration: 'none'}} to='/cities'>Cities</NavLink>
                  <NavLink style={{marginRight: '70px', textDecoration: 'none'}} to='/animals'>Animals</NavLink>
                  <NavLink style={{marginRight: '70px', textDecoration: 'none'}} to='/nature'>Nature</NavLink>
                </div>
                <form  value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="d-flex" role="search">
                    <input className="form-control me-2 form-control-sm" type="search" placeholder="Search..." aria-label="Search"/>
                    
                </form>
            </div>
</nav>

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

</>

    )
}
export default NavBar;

