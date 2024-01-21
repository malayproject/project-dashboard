import React, { useState, useContext } from "react";
import Post from "./Post";
import LineChart from "./LineChart";
import AddAPost from "./AddAPost";

const CentralPanel = () => {
  const [isApproved, setIsApproved] = useState(false);
  const [isRejected, setIsRejected] = useState(false);

  const [posts, setPosts] = useState([
    {
      id: 0,
      profilePicUrl: "../assets/Icons/Temp_3/person1.jpg",
      profileName: "Joe",
      postText: "Travel safe and have fun.",
      timeStamp: 1705744040000,
    },
    {
      id: 1,
      profilePicUrl: "../assets/Icons/Temp_3/person2.jpg",
      profileName: "Michael",
      postText: "Have a nice journey.",
      timeStamp: 1704954012120,
    },
    {
      id: 2,
      profilePicUrl: "../assets/Icons/Temp_3/person1.jpg",
      profileName: "Joe",
      postText:
        "dfg hi fdhg dfh  dfh ijvdvv g dfgd dfgfk df ijvdvv g dfgd dfgfk dfg dgd  ggfgd dfg hi fdhg dfh  dfh ijvdvv g dfgd dfgfk df ijvdvv g dfgd dfgfk dfg dgd  ggfgdg dg dg dfgfg dfg g gjfkg sgskf gfig ksgsrk kjrg",
      timeStamp: 1704454079230,
    },
  ]);

  const [chartPosts, setChartPosts] = useState([
    {
      id: 0,
      profilePicUrl: "../assets/Icons/Temp_3/person2.jpg",
      profileName: "Michael",
      postText:
        "Your team is been coming late very frequently. Look into it. Come and meet me.",
      timeStamp: 1704454039450,
    },
    {
      id: 1,
      profilePicUrl: "../assets/Icons/Temp_3/person2.jpg",
      profileName: "Michael",
      postText: "ish ig hifdfhgidfgh ieg iegh idgh",
      timeStamp: 1705684015330,
    },
  ]);

  const handleApprove = () => {
    if (isApproved) return;
    setIsApproved(true);
    setIsRejected(false);
  };

  const handleReject = () => {
    if (isRejected) return;
    setIsRejected(true);
    setIsApproved(false);
  };

  return (
    <div className="centralPanel">
      <div className="card">
        <div className="title">Your Leave Application</div>
        <div className="description">Sandeep Approved Your leave request</div>
        <div className="miscInfo">
          <div className="col1">
            <div className="label">Applied on</div>
            <div className="value">05/09/2021</div>
          </div>
          <div className="col2">
            <div className="label">From</div>
            <div className="value">08/09/2021</div>
            <div className="label">To</div>
            <div className="value">18/09/2021</div>
          </div>
          <div className="col3">
            <div className="label">Leave Type</div>
            <div className="value">Casual</div>
          </div>
        </div>
        <div className="posts">
          {posts.map((post, ind) => (
            <Post key={post.id} post={post} />
          ))}
          <AddAPost />
        </div>
        <div className="actions">
          {!isRejected && (
            <div
              className={isApproved ? "approved" : "approve"}
              onClick={handleApprove}
            >
              {isApproved ? "Approved" : "Approve"}
            </div>
          )}
          {!isApproved && (
            <div
              className={isRejected ? "rejected" : "reject"}
              onClick={handleReject}
            >
              {isRejected ? "Rejected" : "Reject"}
            </div>
          )}
        </div>
      </div>
      <div className="card">
        <div className="description">
          {"Quaterly Attendance report "}
          <div className="timeRange">Jan - March 2021</div>
        </div>
        <div className="reportCardBody">
          <div className="chartCanvas">
            <LineChart />
          </div>
          <div className="attendanceReportStats">
            <div className="reportStatsHeader">Attendance Report</div>
            <div className="weeklyStats">
              <div className="label">Weekly Analysis</div>
              <div className="value">1 Jan - 31 March</div>
            </div>
            <div className="hourlyStats">
              <div className="label">Hour Details</div>
              <div className="value">1000 hrs</div>
            </div>
            <div className="location">
              <div className="label">Location</div>
              <div className="value">Rajaji nagar</div>
            </div>
          </div>
        </div>
        <div className="posts">
          {chartPosts.map((post, ind) => (
            <Post key={post.id} post={post} />
          ))}
          <AddAPost />
        </div>
      </div>
    </div>
  );
};

export default CentralPanel;
