import { forwardRef, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

export const InputPassword = forwardRef(({ label, errors, ...rest }, ref) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <label>{label}</label>
      <div>
        <input type={isHidden ? "text" : "password"} ref={ref} {...rest} />
        <button onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? <FaRegEye /> : <FaRegEyeSlash />}
        </button>
      </div>
      {errors ? <p>{errors.message}</p> : null}
    </>
  );
});
