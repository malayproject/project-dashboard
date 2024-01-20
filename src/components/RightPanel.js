import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const RightPanel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  // const projects

  return (
    <div className="rightPanel">
      <div className="rightPanelTabContainer">
        <div className="rightPanelTab selected">Projects</div>
        <div className="rightPanelTab">Today</div>
      </div>
      <div className="rightPanelBody">
        <div className="addAProject">+ add project</div>
        <div className="projectCards">
          <ProjectCard
            selectedIndex={selectedIndex}
            index={0}
            projectName="RMS"
            key={"4535"}
          />
          <ProjectCard
            selectedIndex={selectedIndex}
            index={1}
            projectName="Tatto"
            key={"7556"}
          />
          <ProjectCard
            selectedIndex={selectedIndex}
            index={2}
            projectName="Gradience Ticketing App"
            key={"3863"}
          />
          <ProjectCard
            selectedIndex={selectedIndex}
            index={3}
            projectName="Tatto"
            key={"8439"}
          />
          <ProjectCard
            selectedIndex={selectedIndex}
            index={4}
            projectName="Gradience Ticketing App"
            key={"1893"}
          />
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
