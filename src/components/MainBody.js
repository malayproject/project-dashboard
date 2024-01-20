import React from "react";
import LeftPanel from "./LeftPanel";
import CentralPanel from "./CentralPanel";
import RightPanel from "./RightPanel";

const MainBody = () => {
  return (
    <div className="mainBody">
      <LeftPanel />
      <CentralPanel />
      <RightPanel />
    </div>
  );
};

export default MainBody;
