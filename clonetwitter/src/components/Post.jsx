import React from "react";

const Post = ({ content, key }) => {
  return (
    <div key={key}>
      <img alt="test" />
      <p>{content}</p>
    </div>
  );
};

export default Post;
