import React, { useState } from 'react'
import style from './css/accordion.module.css'
import { accordionData, plusSign, minusSign } from './Accordion-data'

const Accordion = () => {

  return <div className={style.container}>
    <main className={style.accordion}>

      <header className={style.accordion__header}>
        Questions And Answers About Login
      </header>
      <section className={style.cardContainer}>
        {accordionData.map(card =>
          <Card
            question={card.question}
            answer={card.answer}
          />
        )}
      </section>
    </main>
  </div>
}


function Card(props) {
  const [cardOpened, setCardOpened] = useState(false)
  return <article className={style.card}>
    <header className={style.card__header}>
      <p className={style.card__question}>{props.question}</p>

      <button
        onClick={() => setCardOpened(cardOpened ? false : true)}
        className={style.card__button}
      >

        {cardOpened
          ? minusSign

          : plusSign
        }
      </button>
    </header>

    <p className={style.card__answer}>{cardOpened && props.answer}</p>
  </article>
}

export default Accordion
