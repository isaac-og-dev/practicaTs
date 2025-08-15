import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import Login from "../pages/login";
import LandingPage from "../pages/landingPage";
import RegisterSuplies from "../pages/suplies/RegisterSuplies";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route element={<PublicRoute />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Rutas privadas */}
        <Route element={<PrivateRoute />}>
          <Route path="/supplies/register" element={<RegisterSuplies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
