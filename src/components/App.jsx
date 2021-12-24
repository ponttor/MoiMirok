import React, {useContext} from "react";
import { createBrowserHistory } from "history";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import AuthContext from "../AuthContext.js";
import Login from "./Login.jsx";
import Page404 from "./NotFoundPage.jsx";
import Chat from "./Chat.jsx";

const App = ({ socket }) => {
  const history = createBrowserHistory();
  // const {isAuth} = useContext(AuthContext);
  window.socket = socket;

  const token = localStorage.getItem('token');
  // if (!token) {
  //   return <Redirect to='/login' />
  // }
  console.log(token);

  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/login">
          {token ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path="/">
          {!token ? <Redirect to="/login" /> : <Chat />}
          </Route>
          <Route exact path="*" component={Page404} />
        </Switch>
      </Router>

    </>
  );
};

export default App;
