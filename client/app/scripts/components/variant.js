angular.module('clientApp').component('variant', {
  bindings: {
    test: '<',
    variant: '<',
    views: '<'
  },
  templateUrl: 'partials/variant.html',
  controller: function() {}
});
