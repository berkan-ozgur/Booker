import { BrowserRouter, useRoutes } from "react-router-dom";
import './App.scss';
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/tailwind-light/theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Login from "./pages/Login";


function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/aboutus", element: <AboutUs /> },
    { path: "/contact", element: <Contact /> },
    { path: "/login", element: <Login /> },
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
