import { Meteor } from 'meteor/meteor';

import { Kitties } from '../collections';
import './publications';
import './methods';

/**
 * remove existing kitties and insert mock data :)
 */
const mockKitties = () => {
  Kitties.remove({});
  ([
    { name: 'Miss Kitty Fantastico' },
    { name: 'Lady Layla' },
    { name: 'Princess Petty' },
  ]).forEach((kitty) => Kitties.insert(kitty));
};

Meteor.startup(() => {
  console.log('Meteor server running');
  Kitties.find({}).count() || mockKitties();
});
