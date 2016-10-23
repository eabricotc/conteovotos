import { Meteor } from 'meteor/meteor';

import { Regiones } from '../regiones.js';
Meteor.publish('regiones.region', () => {
/*  if (!this.userId) {
    return this.ready();
  }
*/
  return Regiones.find({});
});

Meteor.publish('region.provincias', ( id ) => {
  return Regiones.find({
    _id: id
  });
});
