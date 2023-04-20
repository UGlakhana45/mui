import React, { createContext } from "react";
import Routing from "./routes/routes";

export const UserContext = createContext();
const App = () => {
  const [users, setUsers] = React.useState([]);
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      <Routing />
    </UserContext.Provider>
  );
};

export default App;
