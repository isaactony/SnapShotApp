import React from 'react';
import ImageGrid from './ImageGrid';

function Animals(){
     
    const [images, setImages] = useState([]);
    const [likes, setLikes] = useState([]);


    const apikey = "2DKKpd6LevhrI90M8YszntYlBBGyR0iHnJ8NWpa46QZ0R8NXQUj6iJhc";
    const page_num = 50;
    useEffect(() => {
        fetch(`https://api.pexels.com/v1/search?query=animals&per_page=${page_num}`, {
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
  <ImageGrid query="animals" perPage={20} />
    
)

}
export default Animals;