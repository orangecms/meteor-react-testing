import { Meteor } from 'meteor/meteor';

import './publications';
import './methods';

import { resetKitties } from '../collections';

Meteor.startup(resetKitties);
