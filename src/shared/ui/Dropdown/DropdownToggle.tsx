import { Menu, MenuButtonProps } from "@headlessui/react";
import { FC } from "react";
import cn from "classnames";
export type DropdownToggleProps = MenuButtonProps<"button">;
const DropdownToggle: FC<DropdownToggleProps> = ({ className, ...props }) => {
  return (
    <Menu.Button
      className={cn(
        "inline-flex items-center justify-center gap-1 text-grey-25 font-semibold hover:text-primary-600",
        typeof className == "string" && className
      )}
      {...props}
    />
  );
};

export default DropdownToggle;
