import React, { useState, useEffect } from 'react'

import style from './css/ourTours.module.css'

export default function OurTours() {
  const [tourData, setTourData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchTourData() {
    const res = await fetch("https://course-api.com/react-tours-project");
    const json = await res.json();
    setTourData((prev) => json);
    setIsLoading((prev) => false);
  }

  useEffect(() => {
    fetchTourData();
  }, []);

  function removeCard(id) {
    setTourData((prev) => prev.filter((card) => card.id !== id));
  }
  function siteRefresh() {
    setIsLoading((prev) => true);
    fetchTourData();
  }

  return <div className={`${style.container} ${style.flexContainer} ${style.flexColumn} ${style.alignCenter}`}>
    <Header
      tourData={tourData}
      isLoading={isLoading}
      siteRefresh={siteRefresh}
    />

    {tourData.map((tour) => (
      <CardDisplay
        key={tour.id}
        id={tour.id}
        image={tour.image}
        name={tour.name}
        price={tour.price}
        info={tour.info}
        removeCard={removeCard}
      />
    ))}
  </div >
};

function Header({ tourData, isLoading, siteRefresh }) {
  return <header className={`${style.siteHeader} ${style.flexContainer} ${style.flexColumn} ${style.alignCenter}`}>
    {isLoading
      ? <p> Loading...</p>
      : tourData.length === 0
        ? <p>No Tours Left</p>
        : <p>Our Tours</p>}

    <div className={style.siteHeader__underline}></div>

    {tourData.length === 0 && (
      <button className={style.siteHeader__refresh} onClick={siteRefresh}> Refresh </button>
    )}
  </header >
}

function CardDisplay(props) {
  const [readMoreClicked, setReadmMoreClicked] = useState(false);
  const shortInfo = props.info.substr(0, 200);

  function showReadMore() {
    setReadmMoreClicked((prev) => (prev === true ? false : true));
  }

  return <article className={`${style.tourCard} ${style.flexContainer} ${style.flexColumn} ${style.alignCenter}`}>
    <img src={props.image} alt="" className={style.tourCard__image} />

    <header className={style.flexContainer}>
      <p className={style.tourCard__title}> {props.name}</p>
      <p className={style.tourCard__price}>${props.price}</p>
    </header>

    <p className={style.tourCard__summary}>
      {readMoreClicked ? props.info : shortInfo + "..."}

      <button className={style.tourCard__readMore} onClick={showReadMore}>
        {readMoreClicked ? "Show Less" : "Read More"}
      </button >
    </p >

    <button
      className={style.tourCard__notInterested}
      onClick={() => props.removeCard(props.id)}
    > Not Interested </button >
  </article >
}