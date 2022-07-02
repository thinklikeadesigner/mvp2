import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.png';
import {
  Wrapper,
  CompanyWrapper,
  MenuBtn,
  CloseBtn,
  Company,
  Image,
  Name,
  Nav,
  NavList,
  NavItem,
  NavLink,
  NavButton,
} from './styledHeader';

export default function Header({ loggedIn }) {
  const location = useLocation().pathname.substring(1);
  const showNavPaths = ['welcome', 'profile', 'edit', 'signin', 'signup', 'signedup', ''];
  const [isOpen, setIsOpen] = React.useState(false);

  const handleBtnClick = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  function handleSignout() {
    window.open(`${process.env.REACT_APP_BACKEND_URL}api/auth/logout`, '_self');
  }

  if (showNavPaths.includes(location)) {
    return (
      <Wrapper center={false} isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <CompanyWrapper isOpen={isOpen}>
          <Company to="/">
            <Image center={false} src={logo} />
            <Name>DotCot</Name>
          </Company>
          {isOpen ? (
            <CloseBtn type="button" onClick={handleBtnClick} />
          ) : (
            <MenuBtn type="button" onClick={handleBtnClick} />
          )}
        </CompanyWrapper>
        <Nav>
          <NavList isOpen={isOpen}>
            {loggedIn ? (
              <>
                <NavItem>
                  <NavLink to="/profile">Profile</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/edit">Edit form</NavLink>
                </NavItem>
                <NavItem>
                  <NavButton onClick={handleSignout}>Sign out</NavButton>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem>
                  <NavLink to="/">Create a form</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/signin">Sign in</NavLink>
                </NavItem>
              </>
            )}
          </NavList>
        </Nav>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper center={true}>
        <Link to="/">
          <Image center={true} src={logo} />
        </Link>
      </Wrapper>
    );
  }
}
