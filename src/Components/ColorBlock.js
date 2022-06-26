import React from "react";
import { trace, isCssColor } from "../helper";

function ColorBlock(props) {
  const color = props.color;
  const isColor = isCssColor(color);

  trace(color)(isColor);
  return (
    <div className="colorBlock" style={{ backgroundColor: (isColor ? color : "white") }}>
      <p>{color.concat(isColor ? '' : ` (${color} is not a valid CSS color)`)}</p>
    </div>
  );
}


// Do not forget to export your component once you have built it!
export default ColorBlock;
