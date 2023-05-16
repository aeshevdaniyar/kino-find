import { Menu, Transition, MenuItemsProps } from "@headlessui/react";
import { FC, Fragment } from "react";
import cn from "classnames";
export type DropdownMenuProps = MenuItemsProps<"ul">;
const DropdownMenu: FC<DropdownMenuProps> = ({ className, ...props }) => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items
        {...props}
        className={cn(
          "flex absolute mt-2 right-0 p-8 w-full z-10",
          typeof className == "string" && className
        )}
      />
    </Transition>
  );
};

export default DropdownMenu;
