import React, { useState, useEffect } from "react";
// import rgbToHex from "./utils"; >> an external fn() to turn rgb value to hex value. her we using direct hex value provided from Value.js liberary.

const SingleColor = ({ index, rgb, weight, hex }) => {
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [alert]);

  const bcg = rgb.join(",");
  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(`#${hex}`);
      }}
    >
      <p className="percent-value">%{weight}</p>
      <p className="color-value">#{hex}</p>
      {alert && <p className="alert">copy to clipboard</p>}
    </article>
  );
};

export default SingleColor;
