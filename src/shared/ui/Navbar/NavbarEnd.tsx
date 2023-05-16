import { FC, HTMLAttributes, PropsWithChildren } from "react";
import cn from "classnames";
export type NavbarEndProps = HTMLAttributes<HTMLDivElement>;
const NavbarEnd: FC<PropsWithChildren<NavbarEndProps>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("inline-flex w-1/2 justify-end items-center", className)} {...props}>
      {children}
    </div>
  );
};

export default NavbarEnd;
