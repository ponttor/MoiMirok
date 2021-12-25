import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Image } from "cloudinary-react";
import img2 from "./gagarin.jpg";
import LessonMap from './LessonMap.jsx'

const Chat = () => {
  console.log('chat')
  return (
    <>
      <div className="d-flex justify-content-around align-items-center">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title text-center">Секретная страничка</h5>
          </div>
          <Image cloudName="ponttor" publicId="36444556_ts17zx" width="300" crop="scale" />
          <p className="card-text text-center ">
            Она доступна только для авторизованных участников. Здесь может быть
            карта курса, ссылки на уроки и любой функционал.
          </p>
        </div>
        <LessonMap />
      </div>
    </>
  );
};
export default Chat;
