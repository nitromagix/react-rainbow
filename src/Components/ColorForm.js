import React, { useState } from "react";

function ColorForm(props) {
  const [theInput, setTheInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addColor(theInput);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTheInput(e.target.value)} />
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
}

export default ColorForm;
