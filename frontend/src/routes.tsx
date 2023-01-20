/* eslint disable */
import { Outlet, Route, createRoutesFromElements } from 'react-router';

import ErrorPage from './error-page/ErrorPage';
import Home from './home/Home';
import Enumeration from './Enumeration/Enumeration';

import { withMainLayout } from './layout/main/Main';

import Core from "./Enumeration/Core/Core";

export default createRoutesFromElements(
  <Route path="/" element={withMainLayout(<Outlet />)} errorElement={withMainLayout(<ErrorPage />)}>
    <Route index element={<Home />} />
    <Route path="/enumeration" index element={<Enumeration />} />
    <Route path="/enumeration/core" index element={<Core />} />
  </Route>
);
