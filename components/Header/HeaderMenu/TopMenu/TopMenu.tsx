import React from "react";
import Link from "next/link";
import Menu, { MenuItem, MenuLink } from "./TopMenu.style";

const menuItems: any[] = [
  {
    id: 1,
    label: "About",
    path: "https://sety.io/",
  },
  {
    id: 2,
    label: "Documentation",
    path: "https://documenter.getpostman.com/view/17334977/UVypzxYT#6863e612-eeef-44fb-aa42-7844a4d3c607",
  },
];

type MenuProps = {
  className?: string;
  onClick?: () => void;
};

const TopMenu = ({ className, onClick }: MenuProps) => {
  return (
    <Menu className={className}>
      {menuItems.map((item) => (
        <MenuItem key={`top-menu--item${item.id}`} onClick={onClick}>
          <Link href={item.path}>
            <MenuLink>{item.label}</MenuLink>
          </Link>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default TopMenu;
