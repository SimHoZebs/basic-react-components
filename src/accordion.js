import React, { useState } from 'react'
import accordion from './accordion.module.css'

const Accordion = () => {
  const qna = [
    new qnaFormat(
      "Do I have to allow the use of cookies?",
      "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."
    ),

    new qnaFormat(
      "How do I change my My Page password?",
      "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse."
    ),

    new qnaFormat(
      "What is BankID?",
      "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial."
    ),

    new qnaFormat(
      "Whose birth number can I use?",
      "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify."
    ),

    new qnaFormat(
      "When do I recieve a password ordered by letter?",
      "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan"
    )
  ]

  return (
    <section className={accordion.accordion}>
      {qna.map(card => <Card question={card.question} answer={card.answer} />
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
          ? <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>

          : <svg stroke="currentColor" fill="currentColor" stroke-width="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" pId="10297" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" pId="10298"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" pId="10299"></path></svg>
        }
      </button>
    </header>

    <p className={accordion.card__answer}>{cardOpened && props.answer}</p>
  </article>
}

class qnaFormat {

  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
}
export default Accordion
