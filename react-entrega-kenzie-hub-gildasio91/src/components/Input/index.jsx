import { forwardRef } from "react";

export const Input = forwardRef(({ label, errors, ...rest }, ref) => {
  return (
    <>
    <label>{label}</label>
      <input ref={ref} {...rest} />
      {errors ? <p>{errors.message}</p> : null}
    </>
  );
});
