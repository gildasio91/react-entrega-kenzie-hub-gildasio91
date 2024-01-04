import { Link } from "react-router-dom";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import styles from "./style.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginPageSchema } from "./loginPage.schemas";

export const LoginPage = ({userLogin}) => {
  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginPageSchema) });

  const onSubmit = async (payLoad) => {
    userLogin(payLoad);
    reset();
  };

  return (
    <>
      <main>
        <h2>kenzie Hub</h2>
        <section>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <Input
              placeholder="Digite seu email"
              {...register("email")}
              errors={errors.email}
            />
            <InputPassword
              placeholder="Digite sua senha"
              {...register("password")}
              errors={errors.password}
            />
            <button className={styles.btn__login} type="submit">
              Entrar
            </button>
            <p>Ainda não possui uma conta?</p>
            <Link className={styles.btn__register} to="/register">
              Cadastre-se
            </Link>
          </form>
        </section>
      </main>
    </>
  );
};
