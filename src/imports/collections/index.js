import { Mongo } from 'meteor/mongo';

const Kitties = new Mongo.Collection('kitties');

export { Kitties };
