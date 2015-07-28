try {
  console.log("main, ToBeTested: ", ToBeTested.findOne());
} catch(e) {
  console.error("main, ToBeTested unavailable");
}

try {
  console.log("main, Parent: ", Parent.findOne());
} catch(e) {
  console.error("main, Parent unavailable");
}

try {
  console.log("main, Child: ", Child.findOne());
} catch(e) {
  console.error("main, Child unavailable");
}