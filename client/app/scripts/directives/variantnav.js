'use strict';

/**
 * @ngdoc directive
 * @name clientApp.directive:VariantNav
 * @description
 * # VariantNav
 */
angular.module('clientApp')
  .directive('variantNav', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the VariantNav directive');
      }
    };
  });
