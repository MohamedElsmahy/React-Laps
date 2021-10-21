import { Card } from "../Card";

export const List = (props) => {
  return (
    <Card>
    <div>

      <h4>{props.title}</h4>
      <p>{props.details}</p>
      
    </div> 
    </Card>
  );
};
