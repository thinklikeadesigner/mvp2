import React from 'react';
import { Route, useHistory } from 'react-router-dom';

export default function RedirectRoute({ user }) {
  const history = useHistory();

  // This component is here to help fix and issue where a backend
  // redirect to /profile would get caught by react-router and redirected
  // to /welcome before the App had time to validate the user.

  // Now, the backend will redirect here after auth and, during a momentary
  // blank screen, this component will check for a valid user, then redirect
  // to the protected /profile route when a user is found.

  // This route is only redirected to after successful backend auth. If auth
  // fails on the front end, it will redirect back to /welcome

  React.useEffect(() => {
    // check for populated user object
    if (!!user && !!user.email) {
      // if the user object is populated, redirect to the profile page
      history.push('/profile');
    }
  }, [user]);

  return <Route />;
}
