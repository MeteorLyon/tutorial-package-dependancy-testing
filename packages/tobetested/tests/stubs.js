// stubs for Childs, Parent and ToBeTested
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

ToBeTested.findOne = function() {
  return {
    "name": "testToBeTestedPackage",
    "date": new Date()
  }
};
