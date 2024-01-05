import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef(({ label, errors, ...rest }, ref) => {
  return (
    <div className={styles.inpt__container}>
      <label>{label}</label>
      <input className={styles.inpt__content} ref={ref} {...rest} />
      {errors ? <p className={styles.paragraph}>{errors.message}</p> : null}
    </div>
  );
});
