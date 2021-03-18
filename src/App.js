import React, { useState } from "react";

import appData from './App-data'

import app from "./css/app.module.css"

const App = () => {
  const [CurrViewProject, setCurrViewProject] = useState(() => appData[0].component);

  function viewProject(id) {
    setCurrViewProject(prev => appData[id].component)
  }

  return <div className={app.container}>
    <div className={app.buttonsContainer}>

      {appData.map((project) =>
        <button
          onClick={
            () => viewProject(project.id)
          }
          className={app.button}
        >{project.name}</button>
      )}
    </div>

    <main className={app.projectContainer}>

      <CurrViewProject />
    </main>
  </div>
};

export default App;
