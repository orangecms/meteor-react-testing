import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/components/App.jsx';

Meteor.startup(() => {
  const appContainer = document.getElementById('app');
  render(<App />, appContainer);
});
