import { useContext } from "react";
import { TechCard } from "./TechCard";
import styles from "./style.module.scss";
import { TechContext } from "../../providers/TechContext";

export const TechList = ({setIsOpenEdit}) => {
    const {techList} = useContext(TechContext);
    return (
        <ul className={styles.ul__container}>
            {techList.map((tech) => (
                <TechCard  key={tech.id} tech={tech} setIsOpenEdit={setIsOpenEdit}/>

            ))}
        </ul>
    )
}