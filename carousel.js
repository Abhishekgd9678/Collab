import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay';
import {
  DotButton,
  PrevButton,
  NextButton
} from './components/EmblaCarouselArrowsDotsButtons'

import data from "./components/data.json";
import back_img from "./images/background.jpg"
import { Link } from "react-router-dom";

const EmblaCarousel = (props) => {
  const url = "/buy/";
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <>
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <span>{index + 1}</span>
                </div>


                <img class="embla_background" src={back_img} />
                <img class="embla_img" src={data.data[index].link} />
                <div className='slide-des'>
                <h3 className="embla-des">{data.data[index].desp}</h3>
                <Link to = {url+data.data[index].desp}>
                <button 
                className='btn btn-primary btn-lg shop-button'
                >Shop Now</button>
                </Link>
                </div>
                
                
              </div>
              
              
            </>
            ))}
          </div>
        <div className="embla__buttons">
          <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
          <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
        </div>
      <div className="embla__dots"> 
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : ''
            )}
          />
        ))}
      </div>
      </div>
        </div>


    </>
  )
}

export default EmblaCarousel
