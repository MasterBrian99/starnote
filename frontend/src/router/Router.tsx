import React from 'react';
import { RequireAuth } from 'react-auth-kit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import SignupScreen from '../screens/AuthScreens/SignupScreen';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            path=""
            element={
              <RequireAuth loginPath={'/auth/login'}>
                <MainLayout />
              </RequireAuth>
            }
          ></Route>
        </Route>
        <Route path={'/auth'}>
          <Route path="login" element={<LoginScreen />}></Route>
          <Route path="register" element={<SignupScreen />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
