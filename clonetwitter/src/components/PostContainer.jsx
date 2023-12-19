import axios from "axios";
import React, { useEffect, useState } from "react";
import { port } from "../api";
import Post from "./Post";

const PostContainer = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${port}/posts`)
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {posts.map((post) => (
              <Post content={post.content} key={post.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default PostContainer;
