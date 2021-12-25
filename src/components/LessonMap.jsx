import React from "react";
import ImgButton from "./ImgButton.jsx";

export default function LessonMap() {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title text-center">Карта Путешествия</h5>
        </div>
        {/* <iframe src="https://giphy.com/embed/2kMQxlmpgVGlxSvT23" width="180" height="108" frameBorder="0" className="align-center" allowFullScreen></iframe>  */}
        {/* <Image cloudName="ponttor" publicId="36444556_ts17zx" width="300" crop="scale" /> */}
        <div className="d-flex pt-3 flex-wrap justify-content-around">
          <ImgButton number={1} />
          <ImgButton number={2} />
        </div>
        <div className="d-flex pt-3 flex-wrap justify-content-around">
          <ImgButton number={3} />
          <ImgButton number={4} />
        </div>
        <div className="d-flex pt-3 flex-wrap justify-content-around">
          <ImgButton number={5} />
          <ImgButton number={6} />
        </div>
        <div className="d-flex pt-3 flex-wrap justify-content-around">
          <ImgButton number={7} />
          <ImgButton number={8} />
        </div>
        <div className="d-flex pt-3 flex-wrap justify-content-around">
          <ImgButton number={9} />
          <ImgButton number={10} />
        </div>
        <div className="d-flex pt-3 flex-wrap justify-content-around">
          <ImgButton number={11} />
          <ImgButton number={12} />
        </div>
        <div className="d-flex pt-3 flex-wrap justify-content-around">
          <ImgButton number={13} />
          <ImgButton number={14} />
        </div>
      </div>
    </div>
  );
}
