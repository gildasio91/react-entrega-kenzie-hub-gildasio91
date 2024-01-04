import { Route, Routes, useNavigate } from "react-router-dom";
import { LoginPage } from "../../components/Login";
import { RegisterPage } from "../../components/RegisterPage";
import { DashboardPage } from "../../components/DashboardPage";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

export const RouterMain = () => {
  const localToken = localStorage.getItem("@TOKEN");
  const [token, setToken] = useState(localToken ? localToken : "");
  const [user, setUser] = useState(null);

  const headers = { headers: { Authorization: `Bearer ${token}` } };

  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      if (!token) return navigate("/login");

      try {
        const { data } = await api.get("/profile", { ...headers });
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    loadUser();
  }, []);

  const userRegister = async (payLoad) => {
    try {
      await api.post("/users", payLoad);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const userLogin = async (payLoad) => {
    try {
      const {
        data: { token },
      } = await api.post("/sessions", payLoad);
     setToken(token);
     localStorage.setItem("@TOKEN", token);
     navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const userLogout = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("@TOKEN");
    navigate("/login");
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage userLogin={userLogin}/>} />
      <Route path="/register" element={<RegisterPage userRegister={userRegister}/>}  />
      <Route path="/dashboard" element={<DashboardPage userLogout={userLogout} />}/>
    </Routes>
  );
};
