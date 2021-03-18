import React, { useState, useEffect } from 'react'
import style from "./css/menu.module.css"
import menuData from "./Menu-data"

function Menu() {
  const [currView, setCurrView] = useState(menuData);

  function menuFilter(category) {
    setCurrView(prev => menuData.filter(item => (
      item.category !== category
    )))
  }

  return (
    <div className={style.page}>
      <Header></Header>
      <Navbar
        onClick={menuFilter}
      />

      <ItemList currView={currView} />

    </div>
  )
}

function Header() {
  return <header className={style.header}>
    <p className={style.header__text}>Our Menu</p>
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
    <button className={style.navbar__button}>All</button>

    {categories.map(category => (
      <button
        className={style.navbar__button}
        onClick={() => props.menuFilter(category)}
      >{category}</button>
    ))}
  </nav>
}

function ItemList(props) {

  return (
    <main className={style.itemList}>
      {props.currView.map(item => (
        <Item item={item} />
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
