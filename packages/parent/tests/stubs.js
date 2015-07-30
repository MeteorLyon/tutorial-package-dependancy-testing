// stubs for Parent
var Parent = {
  "findOne": function() {
    return {
      "name": "david",
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

var ToBeTested = {
  "findOne": function() {
    return {
      "name": "jack",
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

MyApp.Collections.set('ToBeTested', ToBeTested);