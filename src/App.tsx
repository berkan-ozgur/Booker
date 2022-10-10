import { BrowserRouter, useRoutes } from "react-router-dom";
import './App.scss';
import "primeicons/primeicons.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";


function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/aboutus", element: <AboutUs /> }
  ]);
  return routes;
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
