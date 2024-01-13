import styles from "./style.module.scss";
import Logo from "../../assets/Logo.svg";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { TechList } from "../TechList";
import { IoIosAdd } from "react-icons/io";
import { CreateTechModal } from "../CreateTechModal";
import { EditTechModal} from "../EditTechModal";
import { TechContext } from "../../providers/TechContext";

export const DashboardPage = () => {
  const { userLogout, user } = useContext(UserContext);
const {setIsOpenCreate,isOpenCreate,isOpenEdit} = useContext(TechContext);

  return (
    <div className={styles.body__container}>
      <div className={styles.body__content}>
        <header>
          <div>
            <img src={Logo} alt="logo" />
            <button onClick={userLogout} type="submit">
              Sair
            </button>
          </div>
        </header>
        <section>
          <div>
            <h1>Olá, {user?.name}</h1>
            <p>{user?.course_module}</p>
          </div>
        </section>
        <main>
          <div>
            <div className={styles.main__header}>
              <p>Tecnologias</p>
              <button onClick={() => setIsOpenCreate(true)}><IoIosAdd size={30} /></button>
            </div>
            {isOpenCreate ? <CreateTechModal  /> : null}
            <TechList />
            {isOpenEdit ? <EditTechModal /> : null}
          </div>
        </main>
      </div>
    </div>
  );
};
