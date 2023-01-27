import React from "react";
import ImageGrid from "./ImageGrid";
import "../App.css"


function Gallery () {
  
return (
  <ImageGrid query="gallery" perPage={20} />
)

}

export default Gallery;
