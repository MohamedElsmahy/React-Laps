import { Route, Redirect, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Posts } from "./pages/Posts";
import { UserDetails } from "./pages/UserDetails";
import { Users } from "./pages/Users";
import { ContactUs } from "./pages/ContactUs";

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/users/:id">
            <UserDetails />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/contactUs">
            <ContactUs />
          </Route>
          <Route path="/">
            <Redirect to="/posts" />
          </Route>
        </Switch>
      </div>
    </>
  );
};