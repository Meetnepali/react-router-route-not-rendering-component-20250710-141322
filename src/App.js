// App.js: Root application with routes
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Projects from "./Projects";
import Project from "./Project";
import ProjectDetails from "./ProjectDetails";
import ProjectTasks from "./ProjectTasks";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:projectId" element={<Project />}></Route>
        {/* Misconfigured: subroutes are missing here, so nested routes are not rendered */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
