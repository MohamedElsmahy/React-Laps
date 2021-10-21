import { List } from "../Job";

export const ViewJobs = (props) => {

  const handleDeleteBtn = (e) => {
    e.target.parentElement.remove(); 
  }

  return (
    <div className="card p-2 m-2" style={{ height: "95vh" }}>
      <h1>to-do-list</h1>
      <button className="btn btn-danger m-2" onClick={props.onDelete}>
        Delete
      </button>
      {/* <button className="btn btn-primary" onClick={handleDeleteBtn}>delete</button> */}

      {props.jobs.map((p) => (
        <List title={p.title} details={p.details} onDeletedBtn={handleDeleteBtn}/>
      ))}
      
    </div>
  );

};
