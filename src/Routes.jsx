import {
  Route, Routes as Switch,
} from 'react-router-dom';
import React from 'react';
import HomePage from './pages/homepage';
import Login from './pages/login';
import Register from './pages/register';
import Plans from './pages/plans';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/plans" element={<Plans />} />
    </Switch>    
  );
}
