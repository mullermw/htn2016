'use strict';
angular.module('clientApp').component('test', {
  bindings: {
    test: '<'
  },
  templateUrl: 'partials/test.html',
  controller: function() {

  },
  $onChanges: function(changedObj) {
    console.log(changedObj);
  }
});

