import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  background: #738EA5;
  height: 70px;
  margin-top: -70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1164px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MenuIcon = styled.div`
  display: block;
  position: absolute;
  top: -4px;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
  color: #fff;

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const NavMenu = styled.ul`
  display: none;

  @media screen and (min-width: 1200px) {
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(LinkS)`
  font-family: 'Donalia';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 70%;
  margin-top: 10px;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid white;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
  }
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;

  @media screen and (min-width: 768px) {
    
  }
`;
