import Header from '../header/Header';
import Footer from '../footer/Footer';
import Auth from '../auth/Auth';
import StartupLanding from '../startup-landing/StartupLanding';
import GlobalStyles from '../../globalStyles';
import { Switch, Route, useHistory } from 'react-router-dom';
import ProtectedRoute from '../protected-route/ProtectedRoute';
import UnprotectedRoute from '../unprotected-route/UnprotectedRoute';
import React from 'react';
import { AppContainer } from './styledApp';
import InvestorFeed from '../investor-feed/InvestorFeed';
import NotFound from '../not-found/NotFound';
import Landing from '../landing/Landing';
import Profile from '../profile/Profile';
import RedirectRoute from '../redirect-route/RedirectRoute';
import api from '../../utils/api';
import EditForm from '../edit-form/EditForm';
import Loader from '../loader/Loader';
import { SizeMe } from 'react-sizeme';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [formFields, setFormFields] = React.useState([]);
  const [user, setUser] = React.useState(null);
  const [editSubmitText, setEditSubmitText] = React.useState('Save edits');
  const history = useHistory();

  React.useEffect(() => {
    setIsLoading(true);
    api
      .validateUser()
      .then((res) => {
        setIsLoading(false);
        return setUser(res.user);
      })
      .catch((error) => {
        setIsLoading(false);
        setUser(null);
      });
  }, []);

  React.useEffect(() => {
    if (!!user) {
      setLoggedIn(true);
    }
  }, [user]);

  React.useEffect(() => {
    if (!!user && !!localStorage.getItem('formFields')) {
      api
        .updateUser(user, localStorage.getItem('formFields'))
        .then((res) => {
          setUser(res.data);
          localStorage.removeItem('formFields');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user, localStorage]);

  const handleLandingFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('formFields', JSON.stringify(formFields));
    history.push(`/signup`);
  };

  const handleEditFormSubmit = (e) => {
    setEditSubmitText('Saving...');
    e.preventDefault();
    api
      .updateUser(user, JSON.stringify(formFields))
      .then((res) => {
        setUser(res.data);
        setEditSubmitText('Saved!');
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteInvestor = () => {
    setIsLoading(true);
    api
      .deleteInvestor(user._id)
      .then((investor) => {
        setUser(null);
        setLoggedIn(false);
        history.push('/');
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <SizeMe>{({ size }) =>
      <AppContainer>
        <GlobalStyles />
        {isLoading && <Loader />}
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Switch>
          <UnprotectedRoute path="/signup" isAuthorized={loggedIn}>
            <Auth
              heading="Sign up to finish creating the form"
              setLoggedIn={setLoggedIn}
              isSignup={true}
            />
            <Footer />
          </UnprotectedRoute>
          <UnprotectedRoute path="/signin" isAuthorized={loggedIn}>
            <Auth heading="Sign in" setLoggedIn={setLoggedIn} isSignup={false} />
            <Footer />
          </UnprotectedRoute>
          <UnprotectedRoute exact path="/welcome" isAuthorized={loggedIn}>
            <Landing
              user={user}
              setFormFields={setFormFields}
              formFields={formFields}
              isVisible={true}
              handleSubmit={handleLandingFormSubmit}
              buttonText={`Finish creating the form ${String.fromCharCode(8594)}`}
              setEditSubmitText={setEditSubmitText}
              appElement={size.width}
            />
            <Footer />
          </UnprotectedRoute>
          <ProtectedRoute exact path="/" isAuthorized={loggedIn}>
            <InvestorFeed user={user} deleteInvestor={handleDeleteInvestor} />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute exact path="/profile" isAuthorized={loggedIn}>
            <Profile
              title={user && `${user.name} ${user.surname}`}
              subtitle="Form link:"
              showDelete={true}
              formPath={user && `form/${user.formUrl}`}
              showBackground={false}
              deleteInvestor={handleDeleteInvestor}
            />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute exact path="/edit" isAuthorized={loggedIn}>
            <EditForm
              user={user}
              setFormFields={setFormFields}
              formFields={formFields}
              isVisible={false}
              handleSubmit={handleEditFormSubmit}
              buttonText={editSubmitText}
              setEditSubmitText={setEditSubmitText}
              appElement={size.width}
            />
            <Footer />
          </ProtectedRoute>
          <Route path="/form/:formUrl">
            <StartupLanding setIsLoading={setIsLoading} />
            <Footer />
          </Route>
          <RedirectRoute exact path="/redirect" user={user} />c
          <Route path="*">
            <NotFound />
            <Footer />
          </Route>
        </Switch>
      </AppContainer>
    }</SizeMe>
  );
}

export default App;
