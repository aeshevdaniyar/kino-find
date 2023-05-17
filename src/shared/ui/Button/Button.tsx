import { FC, ButtonHTMLAttributes, PropsWithChildren } from "react";
import cn from "classnames";
import { twMerge } from "tailwind-merge";
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "link";
  shape?: "circle";
};

const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const {
    children,
    className,
    variant = "default",
    shape,
    ...buttonProps
  } = props;
  const buttonVariant = {
    outline:
      "border-2 border-grey-25 hover:bg-grey-25 hover:text-grey-900 text-grey-25",
    default: "bg-primary-600 hover:bg-primary-900",
    link: "text-grey-100 hover:text-primary-900",
  };
  const buttonShape = {
    circle: "h-10 w-10 rounded-full",
  };
  const defaultButtonClass = cn(
    "inline-flex justify-center items-center text-base transition ease-in duration-200 text-center gap-2 text-white font-medium",
    shape ? buttonShape[shape] : "py-2 px-4 rounded-lg"
  );

  const buttonClass = cn(
    defaultButtonClass,
    {
      [`${buttonVariant[variant]}`]: variant,
    },
    className
  );

  return (
    <button {...buttonProps} className={twMerge(buttonClass)}>
      {children}
    </button>
  );
};

export default Button;
