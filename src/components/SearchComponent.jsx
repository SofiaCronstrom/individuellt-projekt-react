import arrowBtn from "../assets/arrow.svg";
import Close from "../assets/close.svg";
import { FetchImages } from "../api";
import { ImageContext } from "../context";
import { useContext, useEffect, useState } from "react";

export function SearchComponent() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const { addImage } = useContext(ImageContext);
  
  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        try {
          const results = await FetchImages(query);
          setImages(results);
        } catch (error) {
          console.error("Could not fetch images:", error);
        }
      } else {
        setImages([]);
      }
    };
    fetchData();
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    const inputQuery = e.target.elements.query.value;
    setQuery(inputQuery); // Set the query state
};

  return (
    <>
      <p>Search images using one word</p>
      <form onSubmit={handleSearch} className="search-form btn">
        <input 
        name="query" 
        type="text" 
        placeholder="Ex. green, house, abstract, city" 
        />
        <button className="btn-primary" type="submit">
          Search
        </button>
        <img src={arrowBtn} alt="black-arrow" />
      </form>

      <section className="search-result">
        
         {images.map(image => (
          <figure key={image.id} className="result-img">
          <img className="unspl-img" src={image.urls.small} alt={image.alt_description} />
          <div className="img-hover">
            <button onClick={() => addImage(image)}className="save-btn">Save</button>
          </div>
          </figure>
          ))}
        
      </section>
    </>
  );
}
