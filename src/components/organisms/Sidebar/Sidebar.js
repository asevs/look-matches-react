import React from 'react';
import styled from 'styled-components';
import logoutIcon from 'assets/icons/logout.svg';
import logoIcon from 'assets/icons/logo.svg';
import playerIcon from 'assets/icons/player.svg';
import matchIcon from 'assets/icons/search.svg';
import footballStadiumIcon from 'assets/icons/footballstadium.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import { routes } from 'routes';
import { NavLink } from 'react-router-dom';

const StyledWrapper = styled.nav`
  position: fixed;
  width: 150px;
  height: 100vh;
  background-color: ${({ theme }) => theme.blue};
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const StyledLogoIcon = styled(NavLink)`
  display: block;
  width: 80px;
  height: 100px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 8vh;
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Sidebar = () => (
  <StyledWrapper>
    <StyledLogoIcon as={NavLink} to={routes.home} icon={logoIcon} />
    <StyledLinksList>
      <ButtonIcon as={NavLink} to={routes.matches} icon={matchIcon} activeclass="active" />
      <ButtonIcon as={NavLink} to={routes.players} icon={playerIcon} activeclass="active" />
      <ButtonIcon as={NavLink} to={routes.home} icon={footballStadiumIcon} activeclass="active" />
    </StyledLinksList>
    <StyledLogoutButton as={NavLink} to={routes.login} icon={logoutIcon} />
  </StyledWrapper>
);
export default Sidebar;
