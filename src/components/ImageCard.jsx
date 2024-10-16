import MockUp from "../assets/unsplash.jpg";
import Zoom from "../assets/zoom.svg";
import Close from "../assets/close.svg";

export function ImageCard(){
    return (
        <figure className="result-img">
            <button><img src={Close} alt="a black x to remove image" /></button>
            <img src={MockUp} alt="example image" />
            <div className="img-hover">
              <img src={Zoom} alt="a magnifying glass with a plus sign" />
              <button className="save-btn">Save</button>
            </div>
        </figure>
    )
}