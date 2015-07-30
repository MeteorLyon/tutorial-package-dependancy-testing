var Collections = function () {
  var storage = [];

  return {
    set: function(key, col) {
      storage[key] = col;

      return this;
    },
    get: function(key) {
      if (_.has(key, storage)) throw new Meteor.Error(1, 'unknown collection ' + key);

      return storage[key];
    }
  }
}

MyApp = {
  Collections: new Collections()
};