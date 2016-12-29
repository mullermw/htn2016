angular.module('clientApp').component('test', {
  bindings: {
    test: '<'
  },
  templateUrl: 'partials/test.html',
  controller: function() {

  },
  $onChanges: function(changesObj) {
    console.log(changedObj);
  }
});

