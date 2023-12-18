import { useState } from "react";
import "./App.css";
import Users from "./pages/Users";
import Button from "./components/Button";
import CreatePost from "./components/CreatePost";
import EmailLogin from "./pages/EmailLogin";

function App() {
  return (
    <>
      {/* {<h1>Test</h1>} */}
      {<Users />}
      {/* <Button />
      <CreatePost /> */}
      <EmailLogin />
      <CreatePost />

      {/* <Navbar /> */}
      {/* <MainContainer>
      <Posts>
      <Post/>
      </Posts>
      or 
      <Users>
      <User/>
      </Users>
      </MainContainer> */}
      {/* <SearchBar />
      <ProfileButton /> */}
    </>
  );
}

export default App;
