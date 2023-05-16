import { FC, HTMLAttributes, PropsWithChildren } from "react";
import cn from "classnames";
import MenuItem from "./MenuItem";
export type MenuProps = HTMLAttributes<HTMLUListElement> & {
  direction?: "vertical" | "horizontal";
};
const Menu: FC<PropsWithChildren<MenuProps>> = ({
  className,
  children,
  direction = "horizontal",
  ...props
}) => {
  return (
    <ul
      className={cn(
        className,
        "flex gap-3",
        direction == "vertical" && "flex-col",
        direction == "horizontal" && "flex-row"
      )}
      {...props}
    >
      {children}
    </ul>
  );
};

export default Object.assign(Menu, {
  Item: MenuItem,
});
