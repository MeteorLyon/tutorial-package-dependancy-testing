// stubs for Parent
var Parent = {
  "findOne": function() {
    return {
      "name": "Helena",
      "date": new Date()
    };
  },

  "find": function() {
    return {
      "count": function() {
        return 1;
      }
    }
  }
};

MyApp.Collections.set('Parent', Parent);

console.warn('stubs', MyApp.Collections.get('Parent').findOne().name);