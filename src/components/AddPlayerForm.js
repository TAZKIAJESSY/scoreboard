import React, { useState } from "react";

function AppPlayerForm(props) {
  const [name, set_name] = useState("");

  function addHere(event) {
    event.preventDefault();

    props.addPlayer(name);
    set_name("");

    // if (!name) {
    //   window.alert("Hey fill in the entire form!");
    // } else {
    //   props.addPlayer(name);
    //   set_name("");
    // }
  }
  return (
    <div className="AddPlayerForm">
      <form onSubmit={addHere}>
        <label>New player Name:</label>
        <input
          onChange={(event) => {
            console.log("new input value:", event.target.value);
            set_name(event.target.value);
          }}
          type="text"
          placeholder="Name"
          value={name}
          required
        />{" "}
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AppPlayerForm;
