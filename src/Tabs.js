import React, { useState, useEffect } from 'react'
import axios from 'axios'

import style from './css/tabs.module.css'

function Tabs() {

  const [allTabsData, setAllTabsData] = useState()
  const [currTabData, setCurrTabData] = useState()
  const [isLoading, setIsLoading] = useState(true)

  async function fetchData() {
    const res = await axios.get("https://course-api.com/react-tabs-project")

    //console.log(res.data);
    console.log(res.data);
    setAllTabsData((prev) => res.data)
    setCurrTabData(prev => res.data[0])
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className={style.tabs}>
      {isLoading
        ? <IsLoadingText />
        : <>
          <Title />

          <main className={style.tabsMain}>
            <CompanyNav
              allTabsData={allTabsData}
              currTabData={currTabData}
              setCurrTabData={setCurrTabData}
            />
            <CompanyInfo currTabData={currTabData} />
          </main>
        </>

      }
    </div>
  )
}

function IsLoadingText() {
  return (
    <header className={style.isLoading}>
      <h2 className={style.isLoading__text}>Loading...</h2>
      <div className={style.isLoading__line}></div>
    </header>
  )
}

function Title() {
  return (
    <header className={style.title}>
      <h2 className={style.title__text}>Experience</h2>
      <div className={style.title__line}></div>
    </header>
  )
}

function CompanyNav(props) {

  return (
    <nav className={style.companyNav}>
      {props.allTabsData.map(entry => (
        <button
          key={entry.id}
          className={`${style.companyNav__btn} ${entry === props.currTabData && style.companyNav__btn_clicked}`}
          onClick={() => props.setCurrTabData(prev => entry)}
        >
          {entry.company}
        </button>
      ))}
    </nav>
  )
}

function CompanyInfo({ currTabData }) {
  let i = 0;

  return (
    <div className={style.info}>
      <h3 className={style.info__title}>{currTabData.title}</h3>
      <h4 className={style.info__company}>{currTabData.company}</h4>
      <div className={style.info__dates}>{currTabData.dates}</div>

      <ul className={style.info__duties}>
        {currTabData.duties.map(duty => {
          i++;
          return <li key={i} className={style.info__duty}>{duty}</li>
        })}
      </ul>
    </div>
  )
}

export default Tabs