import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const singleColor = ({ index, rgb, weight, hex }) => {
  const bcg = rgb.join(",");
  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">%{weight}</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};

export default singleColor;
