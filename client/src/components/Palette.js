import React, { useState } from "react";
import { send } from "../socketApi";

function Palette({activeColor}) {
  const [color, setColor] = useState('#969696')
  return (
    <div className="palette">
      <label htmlFor="colorInput">{color}</label>
      <input id="colorInput" style={{backgroundColor: color}} type="color" value={activeColor} onChange={(e)=>setColor(e.target.value)} />
      <button onClick={()=>send(color)}>Click</button>
      
    </div>
  );
}

export default Palette;
