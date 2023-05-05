import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Routing from "./routes/routes";

const App = () => {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
};

export default App;
