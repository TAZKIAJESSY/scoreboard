import React, { useState } from "react";

function AppPlayerForm(props) {
  const [name, set_name] = useState("");

  function submit(event) {
    event.preventDefault();

    props.addPlayer(name);
    //set_name("");
  }
  return (
    <div className="AddPlayerForm">
      <form>
        <label>New player Name:</label>
        <input
          onChange={(event) => {
            console.log("new input value:", event.target.value);
            set_name(event.target.value);
          }}
          type="text"
          placeholder="Name"
          value={name}
        />{" "}
        <button onClick={submit}>Add</button>
      </form>
    </div>
  );
}

export default AppPlayerForm;
