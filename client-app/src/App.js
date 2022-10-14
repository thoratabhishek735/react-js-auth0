import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import routes from "./routes";
import { RouterProvider } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store, persistor } from "./modules";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";


import CustomRoute from "./routes/CustomRoute";

function App() {

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={routes} />
          <CustomRoute />
          <ToastContainer />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
