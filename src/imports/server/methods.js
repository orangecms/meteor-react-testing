import { Meteor } from 'meteor/meteor';
import { Kitties, resetKitties } from '../collections';

Meteor.methods({
  'Kitties.add': (name) => {
    if (typeof name === 'string') {
      return Kitties.insert({ name });
    }
    throw new Meteor.Error('No no, that was bad!');
  },

  'Kitties.clear': resetKitties,
});
