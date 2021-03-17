import React, { useState } from 'react'
import accordion from './css/accordion.module.css'
import accordionData from './Accordion-data'

const minusSign = <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>

const plusSign = <svg stroke="currentColor" fill="currentColor" stroke-width="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" pId="10297" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" pId="10298"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" pId="10299"></path></svg>

const Accordion = () => {

  return (
    <section className={accordion.accordion}>
      {accordionData.map(card => <Card question={card.question} answer={card.answer} />
      )}
    </section>
  )
}

function Card(props) {
  const [cardOpened, setCardOpened] = useState(false)
  return <article>
    <header className={accordion.card__header}>
      <p className={accordion.card__question}>{props.question}</p>

      <button onClick={() => setCardOpened(cardOpened ? false : true)} >
        {cardOpened
          ? minusSign

          : plusSign
        }
      </button>
    </header>

    <p className={accordion.card__answer}>{cardOpened && props.answer}</p>
  </article>
}

export default Accordion
