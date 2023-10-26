import { useState } from "react";
import { Link } from "react-router-dom";

function TopicCards({ setTopic }) {
  return (
    <ul>
      <li onClick={() => setTopic("coding")}>
        <Link to="/">
          <h1>coding</h1>
        </Link>
      </li>
      <li onClick={() => setTopic("cooking")}>
        <Link to="/">
          <h1>cooking</h1>
        </Link>
      </li>
      <li
        style={{ border: "solid 1px red" }}
        onClick={() => setTopic("football")}
      >
        <Link to="/">
          <h1>football</h1>
        </Link>
      </li>
    </ul>
  );
}

export default TopicCards;
