import styles from "./style.module.scss";
import Logo from "../../assets/Logo.svg";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const DashboardPage = () => {
  const { userLogout, user } = useContext(UserContext);

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
            <h2>Que pena! Estamos em desenvolvimento :</h2>
            <h3>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </h3>
          </div>
        </main>
      </div>
    </div>
  );
};
