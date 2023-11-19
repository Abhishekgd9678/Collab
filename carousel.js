import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import data from "./components/data.json";
import back_img from "./images/background.jpg"

const EmblaCarousel = (props) => {
  const { options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 2500 })]);

  return (
  <>
  <div className="carousel-head">
  </div>
  
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {data.data.map((x, index) => (
            <div className="embla__slide" key={index}>
             <div class="parent">
                <img class="embla_background" src={back_img} />
                <img class="embla_img" src={x.link} />
                <h3 className="embla-des">{x.desp}</h3>
             </div>
             </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default EmblaCarousel;
