import React, { useState } from "react";

const CentralPanel = () => {
  const [isApproved, setIsApproved] = useState(false);
  const [isRejected, setIsRejected] = useState(false);

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
    </div>
  );
};

export default CentralPanel;
