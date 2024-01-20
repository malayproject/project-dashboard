import React, { useContext } from "react";
import UserContext from "./UserContext";

const AddAPost = () => {
  const user = useContext(UserContext);
  return (
    <div className="addAPost" style={{ display: "flex" }}>
      <div
        className="profilePicContainer"
        style={{
          flexBasis: "8%",
          flexGrow: 1,
          flexShrink: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={user?.profilePic}
          alt="profile pic"
          style={{ opacity: 0.5 }}
        />
      </div>
      <input
        className="postCard"
        type="text"
        placeholder="Reply"
        style={{
          width: "80%",
          border: "none",
          borderRadius: "1rem",
          height: "7rem",
          flexBasis: "92%",
          flexGrow: 1,
          flexShrink: 1,
          backgroundColor: "#f1f1f1",
          fontSize: "1.7rem",
          padding: "0 0 0 4rem",
        }}
      />
    </div>
  );
};

export default AddAPost;
