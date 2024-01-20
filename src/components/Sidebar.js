import React, { useContext } from "react";
import UserContext from "./UserContext";

const Sidebar = () => {
  const user = useContext(UserContext);
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
      <div className="profileContainer">
        <img
          src={user?.profilePic}
          alt="profile img"
          style={{
            width: "5.4rem",
            borderRadius: "50%",
            border: "0.3rem solid green",
            boxShadow: "0 0.7rem 0.6rem 0rem #c6c6c6 ",
          }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
