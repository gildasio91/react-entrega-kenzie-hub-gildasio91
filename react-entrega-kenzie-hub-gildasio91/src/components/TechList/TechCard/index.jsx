import { useContext } from "react";
import styles from "./style.module.scss";
import { MdEdit, MdDelete } from "react-icons/md";
import { TechContext } from "../../../providers/TechContext";


export const TechCard = ({tech}) => {
  const {  deleteTech, setEditingTech,setIsOpenEdit} = useContext(TechContext);
  
  
  return (
    <>
      <li className={styles.li__container}>
        <div className={styles.tech__container}>
          <h3> {tech.title}</h3>
          <p>{tech.status}</p>
        </div>
        <div className={styles.edit__container}>
          <button onClick={() => {setEditingTech(tech), setIsOpenEdit(true)}}>
            <MdEdit />
          </button>
          <button onClick={() => deleteTech(tech)}>
            <MdDelete />
          </button>
        </div>
      </li>
    </>
  );
};
