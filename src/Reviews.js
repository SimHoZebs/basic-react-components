import React, { useState } from "react";
import style from './css/reviews.module.css'
import reviewsData from './Reviews-data'

import quotationMarks from './media/right-quote-sign.png'
import arrowRight from './media/RightArrow.svg'
import arrowLeft from './media/LeftArrow.svg'

const Reviews = () => {
  const [currentReviewId, setCurrentReviewId] = useState(1);

  let { id, name, job, image, text } = reviewsData[currentReviewId - 1];

  function nextReviewer(idJump) {
    const maxId = reviewsData.length;

    setCurrentReviewId(prev => (
      (prev === 1 && idJump < 0)
        ? maxId
        : (prev === maxId && idJump > 0)
          ? 1
          : prev + idJump

    ))
  }

  function randomReviewer(id) {
    let randomId = id
    const maxId = reviewsData.length

    while (randomId === id) {
      randomId = Math.floor(Math.random() * (maxId)) + 1
    }

    setCurrentReviewId(prev => randomId)
  }

  return <div className={style.appContainer}>
    <header className={style.header}>
      <p className={style.header__text}>Our Reviews</p>
      <div className={style.header__underline}></div>
    </header>
    <section className={style.card}>
      < ReviewerInfo
        key={id}
        id={id}
        image={image}
        name={name}
        job={job.toUpperCase()}
        text={text}
      />

      <footer className="card__footer"></footer>

      <footer className={style.card__footer}>
        <div className={style.card__arrowButtonContainer}>
          <input
            type="image"
            src={arrowLeft}
            alt=""
            className={style.card__arrowButton}
            onClick={() => nextReviewer(-1)}
          />

          <input
            type="image"
            src={arrowRight}
            alt=""
            className={style.card__arrowButton}
            onClick={() => nextReviewer(1)}
          />
        </div >

        <button className={style.card__surpriseMeButton} onClick={() => randomReviewer(id)}>surprise me</button>
      </footer>
    </section>
  </div>
};

function ReviewerInfo(props) {
  return <article className={style.info} id={props.id}>
    <picture className={style.info__picture}>
      <div className={style.info__imgDecorContainer} >
        <img src={quotationMarks} alt="" className={style.info__imgDecor} />
      </div>

      <img
        src={props.image}
        className={style.info__img}
        alt="Portrait of the reviewer"
      />
    </picture>

    <p className={style.info__name}>{props.name}</p>
    <p className={style.info__job}>{props.job}</p>
    <p className={style.info__text}>{props.text}</p>
  </article>
}

export default Reviews;
