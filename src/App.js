import React from "react";
import { Provider } from "react-redux";
import Routing from "./routes/routes";
import { SnackbarProvider } from "notistack";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SnackbarProvider
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          maxSnack={2}
        >
          <Routing />
        </SnackbarProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
