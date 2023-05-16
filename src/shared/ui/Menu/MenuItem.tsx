import { FC, HTMLAttributes, PropsWithChildren } from "react";
import cn from "classnames";
export type MenuItemProps = HTMLAttributes<HTMLLIElement>;
const MenuItem: FC<PropsWithChildren<MenuItemProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <li
      className={cn(
        className,
        "transition ease-in duration-200 inline-flex gap-2 text-grey-100 font-medium cursor-pointer hover:text-primary-900"
      )}
      {...props}
    >
      {children}
    </li>
  );
};

export default MenuItem;
