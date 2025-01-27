import React from "react";

interface ButtonProps {
  style?: string;
  label?: string;
  onClick?: (event: any) => void;
  type?: "submit" | "button" | "reset" | undefined;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  style,
  label,
  type,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={`${style} text-white px-4 py-2 rounded-lg`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
