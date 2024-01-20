import React from "react";
import homeSvg from "../assets/Icons/Temp_3/Group 1145.svg";
import userSvg from "../assets/Icons/Temp_3/Group 1149.svg";
import bellSvg from "../assets/Icons/Temp_3/Group 1146.svg";

const LeftPanel = () => {
  return (
    <div className="leftPanel">
      <div className="upperSection">
        <div className="panelTab selected">
          <div className="panelTabIconContainer">
            <img src={homeSvg} alt="home" width="24" />
          </div>

          <span>Timeline</span>
        </div>
        <div className="panelTab">
          <div className="panelTabIconContainer">
            <img src={bellSvg} alt="bell" width="15" />
          </div>
          <span>Notifications</span>
        </div>
        <div className="panelTab">
          <div className="panelTabIconContainer">
            <img src={userSvg} alt="user" width="15" />
          </div>
          <span>Profile</span>
        </div>
      </div>
      <div className="lowerSection">
        <div className="checkInBtn">Check In</div>
        <div className="lastCheckInInfo">
          <span>Last check out</span>
          <div className="lastCheckOutTime">{`08:30 PM Fri 13th Aug 2021`}</div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
