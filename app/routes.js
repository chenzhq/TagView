/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import FilePage from './components/FilePage';

export default () => (
  <App>
    <Switch>
      <Route path="/" component={FilePage} />
    </Switch>
  </App>
);
