'use strict';

/**
 * @ngdoc overview
 * @name yeomanAngularApp
 * @description
 * # yeomanAngularApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',

    "com.2fdevs.videogular",
    "com.2fdevs.videogular.plugins.controls"
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
