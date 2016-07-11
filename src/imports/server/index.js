import { Meteor } from 'meteor/meteor';

import { Kitties } from '../collections';
import './publications';
//import './methods';

Meteor.startup(() => {
  console.log('Meteor server running');

  if (!Kitties.find({}).count()) {
    const mockKitties = [
      { name: 'Miss Kitty Fantastico' },
      { name: 'Lady Layla' },
      { name: 'Princess Petty' },
    ];
    mockKitties.forEach((kitty) => {
      Kitties.insert(kitty);
    });
  }
});
