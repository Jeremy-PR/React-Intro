import React from "react";
import Click from "../Click";

function Hello({ firstName, lastName }) {
  return (
    <section>
      <h1>
        Hello {firstName} {lastName} !
      </h1>
      <Click />
    </section>
  );
}

export default Hello;
