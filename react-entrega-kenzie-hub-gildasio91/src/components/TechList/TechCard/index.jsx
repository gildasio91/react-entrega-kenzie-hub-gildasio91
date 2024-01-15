import { useContext } from "react";
import styles from "./style.module.scss";
import { MdOutlineModeEdit} from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { TechContext } from "../../../providers/TechContext";


export const TechCard = ({tech}) => {
  const {  deleteTech, setEditingTech} = useContext(TechContext);
  
  
  return (
    <>
      <li className={styles.li__container}>
        <div className={styles.tech__container}>
          <h3> {tech.title}</h3>
          <p>{tech.status}</p>
        </div>
        <div className={styles.edit__container}>
          <button onClick={() => {setEditingTech(tech), console.log(tech)} }>
          <MdOutlineModeEdit />
          </button>
          <button onClick={() => deleteTech(tech)}>
          <FaRegTrashAlt />
          </button>
        </div>
      </li>
    </>
  );
};
