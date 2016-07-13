import { Meteor } from 'meteor/meteor';
import { Kitties } from '../collections';

Meteor.methods({

  'Kitties.add': (name) => Kitties.insert({ name }),

  'Kitties.clear': () => Kitties.remove({}),

});
