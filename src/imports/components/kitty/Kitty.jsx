import React, { Component } from 'react';

import './kitty.css';
import { kittyEmoji } from 'emoji-generator';

export default class Kitty extends Component {
  constructor(props) {
    super(props);
    this.id   = this.props.kitty._id;
    this.name = this.props.kitty.name;
  }

  getEmoji() {
    return kittyEmoji.next().value;
  }

  /**
   *
   *
   */
  render() {
    return (
      <figure>
        <img src={`http://thecatapi.com/api/image/get?meow=${this.id}`} />
        <figcaption>
          { this.name } { this.getEmoji() }
        </figcaption>
      </figure>
    )
  }
}
