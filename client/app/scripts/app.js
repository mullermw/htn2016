'use strict';
var fakeData = {
  tests: [
    {
      id: 0,
      name: 'Test 0',
      variants: [
        {
          id: 0,
          name: 'Variant 0'
        }
      ]
    }
  ]
};
/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router',
    'ncy-angular-breadcrumb'
  ]).
  config(function ($stateProvider) {
	  $stateProvider.state({
      name: 'home',
      url: '/',
      templateUrl: 'partials/home.html',
      ncyBreadcrumb: {
        label: 'Home'
      }
    });
    $stateProvider.state({
      name: 'tests',
      url: '/tests',
      component: 'tests',
      ncyBreadcrumb: {
        label: 'Tests',
        parent: 'home'
      },
      resolve: {
        tests: function() {
          return fakeData.tests;
        }
      }
    });
    $stateProvider.state({
      name: 'test',
      url: '/test/{testId}',
      component: 'test',
      ncyBreadcrumb: {
        label: '{{$ctrl.test.name}}',
        parent: 'tests'
      },
      resolve: {
        test: function($transition$) {
          var params = $transition$.params();
          return fakeData.tests.find(function(test) {
            return test.id == params.testId;
          });
        }
      }
    });
    $stateProvider.state({
      name: 'test.variants',
      url: '/variants',
      component: 'variants',
      ncyBreadcrumb: {
        label: 'Variants',
        parent: 'test'
      },
      resolve: {
        test: function(test) {
          return test;
        },
        variants: function(test) {
          return test.variants;
        }
      }
    });
    $stateProvider.state({
      name: 'test.variant',
      url: '/variant/{variantId}',
      component: 'variant',
      ncyBreadcrumb: {
        label: '{{$ctrl.variant.name}}',
        parent: 'test.variants'
      },
      resolve: {
        test: function(test) {
          return test;
        },
        variant: function(test, $stateParams) {
          return test.variants.find(function(variant) {
            return variant.id == $stateParams.variantId;
          });
        },
        views: function() {
          return [
            'test.variant.assessment'
          ]
        }
      }
    });
    $stateProvider.state({
      name: 'test.variant.assessment',
      url: '/assessment',
      component: 'assessment',
      ncyBreadcrumb: {
        label: 'Assessment'
      },
      resolve: {
        variant: function(variant) {
          return variant;
        }
      }
    });
    $stateProvider.state({
      name: 'about',
      url: '/about',
      templateUrl: 'partials/about.html',
      ncyBreadcrumb: {
        label: 'About',
        parent: 'home'
      }
    });
  });
