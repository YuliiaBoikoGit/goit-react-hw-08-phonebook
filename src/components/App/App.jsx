import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from "@mui/material";
import UserMenu from 'components/UserMenu/UserMenu';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import Contacts from 'pages/Contacts';

const Login = lazy(() =>
  import('pages/SignIn' /* webpackChunkName: "login" */)
);
const SignUp = lazy(() =>
  import('pages/Registration' /* webpackChunkName: "registration" */)
);
const Home = lazy(() =>
  import('pages/Home' /* webpackChunkName: "home" */)
);

export const App = () => {
  return (
      <Container>
        <Routes>
          <Route path="/" element={<UserMenu />}>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<SignUp />} />
          </Route>

          <Route path="/" element={<PrivateRoute />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </Container>
    );
};
