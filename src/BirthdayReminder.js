import React, { useEffect, useState } from 'react'
import axios from 'axios';

import style from './css/birthdayReminder.module.css'

const BirthdayReminder = () => {
  const [people, setPeople] = useState();
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    let tempList = [];
    while (tempList.length < Math.floor(Math.random() * (5)) + 1) {
      const res = await axios("https://randomuser.me/api/")
      const data = res.data.results[0];
      const result = {
        id: data.cell,
        age: data.dob.age,
        name: data.name,
        img: data.picture.large
      }

      tempList.push(result);
    }
    console.log(tempList);
    setPeople(prev => tempList);
    setIsLoading(prev => false);
  }

  function clearAll() {
    setPeople((prev) => []);
  }

  function refresh() {
    setIsLoading(prev => true);
    getData();
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className={style.container}>
      <main className={style.birthdayReminder}>
        {isLoading
          ? <IsLoadingHeader />
          : <>
            <MainView people={people} clearAll={clearAll} refresh={refresh} />
            <Button people={people} clearAll={clearAll} refresh={refresh} />
          </>
        }
      </main >
      <p className={style.container__info}>User information is from <a href="https://randomuser.me" target="_blank" rel="noreferrer">randomuser.me</a> </p>
    </div>
  )
};

function IsLoadingHeader() {
  return (
    <header className={style.loadingHeader}>
      <h2 className={style.loadingHeader__text}>Loading...</h2>
    </header>
  )
}

function MainView({ people }) {

  return (
    <section className={style.mainView}>
      <header className={style.mainView__header}>
        {people.length} birthday{people.length !== 1 && "s"} today
      </header>

      <PersonBlock people={people} />
    </section>
  )
}
function PersonBlock({ people }) {

  return (
    people.map((person) => (
      <div key={person.id} className={style.personBlock}>
        <img src={`${person.img}`} alt="profile" className={style.personBlock__image} />

        <span className={style.personBlock__text}>
          <h3 className={style.personBlock__name}>{`${person.name.first} ${person.name.last}`}</h3>
          <h5 className={style.personBlock__age}>{person.age} years</h5>
        </span>
      </div>
    ))
  )
}

function Button({ people, clearAll, refresh }) {
  return (
    <div>
      <button className={style.button} onClick={refresh}>Refresh</button>
      {people.length !== 0 && <button className={style.button} onClick={clearAll}>Clear All</button>}
    </div>
  )
}

export default BirthdayReminder