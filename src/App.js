import { useState } from "react";

import { Header } from "./components/header";
import { About } from "./components/about";
import { Projects } from "./components/projects";

import "./index.css";

const VIEW_TO_COMP = {
  ABOUT: About,
  PROJECTS: Projects
};

export default function App() {
  const [viewType, setViewType] = useState("ABOUT");

  const BodyComp = VIEW_TO_COMP[viewType];

  return (
    <div className="App">
      <Header viewType={viewType} handleViewUpdate={setViewType} />
      <BodyComp />
    </div>
  );
}
