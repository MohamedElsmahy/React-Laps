import { useState } from "react";
import { Input } from "../components/Input";
import { useHistory } from "react-router-dom";

export const ContactUs = (props) => {
  const [email, setEmail] = useState(" ");
  const [message, setMessage] = useState(" ");

  const History = useHistory();
  const handleSubmit = () => {
    History.push("/");
    console.log(email);
    console.log(message);
  };

  return (
    <>
        <div className="container">
        <div className="card m-auto col-8" style={{ height: "50vh" }}>
        <h1 className="text-center">Contact Us</h1>

        <Input value={email} setValue={setEmail} label="Email" />
        <Input value={message} setValue={setMessage} label="Message" />

        <button onClick={handleSubmit} className="btn btn-primary">
            Submit
        </button>
        </div>
        </div>
    </>
  );
};
