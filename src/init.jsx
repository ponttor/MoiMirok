import React, { useState } from "react";
import i18next from "i18next";
import { io } from "socket.io-client";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import resources from "./locales/index.js";
import AuthContext from "./AuthContext.js";
import App from "./components/App.jsx";

export default () => {
  // if (process.env.NODE_ENV !== 'production') {
  //   localStorage.debug = 'chat:*';
  // }
    
    const socket = io();


    i18next.init({
      lng: "ru",
      debug: true,
      resources,
    });

  ReactDOM.render(
      <AuthContext.Provider
        value={{
          isAuth: false,
        }}
      >
        <App socket={socket} />
      </AuthContext.Provider>,
    document.getElementById('chat'),
  );
};
