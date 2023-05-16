import { FC, HTMLAttributes, PropsWithChildren } from "react";
import cn from "classnames";
export type NavbarStartProps = HTMLAttributes<HTMLDivElement>;
const NavbarStart: FC<PropsWithChildren<NavbarStartProps>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("inline-flex w-1/2 justify-start items-center", className)} {...props}>
      {children}
    </div>
  );
};

export default NavbarStart;
