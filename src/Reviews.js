import React, { useState } from "react";
import reviews from './css/reviews.module.css'

const reviewsDataOrigin = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text:
      'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text:
      'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text:
      'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState(reviewsDataOrigin);
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
              src="https://www.flaticon.com/svg/vstatic/svg/271/271220.svg?token=exp=1615806852~hmac=aa9c89d56c86abe9f052e7a8d1701bb5"
              alt=""
              className={reviews.card__arrowButton}
              onClick={() => nextReviewer(-1)}
            />

            < input
              type="image"
              src="https://www.flaticon.com/svg/vstatic/svg/271/271228.svg?token=exp=1615806852~hmac=c52d11b5a4942c684f2c0fddb28333f6"
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
          <img src="https://www.flaticon.com/svg/vstatic/svg/32/32194.svg?token=exp=1615813800~hmac=222b5810a87052c7181c70b780e95fa2" alt="" className={reviews.info__imgDecor} />
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
