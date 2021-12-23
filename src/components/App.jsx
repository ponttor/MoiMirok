import React from "react";
import { createBrowserHistory } from "history";
import { Switch, Route, Router } from "react-router-dom";
import Login from "./Login.jsx";
import Page404 from "./NotFoundPage.jsx";
import Chat from "./Chat.jsx";

const App = ({ socket }) => {
  const history = createBrowserHistory();

  window.socket = socket;

  const token = localStorage.getItem('token');
  console.log(token);

  return (
    <>
      <Router history={history}>
          {token
          ? history.replace({ pathname: '/' })
          : history.replace({ pathname: '/login' })}
        <Switch>
          <Route exact path="/">
            <Chat
            />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="*" component={Page404} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
