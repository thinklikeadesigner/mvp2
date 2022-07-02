import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function ProtectedRoute({ isAuthorized, children }) {
  return <Route>{isAuthorized ? children : <Redirect to="/welcome" />}</Route>;
}
