import { useForm } from "react-hook-form";
import { Input } from "../Input";
import styles from "./style.module.scss";
import { useContext, useEffect } from "react";
import { TechContext } from "../../providers/TechContext";

export const CreateTechModal = () => {
  const { handleSubmit, register, reset } = useForm();

  const { modalRef, createTech, setIsOpenCreate } = useContext(TechContext);

  const onSubmit = async (formData) => {
    createTech(formData);
    reset();
  };

  useEffect(() => {
    console.log(modalRef);
    const handleOutclick = (event) => {
      
      if (!modalRef.current?.contains(event.target)) {
        
        setIsOpenCreate(false);

      }
    };
    window.addEventListener("mousedown", handleOutclick);
    return () => {
      window.removeEventListener("mousedown", handleOutclick);
    };
  }, []);

  return (
    <div className={styles.modalOverlay}>
      <div ref={modalRef} className={styles.modalBox}>
        <div className={styles.modal__header}>
          <p>Cadastrar Tecnologia</p>
          <button onClick={() => setIsOpenCreate(false)}>X</button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.modal__content} role="dialog">
          <Input label="nome" {...register("title")} />
          <label className={styles.label}>Selecionar Status</label>
          <select className={styles.inpt} {...register("status")}>
            <option value={"Iniciante"}>Iniciante</option>
            <option value={"Intermediário"}>Intermediário</option>
            <option value={"Avançado"}>Avançado</option>
          </select>
          <button className={styles.button__form} type="submit">
            Cadastrar Tecnologia
          </button>
        </form>
      </div>
    </div>
  );
};
