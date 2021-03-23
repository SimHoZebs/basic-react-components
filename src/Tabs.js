import React, { useState, useEffect } from 'react'
import axios from 'axios'

import style from './css/tabs.module.css'

function Tabs() {

  const [currViewData, setCurrViewData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  let data

  async function fetchData() {
    const res = await axios.get("https://course-api.com/react-tabs-project")

    data = res.data;
    setCurrViewData(prev => data[0])
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData();
    console.log("useEffect");
  }, [])


  return (
    <div className={style.tabs}>
      {isLoading
        ? <IsLoadingText />
        : <div>
          <div className={style.company}>{currViewData.company}</div>
          <div className={style.dates}>{currViewData.dates}</div>
          <div className={style.duties}>{currViewData.duties}</div>
          <div className={style.id}>{currViewData.id}</div>
          <div className={style.order}>{currViewData.order}</div>
          <div className={style.title}>{currViewData.title}</div>
        </div>
      }
    </div>
  )
}

function IsLoadingText() {
  return (
    <div className={style.isLoading}>
      <p className={style.isLoading__text}>Loading...</p>
      <div className={style.isLoading__underline}></div>
    </div>
  )
}

function Title() {
  return (
    <div className={style.title}>
      <p></p>
    </div>

  )
}
export default Tabs