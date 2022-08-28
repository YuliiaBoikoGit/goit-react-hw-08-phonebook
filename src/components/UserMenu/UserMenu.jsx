import * as React from 'react';
import { useSelector } from 'react-redux';
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { HomeLink, Container, NavContainer, Link, ContactsLink } from 'components/Navigation/Navigation.styled';
import { useLogoutMutation, useCurrentUserQuery } from 'redux/authApi';

export default function UserMenu() {
  const { token } = useSelector((state) => state.user);
  const { data } = useCurrentUserQuery(undefined, {
    skip: !token,
  });
  const [logout] = useLogoutMutation();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <AppBar position="static">
        <Container>
          <div>
            <HomeLink to="/">Phonebook</HomeLink>
            {token && <ContactsLink to="/contacts">Contacts</ContactsLink>}
          </div>
          <NavContainer>
            {token ?
                    <>
                      {data && <Typography variant="h7" component="div">{data.email}</Typography>}
                      <Button color="inherit" type="button" onClick={handleLogout}>Logout</Button>
                    </>
                  : <>
                      <Link to="/login">Login</Link>
                      <Link to="/register">Registration</Link>
                    </>}
          </NavContainer>
        </Container>
      </AppBar>

      <Suspense fallback={<p>loading...</p>}>
        <Outlet />
      </Suspense>
    </>  
  );
}