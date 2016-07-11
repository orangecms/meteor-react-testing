import { Meteor } from 'meteor/meteor';
import { Kitties } from '../collections';

Meteor.publish('kitties', () => Kitties.find({}));
