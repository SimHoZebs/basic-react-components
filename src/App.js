import React, { useState } from "react";

import Reviews from "./Reviews";
import BirthdayReminder from "./BirthdayReminder";


const App = () => {
  const projectList = [Reviews, BirthdayReminder];

  const [CurrViewProject, setCurrViewProject] = useState(() => Reviews);

  function viewProject(project) {
    setCurrViewProject(prev => project)
  }

  return (
    <div>
      {projectList.map((project) => (
        <button onClick={() => viewProject(project)}>{project.name}</button>
      ))}

      <div>

        <CurrViewProject />
      </div>
    </div>
  );
};

export default App;
