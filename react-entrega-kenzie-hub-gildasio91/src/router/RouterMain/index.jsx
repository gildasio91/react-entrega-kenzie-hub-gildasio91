import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../../components/Login";
import { RegisterPage } from "../../components/RegisterPage";
import { DashboardPage } from "../../components/DashboardPage";
import { PrivateRoutes } from "../PrivateRoutes";
import { PublicRoutes } from "../PublicRoutes";

export const RouterMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};
