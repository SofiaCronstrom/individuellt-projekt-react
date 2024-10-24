import { createContext, useState } from "react";

export const ImageContext = createContext();

export const ImageProvider = ({children}) => {
    const [collection, setCollection] = useState([]);

    const addImage = (image) => {
        setCollection((prev) => [...prev, image]);
    };

    const removeImage = (id) => {
        setCollection((prev) => prev.filter(image => image.id !== id));
    };

    const updateImage = (imageUpdated) => {
        setCollection(images.map(image => (image.id === imageUpdated.id ? imageUpdated : image)));
    };
    
    return(
        <ImageContext.Provider value={{collection, addImage, removeImage, updateImage}}>
          {children}
        </ImageContext.Provider>
    );
}