import React from "react";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  theme?: "primary";
};

const Button = ({ children, theme, disabled, ...rest }: ButtonProps) => {
  switch (theme) {
    case "primary":
    default:
      return (
        <button
          {...rest}
          className={
            `bg-blue-500 px-6 py-2 text-white rounded-md ${disabled ? 'bg-gray-500' : ''}`
          }
          disabled={disabled}
        >
          {children}
        </button>
      );
  }
};

export default Button;
