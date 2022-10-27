import React from "react";
import { useState } from "react";

function Home() {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    setText("");
  };
  return (
    <>
      <div>
        <h1>To Do</h1>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" value={text} onChange={onChange} />
          <button type="submit">Add</button>
        </form>
      </div>
      <ul></ul>
    </>
  );
}

export default Home;
