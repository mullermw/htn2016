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
      templateUrl: '/partials/variantnav.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
          scope.views = [
	      'Assessment',
	      'Detail',
	      'Lab Observations',
	      'Effect on Protein',
	      'Treatments',
	      'Reported Cases',
	      'Somatic Frequency',
	      'Other Labs',
	      'Population Genetics',
	      'Predictions',
	      'Pathways',
	      'Genome'
	  ].map(function(name) {
	      return {
		  href: '#' + name.toLowerCase(),
		  name: name
	      }
	  });
      }
    };
  });
