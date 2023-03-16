import AllRoutes from "./Router/Routes";
import { useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  const route = useLocation().pathname;
  return (
    <div className="App">
      {route === "/" || route === "/add" || route === "/update" ? <Navbar /> : null}
      <AllRoutes />
    </div>
  );
}

export default App;
