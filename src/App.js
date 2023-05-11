import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Routing from "./routes/routes";
import { SnackbarProvider } from "notistack";

const App = () => {
  return (
    <Provider store={store}>
      <SnackbarProvider
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        maxSnack={2}
      >
        <Routing />
      </SnackbarProvider>
    </Provider>
  );
};

export default App;
