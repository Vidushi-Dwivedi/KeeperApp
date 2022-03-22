import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [Items, setItems] = useState([]);

  function addItem(titleText, inputText) {
    setItems((prevItems) => {
      return [...prevItems, { title: titleText, content: inputText }];
    });
  }
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />

      {Items.map((Item, index) => (
        <Note
          key={index}
          id={index}
          title={Item.title}
          text={Item.content}
          delNote={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
