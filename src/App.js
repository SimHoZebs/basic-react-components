import React, { useState } from "react";

import Reviews from "./Reviews";
import BirthdayReminder from "./BirthdayReminder";
import Accordion from "./Accordion"
import OurTours from './OurTours'

import app from "./css/app.module.css"

const App = () => {
  const projectList = [
    {
      id: 0,
      component: Reviews,
      name: "Reviews"
    },
    {
      id: 1,
      component: BirthdayReminder,
      name: "Birthday Reminder"
    },
    {
      id: 2,
      component: Accordion,
      name: "Accordion"
    },
    {
      id: 3,
      component: OurTours,
      name: "Our Tours"
    }
  ];

  const [CurrViewProject, setCurrViewProject] = useState(() => BirthdayReminder);

  function viewProject(id) {
    console.log(id);
    setCurrViewProject(prev => projectList[id].component)
  }

  return (
    <div >
      <div className={app.buttonsContainer}>

        {projectList.map((project) => (
          <button onClick={() => viewProject(project.id)}>{project.name}</button>
        ))}
      </div>

      <div className={app.projectContainer}>

        <CurrViewProject />
      </div>
    </div>
  );
};

export default App;
