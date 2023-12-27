import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import styles from "../Login/style.module.scss";

export const Login = () => {
  return (
    <body>
      <main>
        <h2>kenzie Hub</h2>
        <section>
          <form>
            <h1>Login</h1>
            <Input />
            <InputPassword />
            <button className={styles.btn__login} type="submit">
              Entrar
            </button>
            <p>Ainda não possui uma conta?</p>
            <button className={styles.btn__register} type="submit">
              Cadastre-se
            </button>
          </form>
        </section>
      </main>
    </body>
  );
};
