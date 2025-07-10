// Dashboard.js
import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the Project Management App!</p>
      <Link to="/projects">View Projects</Link>
    </div>
  );
}
