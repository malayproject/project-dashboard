import React from "react";
import caretDownSvg from "../assets/Icons/Temp_3/caret-down.svg";
import commentPng from "../assets/Icons/Temp_3/Path 163.png";
import addPersonSvg from "../assets/Icons/Temp_3/Group 456.svg";
import arrowsSvg from "../assets/Icons/Temp_3/Group 457.svg";

const ProjectCard = (props) => {
  const { selectedIndex, projectName, index } = props;
  return (
    <div className="projectCard">
      <div className="projectCardHeader">
        <div className="projectCardHeaderLeft">
          <img src={caretDownSvg} alt="caret-down" width="16" />
        </div>
        <div className="projectCardHeaderRight">
          <div className="projectCardTitle">{projectName}</div>
          <div className="projectCardHeaderActions">
            <img src={commentPng} alt="comment" width="20" height="14" />
            <img src={addPersonSvg} alt="add person" width="22" height="auto" />
            <img src={arrowsSvg} alt="arrows" width="16" height="14" />
          </div>
        </div>
      </div>
      {selectedIndex === index && (
        <div className="projectCardBody">
          <div className="projectSection">
            <div className="projectSectionHeader">
              <div className="sectionHeaderLeft">
                <div className="sectionTitle">UI Design</div>
                <div className="sectionCount">3</div>
              </div>
              <div className="sectionHeaderRight">
                <img src={caretDownSvg} alt="arrows" width="16" />
              </div>
            </div>
            <div className="projectSectionRow">
              <input type="radio" />
              <div className="label">Research</div>
            </div>
            <div className="projectSectionRow">
              <input type="radio" />
              <div className="label">Layout</div>
            </div>
            <div className="projectSectionRow">
              <input type="radio" />
              <div className="label">Wireframe</div>
            </div>
          </div>
          <div className="projectSection">
            <div className="projectSectionHeader">
              <div className="sectionHeaderLeft">
                <div className="sectionTitle">Backend</div>
                <div className="sectionCount">1</div>
              </div>
              <div className="sectionHeaderRight">
                <img src={caretDownSvg} alt="arrows" width="16" />
              </div>
            </div>
            <div className="projectSectionRow">
              <input type="radio" />
              <div className="label">Database</div>
            </div>
            <div className="projectSectionRow">
              <input type="radio" />
              <div className="label">Data flow chart</div>
            </div>
            <div className="projectSectionRow">
              <input type="radio" />
              <div className="label">API development</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
