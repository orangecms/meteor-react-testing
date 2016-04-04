import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from './components/App.jsx';

Meteor.startup(() => {
  const appContainer = document.createElement('div');
  document.body.appendChild(appContainer);
  render(<App />, appContainer);
});
