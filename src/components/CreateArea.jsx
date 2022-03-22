import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    if (event.target.name === "title") {
      setTitle(newValue);
    } else {
      setInputText(newValue);
    }
  }
  function addNote(event) {
    event.preventDefault();
    props.onAdd(title, inputText);
    setInputText("");
    setTitle("");
  }
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          value={inputText}
          onChange={handleChange}
          rows="3"
        />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
