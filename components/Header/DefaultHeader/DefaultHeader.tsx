import React from 'react';
import Sticky from 'react-stickynode';
import TopMenu from '../HeaderMenu/TopMenu/TopMenu';
import MainMenu from '../HeaderMenu/MainMenu/MainMenu';
import AvatarMenu from '../HeaderMenu/AvatarMenu/AvatarMenu';
import {Badge, Logo, SvgIcon, Container,} from '../../ui'
import HeaderWrapper, {
  TopBar,
  MenuRight,
  Navbar,
  StickyNav,
  NavLeft,
  NavRight,
} from './DefaultHeader.styled';
import avatar from '../../../assets/images/avatar.jpg';

const DefaultHeader: React.FC<{}> = () => {

  return (
    <HeaderWrapper className="default">
      <Container>
        <TopBar className="top-bar">
          <Logo
            path="/"
            src={
              <SvgIcon
                src={require('../../../assets/images/logo.svg?include')}
              />
            }
          />
          <MenuRight className="menu-right">
            <TopMenu />
            <AvatarMenu
              name="Odetola Azeez"
              src={require('../../../assets/images/avatar.jpg')}
            />
          </MenuRight>
        </TopBar>
      </Container>

      <Sticky>
        <Navbar className="navbar">
          <Container>
            <StickyNav>
              <NavLeft>
                <Logo
                  path="/"
                  src={
                    <SvgIcon
                      src={require('../../../assets/images/logo.svg?include')}
                    />
                  }
                />
                <MainMenu className="main-nav" />
              </NavLeft>
              <NavRight className="cart-and-avatar">
                <AvatarMenu
                  name="Odetola Azeez"
                  src={require('../../../assets/images/avatar.jpg')}
                />
              </NavRight>
            </StickyNav>
          </Container>
        </Navbar>
      </Sticky>
    </HeaderWrapper>
  );
};

export default DefaultHeader;
