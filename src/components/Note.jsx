import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <button
        onClick={() => {
          props.delNote(props.id);
        }}
      ></button>
    </div>
  );
}

export default Note;
