import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logoContainer">
        <div className="logo">tazq</div>
      </div>
      <div className="sidebarTabs">
        <div className="sidebarTab">HR</div>
        <div className="sidebarTab">SA</div>
        <div className="sidebarTab">LO</div>
        <div className="sidebarTab">RE</div>
      </div>
      <div className="profileContainer"></div>
    </div>
  );
};

export default Sidebar;
