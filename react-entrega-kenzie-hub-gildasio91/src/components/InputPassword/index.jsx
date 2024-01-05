import { forwardRef, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import styles from "./style.module.scss"

export const InputPassword = forwardRef(({ label, errors, ...rest }, ref) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className={styles.inpt__container}>
      <label>Senha</label>
      <div className={styles.inpt__content}>
        <input type={isHidden ? "text" : "password"} ref={ref} {...rest} />
        <figure onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? <FaRegEye /> : <FaRegEyeSlash />}
        </figure>
      </div>
      {errors ? <p className={styles.paragraph}>{errors.message}</p> : null}
    </div>
  );
});
