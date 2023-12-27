import { Input } from "../Input";
import styles from "../Register/style.module.scss";

export const Register = () => {
  return (
    <body>
      <header>
        <h2>Kenzie Hub</h2>
        <button type="submit">Voltar</button>
      </header>
      <main>
        <form>
          <div className={styles.div__form}>
            <h1>Crie sua Conta</h1>
            <p>Rapido e grátis, vamos nessa</p>
          </div>
          <Input
            required
            placeholder="digite seu nome"
            type="text"
            label="Nome"
          />
          <Input
            required
            placeholder="digite seu email"
            type="email"
            label="Email"
          />
          <Input
            required
            placeholder="digite sua senha"
            type="password"
            label="Senha"
          />
          <Input
            required
            placeholder="confirme sua senha"
            type="password"
            label="Confirmar Senha"
          />
          <Input
            required
            placeholder="Fale sobre você"
            type="text"
            label="Bio"
          />
          <Input
            required
            placeholder="Opção de contato"
            type="text"
            label="Contato"
          />
          <div className={styles.container__select}>
            <label>Selecionar módulo</label>
            <select className={styles.inpt}>
              <option>Primeiro Módulo</option>
              <option>Segundo Módulo</option>
              <option>Terceiro Módulo</option>
              <option>Quarto Módulo</option>
              <option>Quinto Módulo</option>
            </select>
          </div>
          <button className={styles.button__form} type="subit">
            Cadastrar
          </button>
        </form>
      </main>
    </body>
  );
};
