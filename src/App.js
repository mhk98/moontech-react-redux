import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import ProductProvider from "./context/ProductProvider";
import store from "./redux/store";
import routes from "./routes/routes";

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </div>
  );
}

export default App;
