import { Menu, MenuItemProps } from "@headlessui/react";
import { FC } from "react";
export type DropdownItemProps = MenuItemProps<"li">;
const DropdownItem: FC<DropdownItemProps> = (props) => {
  return <Menu.Item as="li" {...props} />;
};

export default DropdownItem;
