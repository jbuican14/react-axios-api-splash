import React from 'react'; 
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {

    const images = props.images.map( (image, idx) => {
        return <ImageCard  key={idx} image={image}/>
    });
    
    return <div className="image-list"> {images}</div>
};

export default ImageList; 