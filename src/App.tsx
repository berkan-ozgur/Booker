import { BrowserRouter, useRoutes } from "react-router-dom";
import './App.scss';
import "primeicons/primeicons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";


function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/aboutus", element: <AboutUs /> },
    { path: "/contact", element: <Contact /> }
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
