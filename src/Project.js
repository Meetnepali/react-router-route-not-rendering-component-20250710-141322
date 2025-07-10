// Project.js
import React from "react";
import { useParams, Link } from "react-router-dom";

export default function Project() {
  const { projectId } = useParams();
  return (
    <div>
      <h2>Project {projectId}</h2>
      <nav>
        <Link to={`/projects/${projectId}/details`}>Details</Link> |{' '}
        <Link to={`/projects/${projectId}/tasks`}>Tasks</Link>
      </nav>
      {/* Placeholder for sub-routes */}
    </div>
  );
}
