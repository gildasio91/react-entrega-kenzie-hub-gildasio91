import { useForm } from "react-hook-form";
import { Input } from "../Input";
import styles from "./style.module.scss";
import { useEffect } from "react";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";

export const EditTechModal = () => {
  const { modalEditRef,  setIsOpenEdit, updateTech, editingTech, setEditingTech } =
    useContext(TechContext);

  const { handleSubmit, register } = useForm({
    values: { status: editingTech.status },
  });

  useEffect(() => {
    const handleOutclick = (event) => {
      if (!modalEditRef.current?.contains(event.target)) {
        setIsOpenEdit(false);
      }
    };
    window.addEventListener("mousedown", handleOutclick);
    return () => {
      window.removeEventListener("mousedown", handleOutclick);
    };
  }, []);

  const submit = (formData) => {
    updateTech(formData);
  };

  return (
    <div className={styles.modalOverlay}>
      <form
        onSubmit={handleSubmit(submit)}
        ref={modalEditRef}
        className={styles.modalBox}
      >
        <div className={styles.modal__header}>
          <p>Tecnologia detalhes</p>
          <button onClick={() => setEditingTech(null)}>X</button>
        </div>
        <div className={styles.modal__content}>
          <Input
            label="Nome do projeto"
            placeholder={editingTech.name}
            {...register("name")}
          />
          <label className={styles.label}>Status</label>
          <select className={styles.inpt} {...register("status")}>
            <option value={"iniciante"}>iniciante</option>
            <option value={"medio"}>médio</option>
            <option value={"avancado"}>avançado</option>
          </select>
          <button className={styles.button__form} type="submit">
            Salvar alterações
          </button>
        </div>
      </form>
    </div>
  );
};
