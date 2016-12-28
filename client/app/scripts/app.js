'use strict';

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
    'ui.router'
  ]).config(function ($stateProvider) {
	  $stateProvider.state({
      name: 'home',
      url: '/home',
      templateUrl: 'views/home.html'
    });
    $stateProvider.state({
      name: 'tests',
      url: '/tests',
      templateUrl: 'views/tests.html'
    });
    $stateProvider.state({
      name: 'about',
      url: '/about',
      templateUrl: 'views/about.html'
    });
  });
