import React, { useState, useEffect } from "react";
import axios from "axios";
import { port } from "../api.js";

const Users = () => {
  const [users, setUsers] = useState([]);

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    // Axios GET request to fetch users
    axios
      .get(`${port}/users`)
      .then((response) => {
        console.log(response.data);
        setUsers(response.data); // Set state with fetched user data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array ensures this runs once on mount

  // Render the fetched user data
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.first_name} {user.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
