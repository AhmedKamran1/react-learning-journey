import React, { useState } from "react";
import UsersList from "./components/Users/UsersList";
import Wrapper from "./components/Helpers/Wrapper";

import AddUser from "./components/Users/AddUser";

function App() {
  const [userRecieved, setUserRecieved] = useState([]);
  const [viewHandler, setViewHandler] = useState(false);

  function newUser(user){
    setUserRecieved((prevState) =>{
      return [...prevState, user]
    });
    setViewHandler(true);
  }
  
  return (
    <Wrapper>
      <AddUser newUser={newUser}></AddUser>
      {viewHandler && (<UsersList users = {userRecieved}></UsersList>)}
    </Wrapper>
  );
}

export default App;
