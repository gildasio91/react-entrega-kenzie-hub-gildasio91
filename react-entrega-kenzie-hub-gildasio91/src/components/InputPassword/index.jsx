import { forwardRef, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import styles from "../InputPassword/style.module.scss"

export const InputPassword = forwardRef(({ label, errors, ...rest }, ref) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <label>{label} senha</label>
      <div className={styles.inpt__container}>
        <input className={styles.inpt__content} type={isHidden ? "text" : "password"} ref={ref} {...rest} />
        <button onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? <FaRegEye /> : <FaRegEyeSlash />}
        </button>
      </div>
      {errors ? <p>{errors.message}</p> : null}
    </>
  );
});
