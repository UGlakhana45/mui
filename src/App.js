import React, { createContext } from "react";
import Routing from "./routes/routes";
import Signin from "./ref/signin";

export const UserContext = createContext();
const App = () => {
  const [user, setUser] = React.useState([]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routing />
    </UserContext.Provider>
  );
};

export default App;
