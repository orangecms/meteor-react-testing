import React, { Component } from 'react';

import Kitty from './kitty/Kitty.jsx';

// App component - represents the whole app
export default class App extends Component {
  /**
   *
   *
   */
  getKitties() {
    return [
      { _id: 1, name: 'Miss Kitty Fantastico' },
      { _id: 2, name: 'Lady Layla' },
      { _id: 3, name: 'Princess Petty' },
    ];
  }

  /**
   *
   *
   */
  renderKitties() {
    return this.getKitties().map((kitty) => (
      <li>
        <Kitty key={kitty._id} kitty={kitty} />
      </li>
    ));
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
