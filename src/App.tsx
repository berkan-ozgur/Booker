import { BrowserRouter, useRoutes } from "react-router-dom";
import './App.scss';
import "primeicons/primeicons.css";
import Home from "./pages/Home";


function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
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
