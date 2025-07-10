// Projects.js
import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        <li>
          <Link to="/projects/123">Project 123</Link>
        </li>
        <li>
          <Link to="/projects/456">Project 456</Link>
        </li>
      </ul>
    </div>
  );
}
