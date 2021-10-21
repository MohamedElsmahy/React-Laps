import { useState } from "react";
import { Input } from "../Input";

export const AddJob = (props) => {
  const [title, setTitle] = useState("Please enter job title");
  const [details, setDetails] = useState("Please enter job details");

  const handleSubmit = () => {
    console.log("Calling to backend service");
    props.addjob({ title, details });
  };

  return (
    <div className="card p-3 m-2" style={{ height: "95vh" }}>
      <h1>Add Job</h1>

      <Input value={title} setValue={setTitle} label="Title" />
      <Input value={details} setValue={setDetails} label="details" />

      <button onClick={handleSubmit} className="btn btn-primary">
        Add Job
      </button>
    </div>
  );
};
