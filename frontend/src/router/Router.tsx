import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginScreen from '../screens/AuthScreens/LoginScreen';
import SignupScreen from '../screens/AuthScreens/SignupScreen';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/auth'}>
          <Route path="login" element={<LoginScreen />}></Route>
          <Route path="register" element={<SignupScreen />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
