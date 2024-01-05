import { Link } from "react-router-dom";
import { Input } from "../Input";
import styles from "./style.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerPageSchema } from "./registerPage.schemas";

export const RegisterPage = ({ userRegister }) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerPageSchema),
  });

  const onSubmit = async (payLoad) => {
    userRegister(payLoad);
    reset();
  };

  return (
    <div className={styles.body__container}>
      <header>
        <div className={styles.div__header}>
          <h2>Kenzie Hub</h2>
          <Link  className={styles.btn__back} to="/">Voltar</Link>
        </div>
      </header>
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.div__form}>
            <h1>Crie sua Conta</h1>
            <p>Rapido e grátis, vamos nessa</p>
          </div>
          <Input
            placeholder="digite seu nome"
            type="text"
            label="Nome"
            {...register("name")}
            errors={errors.name}
          />
          <Input
            placeholder="digite seu email"
            type="email"
            label="Email"
            {...register("email")}
            errors={errors.email}
          />
          <Input
            placeholder="digite sua senha"
            type="text"
            label="Senha"
            {...register("password")}
            errors={errors.password}
          />
          <Input
            placeholder="confirme sua senha"
            type="password"
            label="Confirmar Senha"
            {...register("passwordConfirm")}
            errors={errors.passwordConfirm}
          />
          <Input
            placeholder="Fale sobre você"
            type="text"
            label="Bio"
            {...register("bio")}
            errors={errors.bio}
          />
          <Input
            placeholder="Opção de contato"
            type="text"
            label="Contato"
            {...register("contact")}
            errors={errors.contact}
          />
          <div className={styles.container__select}>
            <label>Selecionar módulo</label>
            <select className={styles.inpt} {...register("course_module")}>
              <option value={"Primeiro módulo (Introdução ao Frontend)"}>
                Primeiro Módulo
              </option>
              <option value={"Segundo módulo (Frontend Avançado)"}>
                Segundo Módulo
              </option>
              <option value={"Terceiro módulo (Introdução ao Backend)"}>
                Terceiro Módulo
              </option>
              <option value={"Quarto módulo (Backend Avançado)"}>
                Quarto Módulo
              </option>
            </select>
          </div>
          <button className={styles.button__form} type="submit">
            Cadastrar
          </button>
        </form>
      </main>
    </div>
  );
};
