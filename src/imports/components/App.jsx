import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import React, { Component, PropTypes } from 'react';

import { Kitties } from '../collections';
import Kitty from './kitty/Kitty.jsx';

// App component - represents the whole app
class App extends Component {
  constructor() {
    super();
    this.addKitty = this.addKitty.bind(this);
  }

  addKitty() {
    Meteor.call('Kitties.add', this.refs.kittyName.value);
  }

  clearKitties() {
    Meteor.call('Kitties.clear');
  }

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
          <form onSubmit={this.addKitty}>
            <input type="text" ref="kittyName" />
            <button type="submit">kitty++</button>
          </form>
          <button onClick={this.clearKitties}>reset</button>
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
