import React, {useContext, useState} from "react";
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

  const [token, setToken] = useState(localStorage.getItem('token')) 

  // const token = localStorage.getItem('token');
  // if (!token) {
  //   return <Redirect to='/login' />
  // }
  console.log(token);

  const isAuth = token;
  console.log(`isAuth: ${isAuth}`);

  const pageRender = () => {
    isAuth ? history.push("/") : history.push("/login");
  };
  console.log(isAuth)

  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/login">
          <Login setToken={setToken}/>
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
