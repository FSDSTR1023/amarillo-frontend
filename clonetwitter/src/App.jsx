import { useState } from "react";
import "./App.css";
import Users from "./pages/Users";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {<h1>Test</h1>}
      {<Users />}
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
