import { FC, HTMLAttributes, PropsWithChildren } from "react";
import cn from "classnames";
import NavbarStart from "./NavbarStart";
import NavbarCenter from "./NavbarCenter";
import NavbarEnd from "./NavbarEnd";

export type NavbarProps = HTMLAttributes<HTMLDivElement>;
const Navbar: FC<PropsWithChildren<NavbarProps>> = ({
  className,
  children,
  ...props
}) => {
  const navbarClasses = "flex items-center py-4 w-full";
  const classses = cn(navbarClasses, className);
  return (
    <div {...props} role="navigation" aria-label="Navbar" className={classses}>
      {children}
    </div>
  );
};

export default Object.assign(Navbar, {
  Start: NavbarStart,
  Center: NavbarCenter,
  End: NavbarEnd,
});
