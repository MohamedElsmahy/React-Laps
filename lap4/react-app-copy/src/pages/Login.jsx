import { useState } from "react";
import { Input } from "../components/Input";
import { useHistory , Redirect } from "react-router-dom";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidCred, setIsValidCred] = useState(true);

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    //Dummy code
    if (email === "smahy@gmail.com" && password === "123456") {
      localStorage.setItem("token", "12345");
      //   history.push("/main-page");
      history.replace("/main-page");
    } else setIsValidCred(false);
  };

  
  if (localStorage.key === "12345"){
    Redirect("/posts");
    console.log(email);
    console.log(password);
  } 

  return (
    <div className="d-flex justify-content-center">
      <form className="card p-3 col-6" onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          setValue={setPassword}
        />
        {!isValidCred && (
          <div className="alert alert-danger">Invalid login credentials</div>
        )}
        <button className="btn btn-primary">Log-in</button>
      </form>
    </div>
  );
};
// export const ContactUs = (props) => {
//   const [email, setEmail] = useState(" ");
//   const [message, setMessage] = useState(" ");

//   const History = useHistory();
//   const handleSubmit = () => {
//     History.push("/");
//     console.log(email);
//     console.log(message);
//   };

//   return (
//     <>
//         <div className="container">
//         <div className="card m-auto col-8" style={{ height: "50vh" }}>
//         <h1 className="text-center">Contact Us</h1>

//         <Input value={email} setValue={setEmail} label="Email" />
//         <Input value={message} setValue={setMessage} label="Message" />

//         <button onClick={handleSubmit} className="btn btn-primary">
//             Submit
//         </button>
//         </div>
//         </div>
//     </>
//   );
// };
