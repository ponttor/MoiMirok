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

  const isAuth = localStorage.getItem('token');
  console.log(`isAuth: ${isAuth}`);

  const pageRender = () => {
    isAuth ? history.replace("/") : history.replace("/login");
  };
  return (
    <>
      <Router history={history}>
        {pageRender()}
        <Switch>
          <Route exact path="/login">
          <Login />
          </Route>
          <Route exact path="/">
          <Chat />
          </Route>
          <Route exact path="*" component={Page404} />
        </Switch>
      </Router>

    </>
  );
};

export default App;
