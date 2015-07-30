setUp = function() {
  _.each([Parent], function(col) {
    col.remove({});
  });
};