import { createBrowserRouter, RouterProvider } from "react-router";
import routesConfig from "./routes";

function App() {
  const routes = createBrowserRouter(routesConfig);

  return <RouterProvider router={routes} />;
}

export default App;
