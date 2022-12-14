import React from 'react';
import { ActiveLink } from "../../../ui";
import Menu, { MenuItem, MenuLink } from './MainMenu.styled';

const menuItems = [
  {
    id: 1,
    label: 'Overview',
    path: '/',
  },
  {
    id: 2,
    label: 'Incidents',
    path: '/incidents',
  },
  {
    id: 3,
    label: 'Customers',
    path: '/customers',
  },
  {
    id: 4,
    label: 'Billing',
    path: '/billing',
  },
  {
    id: 5,
    label: 'Settings',
    path: '/settings',
  },
];

type MenuProps = {
  className?: string;
  onClick?: () => void;
};

const MainMenu = ({ className, onClick }: MenuProps) => {
  return (
    <Menu className={className}>
      {menuItems.map(item => (
        <MenuItem key={`top-menu--item${item.id}`} onClick={onClick}>
          <ActiveLink activeClassName="active" href={item.path}>
            <MenuLink>{item.label}</MenuLink>
          </ActiveLink>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default MainMenu;
