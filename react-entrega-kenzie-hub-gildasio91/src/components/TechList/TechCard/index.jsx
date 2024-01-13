import { useContext } from "react";
import styles from "./style.module.scss";
import { MdEdit, MdDelete } from "react-icons/md";
import { TechContext } from "../../../providers/TechContext";


export const TechCard = ({tech}) => {
  const { setIsOpenEdit } = useContext(TechContext);
  
  return (
    <>
      <li className={styles.li__container}>
        <div className={styles.tech__container}>
          <h3> {tech.title}</h3>
          <p>{tech.status}</p>
        </div>
        <div className={styles.edit__container}>
          <button onClick={() => setIsOpenEdit(true)}>
            <MdEdit />
          </button>
          <button>
            <MdDelete />
          </button>
        </div>
      </li>
    </>
  );
};
