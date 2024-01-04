import styles from "./style.module.scss";

export const DashboardPage = ({userLogout}) => {
  return (
    <div className={styles.body__container}>
      <header>
        <div>
          <h2>kenzie hub</h2>
          <button onClick={userLogout} type="submit">Sair</button>
        </div>
      </header>
      <section>
        <div>
          <h1>{`Olá, Samuel Leão `}</h1>
          <p>Primeiro módulo Introdução ao FrontEnd</p>
        </div>
      </section>
      <main>
        <div>
          <h2>Que pena! Estamos em desenvolvimento :</h2>
          <h3>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </h3>
        </div>
      </main>
    </div>
  );
};
