import React from "react";
import fourSquareSvg from "../assets/Icons/Temp_3/four-squares-10576.svg";

const MainHeader = () => {
  return (
    <div className="mainHeader">
      <div className="userHeaderContainer">
        <div className="userHeader">
          <img
            src={fourSquareSvg}
            alt=""
            width="18"
            style={{ filter: "blur(0.5px)" }}
          />
          Ashutosh Bhardwaj
        </div>
      </div>
      <div className="timelineHeaderContainer">
        <div className="timelineHeader">Timeline</div>
      </div>
      <div className="tasksHeaderContainer">
        <div className="tasksHeader">Task</div>
      </div>
    </div>
  );
};

export default MainHeader;
