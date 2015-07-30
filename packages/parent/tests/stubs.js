// stubs for Childs and Parent
Child.findOne = function() {
 return {
 "name": "testChildPackage",
 "date": new Date()
 }
};

Parent.findOne = function() {
  return {
    "name": "testParentPackage",
    "date": new Date()
  }
};