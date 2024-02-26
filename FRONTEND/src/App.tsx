import { RouterProvider } from "react-router-dom";
import { mainrouter } from "./Router/mainrouter";
import { Provider } from "react-redux";
import { store } from "./components/global/store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
const persistore = persistStore(store);

function App() {
  return (
    <div>
      <PersistGate loading={null} persistor={persistore}>
        <Provider store={store}>
          <RouterProvider router={mainrouter} />
        </Provider>
      </PersistGate>
    </div>
  );
}

export default App;
