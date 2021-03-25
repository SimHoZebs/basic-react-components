import React, { useState } from "react";

import appData from './App-data'

import style from "./css/app.module.css"

const App = () => {
  const [CurrViewProject, setCurrViewProject] = useState(() => appData[0].component);

  function viewProject(id) {
    setCurrViewProject(prev => appData[id].component)
  }

  return <div className={style.container}>
    <div className={style.buttonsContainer}>

      {appData.map((project) =>
        <button
          key={project.id}
          onClick={
            () => viewProject(project.id)
          }
          className={style.button}
        >{project.name}</button>
      )}
    </div>

    <main className={style.projectContainer}>

      <CurrViewProject />
    </main>
  </div>
};

export default App;
