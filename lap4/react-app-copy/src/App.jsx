import { Route, Redirect, Switch } from "react-router-dom";
import { Login, Posts , UserDetails , MainPage , Users} from "./pages";
import { ProtectedRoute } from "./components";

export const App = () => {
  return (
    <>
      <div className="container-fluid">
        <Switch>
            <Route path="/login">
              <Login />
            </Route>

            <ProtectedRoute path="/main-page">
              <MainPage />
            </ProtectedRoute>

            <Route path="/posts">
              <Posts />
            </Route>

            <ProtectedRoute path="/users/:id">
              <UserDetails />
            </ProtectedRoute>

            <ProtectedRoute path="/users">
              <Users />
            </ProtectedRoute>
 
            <Route path="/">
              <Redirect to="/login" />
            </Route>
        </Switch>
      </div>
    </>  
  );
};