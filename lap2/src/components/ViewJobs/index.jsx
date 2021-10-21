import { List } from "../Job";

export const ViewJobs = (props) => {
  return (
    <div className="card p-2 m-2" style={{ height: "95vh" }}>
      <h1>Hello from the to-do-list</h1>
      <button className="btn btn-danger m-2" onClick={props.onDelete}>
        Delete
      </button>
      <span><button className="delete is-pulled-right" onClick={props.onDeleteBtn}></button></span>
      {props.jobs.map((p) => (
        <List title={p.title} details={p.details} deletedBtn={p.deletedBtn}/>
      ))}
      
    </div>
  );
};
