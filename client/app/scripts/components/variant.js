angular.module('clientApp').component('variant', {
  bindings: {
    test: '<',
    variant: '<',
    view: '<',
    views: '<'
  },
  templateUrl: 'partials/variant.html',
  controller: function() {}
});
