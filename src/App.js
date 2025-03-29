import React, { useRef } from "react";
import photo1 from "./image/photo-1.avif";
import photo2 from "./image/photo-2.avif";
import photo3 from "./image/photo-3.avif";
import photo4 from "./image/photo-4.avif";
import "./index.css";

const App = () => {
  const parentDIv = useRef();
  let i = 0;
  let interval = setInterval(() => {
    if (i == "-75") {
      i = 0;
    } else {
      i = i - 25;
    }
    parentDIv.current.style.transform = `translate(${i}%,0px)`;
    parentDIv.current.style.transition = "all 0.5s linear 0s";
  }, 3000);
  const prevHandeler = () => {
    clearInterval(interval);
    if (i == 0) {
      i = -75;
    } else {
      i = i + 25;
    }

    parentDIv.current.style.transform = `translate(${i}%,0px)`;
    parentDIv.current.style.transition = "all 0.3s linear 0s";
  };
  const nextHandeler = () => {
    clearInterval(interval);
    if (i == "-75") {
      i = 0;
    } else {
      i = i - 25;
    }

    parentDIv.current.style.transform = `translate(${i}%,0px)`;
    parentDIv.current.style.transition = "all 0.3s linear 0s";
  };
  return (
    <>
      <div
        style={{
          height: "600px",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div
          style={{
            height: "85%",
            width: "33%",
            overflow: "hidden",
          }}
        >
          <div
            style={{ height: "100%", width: "400%", display: "flex" }}
            ref={parentDIv}
          >
            <div style={{ width: "100%", height: "100%" }}>
              <img
                src={photo1}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ width: "100%", height: "100%" }}>
              <img
                src={photo2}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ width: "100%", height: "100%" }}>
              <img
                src={photo3}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ width: "100%", height: "100%" }}>
              <img
                src={photo4}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            height: "5%",
            width: "33%",
          }}
        >
          <button type="button" className="btnHover" onClick={prevHandeler}>
            Prev
          </button>
          <button
            type="button"
            style={{ marginLeft: "2%" }}
            className="btnHover"
            onClick={nextHandeler}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
