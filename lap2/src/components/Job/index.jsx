// import { Card } from "../Card";

export const List = (props) => {
  return (
    // <Card>
    <div>
        <div>
          <h4>{props.title}</h4>
          <p>{props.details}</p>
          <button className="btn btn-primary" onClick={props.onDeletedBtn}>delete</button>
        </div>
    </div> 
    // </Card>
  );
};
