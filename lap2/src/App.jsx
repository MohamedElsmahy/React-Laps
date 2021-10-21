
import { useState } from "react";
import { ViewJobs } from "./components/ViewJobs";
import { AddJob } from "./components/AddJob";

export const App = () => {
  const [jobs, setJobs] = useState([]);

  const handleDelete = () => {
    setJobs([]);
  };

  // const handleDeleteBtn = () => {
  //   setJobs.splice(index, 1);
  // }

  const addjob = (newJob) => {
    setJobs([...jobs, newJob]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <AddJob addjob={addjob} />
        </div>
        <div className="col-6">
          <ViewJobs
            jobs={jobs}
            onDelete={handleDelete}
            // onDeleteBtn={handleDeleteBtn}
          />
        </div>
      </div>
    </div>
  );
};