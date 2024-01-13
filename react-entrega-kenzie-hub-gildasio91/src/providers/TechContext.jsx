import { createContext, useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { user, userId,token } = useContext(UserContext);
  const [techList, setTechList] = useState([]);
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const modalRef = useRef(null);
  const modalEditRef = useRef(null);
  const navigate = useNavigate();
  const authHeader = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    const getTechs = async () => {
      try {
        console.log(user);
        const { data } = await api.get(`/users/${userId}`, authHeader);
        console.log(data);
        setTechList(data.techs);
      } catch (error) {
        console.log(error);
      }
    };
    getTechs();
  }, []);

  const createTech = async (formData) => {
    try {
      await api.post("/users/techs", formData, authHeader);
      console.log("criou?");
      setIsOpenCreate(false);

    } catch (error) {
        console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{modalEditRef,
        modalRef,
        techList,
        setIsOpenCreate,
        isOpenCreate,
        isOpenEdit,
        setIsOpenEdit,
        createTech
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
