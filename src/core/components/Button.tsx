import { clsx } from "clsx";
import { IN_ButtonProps } from "../types/interfaces";

function Button({
  variant = "green",
  size = "large",
  children,
  className,
  ...props
}: IN_ButtonProps) {
  const baseClasses =
    "w-full flex items-center justify-center gap-2 rounded font-medium cursor-pointer border transition-all";

  const sizeClasses = {
    large: "h-14 px-12 py-4 text-base rounded-lg",
    medium: "h-12 px-4 py-3 text-sm rounded-xl",
  };

  const variantClasses = {
    green: "bg-button-green  text-white border-none",
    blue: "bg-button-blue  text-white border-none",
    orange:
      "bg-transparent text-textborder-orange  border border-textborder-orange",
  };

  return (
    <button
      className={clsx(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
