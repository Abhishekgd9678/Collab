import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import data from "./components/data.json";

const EmblaCarousel = (props) => {
  const { options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 1500 })]);

  return (
  <>
  <div className="carousel-head">
  <h4 className="tag"> Our Products</h4>
  </div>
  
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {data.data.map((x, index) => (
            <div className="embla__slide" key={index}>
             
                <img
                  className="embla__slide__img"
                  src={x.link}
                  alt="Your alt text"
                />
            
                <p className="embla-des">{x.desp}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default EmblaCarousel;
