import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import React, { Component, PropTypes } from 'react';

import { Kitties } from '../collections';
import Kitty from './kitty/Kitty.jsx';

// App component - represents the whole app
class App extends Component {
  /**
   *
   *
   */
  renderKitties() {
    return this.props.kitties.map(
      (kitty) => <li><Kitty key={kitty._id} kitty={kitty} /></li>
    );
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Kitty power!</h1>
        </header>

        <ul>
          {this.renderKitties()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  kitties: PropTypes.array.isRequired,
}

export default createContainer(() => {
  Meteor.subscribe('kitties');
  return {
    kitties: Kitties.find({}).fetch(),
  };
}, App);
