import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { MenuIcon, Nav, NavbarContainer, NavItem, NavLink, NavLogo, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import Logo from '../../images/minhduyen-logo.png';

import * as Styled from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
            <Styled.Image src={Logo} alt="logo"/>
          </NavLogo>
            <MenuIcon onClick={toggle}>
              <FaBars />
            </MenuIcon>
            <NavMenu>
              <NavItem>
                <NavLink to='home' smooth={true} duration={500} spy={true} exact='true' offset={-80} >Trang chủ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='celebrate' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Về chúng mình</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='memory' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Câu chuyện</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='moments' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Bộ sưu tập</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='form' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Xác nhận</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='information' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Địa chỉ</NavLink>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
