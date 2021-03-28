import React, { useState, useEffect } from 'react'

import reviewsData from './Reviews-data'
import style from './css/slider.module.css'

import quotationMark from './media/right-quote-sign.png'
import arrowRight from './media/RightArrow.svg'
import arrowLeft from './media/LeftArrow.svg'

const slideLastIndex = reviewsData.length - 1;
const slideDirDict = { "prev": style.slideLeft, "next": style.slideRight }
const sideSlidesDict = { "prev": `.${style.rightSlide}`, "next": `.${style.leftSlide}` }

function Slider() {
  const [currSlideIndex, setCurrSlideIndex] = useState(0)

  /*
  below interval is set on every render of Slider component.
  button() re-renders the slider component while removing the interval,
  effectively resetting the timer.
  */
  const autoSliding = setInterval(() => {
    button("prev")
  }, 5000)

  useEffect(() => {
    return () => clearInterval(autoSliding);

  }, [autoSliding])

  function button(side) {
    clearInterval(autoSliding)

    const currSlide = document.querySelector(`.${style.slide}`)
    const sideSlide = document.querySelector(sideSlidesDict[side])

    currSlide.classList.add(slideDirDict[side])
    sideSlide.classList.add(style.slideMid)

    setTimeout(() => {
      setCurrSlideIndex(prev => (side === "next"
        ? prev === 0 ? slideLastIndex : prev - 1
        : prev === slideLastIndex ? 0 : prev + 1))

      currSlide.classList.remove(slideDirDict[side])
      sideSlide.classList.remove(style.slideMid)
    }, 500)

  }

  return (
    <div className={style.slider}>
      <Header />

      <section className={style.slideContainer}>
        <Slide
          slide={
            reviewsData[currSlideIndex !== 0
              ? currSlideIndex - 1
              : slideLastIndex]
          }
          pos={style.leftSlide}
        />

        <Slide slide={reviewsData[currSlideIndex]} pos={style.slide} />

        <Slide
          slide={
            reviewsData[currSlideIndex !== slideLastIndex
              ? currSlideIndex + 1
              : 0]
          }
          pos={style.rightSlide}
        />

        <input
          type="image"
          src={arrowLeft}
          alt="Previous slide button"
          onClick={() => button("prev")}
          className={`${style.slideButton} ${style.slideButtonLeft}`}
        />

        <input
          type="image"
          src={arrowRight}
          alt="Next slide button"
          onClick={() => button("next")}
          className={`${style.slideButton} ${style.slideButtonRight}`}
        />
      </section>

    </div>
  )
}

function Header() {

  return (
    <header className={style.header}>
      <h2 className={style.header__text}>
        <span style={{ color: '#ba5d2c' }}>/</span> Reviews
        </h2>
    </header>
  )
}

function Slide({ slide, pos }) {

  return (
    <main className={pos}>
      <img className={style.slide__img} src={slide.image} alt="" />
      <h4 className={style.slide__name}>{slide.name}</h4>
      <p className={style.slide__job}>{slide.job}</p>
      <p className={style.slide__text}>{slide.text}</p>
      <img className={style.quotationMark} src={quotationMark} alt="" />
    </main>
  )
}

export default Slider