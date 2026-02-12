import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Ninjago from "./pages/Ninjago";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home/> },
    { path: "/ninjago", element: <Ninjago/>},
  ]);

  return routes;
}

export default App;