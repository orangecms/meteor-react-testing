import { Mongo } from 'meteor/mongo';

export const Kitties = new Mongo.Collection('kitties');

/**
 * remove existing kitties and insert dummy data :)
 */
export const resetKitties = () => {
  Kitties.remove({});
  ([
    { name: 'Miss Kitty Fantastico' },
    { name: 'Lady Layla' },
    { name: 'Princess Petty' },
  ]).forEach(k => Kitties.insert(k));
};
