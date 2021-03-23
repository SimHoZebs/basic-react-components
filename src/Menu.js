import React, { useState, useEffect } from 'react'
import style from "./css/menu.module.css"
import menuData from "./Menu-data"

function Menu() {
  const [categoryData, setCategoryData] = useState(menuData);
  const [currCategory, setCurrCategory] = useState()

  useEffect(() => {
    setCurrCategory(document.getElementById("all"))
  }, [])

  function categoryButtonClick(category) {
    currCategory.classList.remove(style.navbar__button_clicked)
    if (category === undefined) {
      setCategoryData(prev => menuData);
      setCurrCategory(prev => document.getElementById("all"))
    }
    else {
      setCategoryData(prev => menuData.filter(item => item.category === category))
      setCurrCategory(prev => document.getElementById(`${category}`))
    }

    setCurrCategory(prev => { prev.classList.add(style.navbar__button_clicked); return prev })
  }

  return (
    <div className={style.menu}>
      <Header />
      <Navbar
        categoryButtonClick={categoryButtonClick}
        currCategory={currCategory}
        setCurrCategory={setCurrCategory}
      />

      <ItemList currView={categoryData} />

    </div>
  )
}

function Header() {
  return <header className={style.header}>
    <h2 className={style.header__text}>Our Menu</h2>
    <div className={style.header__underline}></div>
  </header>
}

function Navbar(props) {
  let categories = []

  menuData.forEach((menu) => {
    const category = menu.category
    if (!categories.includes(category)) {
      categories.push(category)
    }
  })

  return <nav className={style.navbar}>
    <button
      id="all"
      className={`${style.navbar__button} ${style.navbar__button_clicked}`}
      onClick={() => props.categoryButtonClick()}
    >All</button>

    {categories.map(category => (
      <button
        key={category}
        id={category}
        className={style.navbar__button}
        onClick={() => (props.categoryButtonClick(category))}
      >{category}</button>
    ))}
  </nav>
}

function ItemList(props) {

  return (
    <main className={style.itemList}>
      {props.currView.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </main>
  )

  function Item({ item }) {

    return (

      <article className={style.item} >
        <img src={item.img} className={style.item__img} alt="" />

        <section className={style.item__section}>
          <header className={style.item__header}>
            <p className={style.item__title}>{item.title}</p>
            <p className={style.item__price}>${item.price}</p>
          </header>
          <p className={style.item__desc}>{item.desc}</p>
        </section>
      </article>
    )
  }

}
export default Menu
