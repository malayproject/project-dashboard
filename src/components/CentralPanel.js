import React, { useState } from "react";
import Post from "./Post";
import LineChart from "./LineChart";

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
        "khg kdgkhg ghdlh kldfah. dh gkdfhgkdfhifdhg dfh igh dfgb kfgh sgukssgh kf gjkdfg skgjfkg sgskf gfig ksgsrkjrg",
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
          <div className="attendanceReportStats"></div>
        </div>
        <div className="posts">
          {chartPosts.map((post, ind) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CentralPanel;
