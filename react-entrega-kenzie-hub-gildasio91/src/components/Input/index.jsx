import { forwardRef } from "react";
import styles from "../Input/style.module.scss";

export const Input = forwardRef(({ label, errors, ...rest }, ref) => {
  return (
    <div className={styles.inpt__container}>
      <label>{label}</label>
      <input className={styles.inpt} ref={ref} {...rest} />
      {errors ? <p>{errors.message}</p> : null}
    </div>
  );
});
