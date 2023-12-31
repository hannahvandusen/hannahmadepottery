import "../../App.css"
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap"

import img1 from '../images/img2.jpg'
import img2 from '../images/img1.jpg'
import img3 from '../images/img3.jpg'

const items = [
    {
      id: 1,
      altText: 'Slide 1',
      caption: 'Slide 1',
      src: `${img1}`
    },
    {
      id: 2,
      altText: 'Slide 2',
      caption: 'Slide 2',
      src: `${img2}`
    },
    {
      id: 3,
      altText: 'Slide 3',
      caption: 'Slide 3',
      src: `${img3}`
    },
  ];

function PortfolioCarousel() {
  

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map((item) => {
    console.log(item)
    return (

      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.src} alt={item.altText} style={{width:"100%", height:"100%"}} />
      </CarouselItem>
    )
  })

  return (
    <div>
      {/* <style>
        {`.custom-tag {
              max-width: 100%;
              height: 600px;
}`}
      </style> */}
      <Carousel
        className="carouselMedia"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  )
}

export default PortfolioCarousel
