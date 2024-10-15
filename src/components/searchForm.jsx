import arrowBtn from '../assets/arrow.svg'

export function SearchForm() {
  return (
    <section>
      <p>Search images using one word</p>
      <form className="search-form btn">
        <input name="textInput" type="text" placeholder="Ex. green, house, abstract, city" />
        <button className="btn-primary" type="submit">
          Search
        </button>
        <img src={arrowBtn} alt="black-arrow"/>
      </form>
      
        <p>or</p>
        <button>Suprise me!</button>
        
      
    </section>
  );
}
