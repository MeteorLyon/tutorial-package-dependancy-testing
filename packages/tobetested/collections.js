var ToBeTested = new Meteor.Collection(Meteor.settings.config.collections.prefix + "-tobetested");

MyApp.Collections.set('ToBeTested', ToBeTested);
