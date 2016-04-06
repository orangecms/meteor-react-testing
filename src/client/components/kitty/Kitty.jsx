import React, { Component } from 'react';

import styles from './kitty.mss';

function *emoji (min, max) {
  let current = min;
  while (true) {
    yield String.fromCodePoint(current);
    current++;
    if (current > max) current = min;
  }
}

const kittyEmoji = emoji(0x1F638, 0x1F640);

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
      <figure className={styles.kitty}>
        <img src={`http://thecatapi.com/api/image/get?meow=${this.id}`} />
        <figcaption>
          { this.name } { this.getEmoji() }
        </figcaption>
      </figure>
    )
  }
}
