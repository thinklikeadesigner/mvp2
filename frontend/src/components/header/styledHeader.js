import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import menu from '../../images/menu-purple.svg';
import close from '../../images/close-purple.svg';

export const Wrapper = styled.header`
  width: 100%;
  padding: ${(props) => (props.center === true ? '12px 20px 12px 20px' : '12px 40px 12px 20px')};
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: flex;
  justify-content: ${(props) => (props.center === true ? 'center' : 'space-between')};
  align-items: center;
  box-shadow: 0px -4px 4px 0px rgba(108, 108, 108, 0.25) inset,
    -1px -3px 4px 0px rgba(255, 255, 255, 0.75) inset;

  @media (max-width: 480px) {
    padding: 12px 16px;
  }
  @media (max-width: 374px) {
    flex-direction: column;
    align-items: ${(props) => (props.center === true ? 'center' : 'stretch')};
    padding: 12px 10px;
    width: 96.25%;
    position: absolute;
    top: 12px;
    left: 6px;
    z-index: 1;
    background-color: rgba(255, 255, 255, 1);
  }
`;

export const CompanyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
`;

export const MenuBtn = styled.button`
  display: none;
  @media (max-width: 374px) {
    display: block;
    background: center / contain no-repeat url(${menu});
    border: none;
    cursor: pointer;
    width: 24px;
    height: 12px;
    margin-right: 14px;
    z-index: 1;
  }
`;

export const CloseBtn = styled(MenuBtn)`
  background: center / contain no-repeat url(${close});
  width: 18.39px;
  height: 18.39px;
  margin-right: 16.8px;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;
  margin-right: ${(props) => (props.center === true ? '0' : '16px')};
  cursor: pointer;
  transition: opacity 0.3s ease;

  @media (max-width: 480px) {
    margin-right: ${(props) => (props.center === true ? '0' : '10px')};
  }
`;

export const Nav = styled.nav`
  padding: 0;
  list-style: none;
`;

export const NavList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
  display: flex;
  align-items: center;
  max-height: ${(props) => (props.isOpen ? '138px' : '0px')};

  @media (max-width: 374px) {
    flex-direction: column;
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    visibility: ${(props) => (props.isOpen ? 'visibile' : 'hidden')};
    transition: max-height 0.5s ease, opacity 0.5s ease 0.3s;
  }
`;

export const NavItem = styled.li`
  padding: 0;
  list-style: none;
  margin-right: 20px;

  &:last-child {
    margin: 0;
  }

  @media (max-width: 480px) {
    margin-right: 10px;
  }
  @media (max-width: 374px) {
    margin: 0 0 16px 0;

    &:first-child {
      margin-top: 28px;
    }
    &:last-child {
      margin-bottom: 18px;
    }
  }
`;

export const NavLink = styled(Link)`
  padding: 0;
  display: inline-block;
  list-style: none;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: #000;
  text-decoration: none;
  transition: color 0.15s ease;
  &:hover {
    color: rgba(112, 0, 255, 1);
    text-decoration: none;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    font-style: normal;
  }
`;

export const NavButton = styled.div`
  padding: 0;
  list-style: none;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: #000;
  text-decoration: none;
  transition: color 0.15s ease;
  cursor: pointer;
  &:hover {
    color: rgba(112, 0, 255, 1);
    text-decoration: none;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    font-style: normal;
  }
`;

export const Company = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

export const Name = styled.p`
  color: rgba(112, 0, 255, 1);
  font-family: 'Inter', sans-serif;
  transition: opacity 0.3s ease;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin: 0;
  text-decoration: none;

  @media (max-width: 480px) {
    font-size: 14px;
    font-style: normal;
  }
`;
