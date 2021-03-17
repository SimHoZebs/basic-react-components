import React, { useState } from "react";
import reviews from './css/reviews.module.css'
import reviewsData from './Reviews-data'

import quotationMarks from './media/right-quote-sign.png'
import arrowRight from './media/arrowRight.png'
import arrowLeft from './media/arrowLeft.png'

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
    console.log("current reviewer id is ", randomId);

    while (randomId === id) {
      randomId = Math.floor(Math.random() * (maxId)) + 1
    }

    console.log("changed reviewer id to ", randomId);
    setCurrentReviewId(prev => randomId)
  }

  return (
    <div className={reviews.appContainer}>
      < header className={reviews.header}>
        < p className={reviews.header__text}>Our Reviews</p>
        < div className={reviews.header__underline}></div>
      </header >
      <section className={reviews.card}>
        < ReviewerInfo
          key={id}
          id={id}
          image={image}
          name={name}
          job={job.toUpperCase()}
          text={text}
        />

        <footer className={reviews.card__footer}>
          < div className={reviews.card__arrowButtonContainer}>
            < input
              type="image"
              src={arrowLeft}
              alt=""
              className={reviews.card__arrowButton}
              onClick={() => nextReviewer(-1)}
            />

            < input
              type="image"
              src={arrowRight}
              alt=""
              className={reviews.card__arrowButton}
              onClick={() => nextReviewer(1)}
            />
          </div >

          <button className={reviews.card__surpriseMeButton} onClick={() => randomReviewer(id)}>surprise me</button>
        </footer >
      </section >
    </div >
  );
};

function ReviewerInfo(props) {
  return (
    <article className={reviews.info} id={props.id}>
      <picture className={reviews.info__picture}>
        <div className={reviews.info__imgDecorContainer} >
          <img src={quotationMarks} alt="" className={reviews.info__imgDecor} />
        </div >

        <img
          src={props.image}
          className={reviews.info__img}
          alt="Portrait of the reviewer"
        />
      </picture >

      <p className={reviews.info__name}>{props.name}</ p>
      <p className={reviews.info__job}>{props.job}</p>
      <p className={reviews.info__text}>{props.text}</p>
    </article >
  );
}

export default Reviews;
