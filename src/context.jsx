import { createContext, useState } from "react";

export const ImageContext = createContext();

export const ImageProvider = ({children}) => {
    const [images, setImages] = useState([]);

    const addImage = (image) => setImages([...images, image]);

    const removeImage = (id) => setImages(images.filter(image.id !== id));

    const updateImage = (imageUpdated) => {
        setImages(images.map(image => (image.id === imageUpdated.id ? imageUpdated : image)));
    };
    
    return(
        <ImageContext.Provider value={{images, addImage, removeImage, updateImage}}>
          {children}
        </ImageContext.Provider>
    );
}