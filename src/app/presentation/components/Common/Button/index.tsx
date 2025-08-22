import { JSX } from "react";

interface ButtonProps {
  text: string;
  type?: "submit" | "button";
  color: "primary" | "secondary" | "transparent";
  font_size: "12" | "14" | "16" | "18" | "20" | "24";
  className?: string;
  onClick?: () => void;
}

const Button = ({
  text,
  type,
  color,
  font_size,
  className,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={``}
      type={type}
      onClick={onClick}
      style={{ fontSize: `${font_size}px` }}
    >
      {text}
    </button>
  );
};

export default Button;