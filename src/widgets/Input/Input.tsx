import React from "react";
import { twMerge } from "tailwind-merge";

const Input = (props: any) => {
  const { className, ...rest } = props;
  return (
    <input
      className={twMerge(
        `w-full border my-1 py-2 px-3 rounded-lg outline-none ${className}`
      )}
      {...rest}
    />
  );
};

export default Input;
