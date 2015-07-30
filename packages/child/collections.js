console.log('child/collections.js');

var Child = new Meteor.Collection(Meteor.settings.config.collections.prefix + '-child');

MyApp.Collections.set('Child', Child);
