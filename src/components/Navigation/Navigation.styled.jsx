import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  &.active {
    text-decoration: underline;
  }
`;

export const HomeLink = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  font-size: 24px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 5px;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ContactsLink = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  font-size: 20px;
`;