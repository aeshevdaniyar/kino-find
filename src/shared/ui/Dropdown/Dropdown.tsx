import { Menu, MenuProps } from "@headlessui/react";
import { FC } from "react";
import DropdownToggle from "./DropdownToggle";
import DropdownMenu from "./DropdownMenu";
import DropdownItem from "./DropdownItem";
export type DropdownProps = MenuProps<"div">;
const Dropdown: FC<DropdownProps> = (props) => {
  return <Menu as="div" {...props} />;
};

export default Object.assign(Dropdown, {
  Toggle: DropdownToggle,
  Menu: DropdownMenu,
  Item: DropdownItem,
});
