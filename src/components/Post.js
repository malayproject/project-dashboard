import React from "react";
import person1Jpg from "../assets/Icons/Temp_3/person1.jpg";
import person2Jpg from "../assets/Icons/Temp_3/person2.jpg";
import { formatDistance } from "date-fns";

const Post = (props) => {
  const { post = {} } = props;
  console.log("url", post.profilePicUrl);
  return (
    <div className="post">
      <div className="profilePicContainer">
        <img
          src={post?.profileName === "Joe" ? person1Jpg : person2Jpg}
          alt="profile pic"
          //   width="24"
        />
      </div>
      <div className="postCard">
        <div className="postCardTop">
          <div className="postName">{post?.profileName}</div>
          <div className="postedAt">
            {formatDistance(new Date(post?.timeStamp), new Date(), {
              addSuffix: true,
            })}
          </div>
        </div>
        <div className="postCardBottom">{post?.postText}</div>
      </div>
    </div>
  );
};

export default Post;
