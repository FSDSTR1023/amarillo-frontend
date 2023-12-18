import React, { useState, useEffect } from "react";
import axios from "axios";
import { port } from "../api";

const CreatePost = () => {
  const [postContent, setPostContent] = useState("");

  const handleChange = (event) => {
    setPostContent(event.target.value);
  };

  useEffect(() => {
    console.log("postContent updated:", postContent);
  }, [postContent]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${port}/posts`, {
        content: postContent,
        createdBy: "65781fa4aa659afffcc8cb2b", //just for testing,
      });
      if (response.status === 201) {
        // Handle success
        console.log("Post created successfully!");
        console.log("before reset", postContent);
        // Clear the content input after successful submission
        setPostContent("");
        console.log("after reset", postContent);
      } else {
        // Handle failure
        console.error("Failed to create post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      handle
      <input
        type="textarea"
        placeholder="What's happening?"
        name="content"
        value={postContent}
        onChange={handleChange}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-photo"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 8h.01" />
        <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
        <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
        <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
      </svg>
      <button type="submit">Post</button>
    </form>
  );
};

export default CreatePost;
