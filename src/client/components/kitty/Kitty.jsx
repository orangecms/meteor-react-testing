import React, { Component } from 'react';

import styles from './kitty.mss';

export default class Kitty extends Component {
  constructor(props) {
    super(props);
    this.id   = this.props.kitty._id;
    this.name = this.props.kitty.name;
  }

  componentDidMount() {
    new kitty({ target: this.target });
  }

  /**
   *
   *
   */
  render() {
    return (
      <figure className={styles.kitty}>
        <img src={`http://thecatapi.com/api/image/get?meow=${this.id}`} />
        <figcaption>{ this.name }</figcaption>
      </figure>
    )
  }
}
