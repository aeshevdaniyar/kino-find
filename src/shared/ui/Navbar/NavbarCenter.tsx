import { FC, HTMLAttributes, PropsWithChildren } from "react";
import cn from "classnames";
export type NavbarCenterProps = HTMLAttributes<HTMLDivElement>;
const NavbarCenter: FC<PropsWithChildren<NavbarCenterProps>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("shrink-0 items-center", className)} {...props}>
      {children}
    </div>
  );
};

export default NavbarCenter;
