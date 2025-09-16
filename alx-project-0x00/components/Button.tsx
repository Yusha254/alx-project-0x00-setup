// components/Button.tsx
import React from "react";
import { ButtonProps, ButtonSize } from "@/interfaces";

const sizeClasses: Record<ButtonSize, string> = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  styles = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`font-medium ${sizeClasses[size]} ${shape} ${styles} hover:opacity-90 transition`}
    >
      {title}
    </button>
  );
};

export default Button;
