import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const localToken = localStorage.getItem("@TOKEN");
  const [token, setToken] = useState(localToken ? localToken : "");

  const [user, setUser] = useState(null);

  const userIdLocal = localStorage.getItem("@USERID");
  const [userId, setUserId] = useState(userIdLocal ? userIdLocal : 0);

  const headers = { headers: { Authorization: `Bearer ${token}` } };

  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      if (token && userId) setLoading(true);
      try {
        const { data } = await api.get("/profile", headers);
        setUser(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const userRegister = async (payLoad) => {
    try {
      await api.post("/users", payLoad);
      toast.success("Conta criada com sucesso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/");
    } catch (error) {
      toast.error("Ops, algo deu errado", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.log(error);
    }
  };

  const userLogin = async (payLoad) => {
    try {
      const {
        data: { token, user },
      } = await api.post("/sessions", payLoad);

      setToken(token);
      localStorage.setItem("@TOKEN", token);

      setUserId(user.id);
      localStorage.setItem("@USERID", user.id);

      setUser(user);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const userLogout = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ user, loading, userRegister, userLogin, userLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
