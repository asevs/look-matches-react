import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { routes } from 'routes';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import DetailsPage from 'views/DetailsPage';
import RegisterPage from 'views/RegisterPage';
import PlayersPage from 'views/PlayersPage';
import MatchesPage from 'views/MatchesPage';
import LoginPage from 'views/LoginPage';
import MainPage from 'views/MainPage';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} component={MainPage} />
          <Route exact path={routes.login} component={LoginPage} />
          <Route exact path={routes.register} component={RegisterPage} />
          <Route exact path={routes.matches} component={MatchesPage} />
          <Route exact path={routes.match} component={DetailsPage} />
          <Route exact path={routes.players} component={PlayersPage} />
          <Route exact path={routes.player} component={DetailsPage} />

          <Route />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
