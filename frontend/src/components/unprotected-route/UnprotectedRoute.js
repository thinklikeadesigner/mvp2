import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function UnprotectedRoute({ isAuthorized, children }) {
  return <Route>{!isAuthorized ? children : <Redirect to="/" />}</Route>;
}
