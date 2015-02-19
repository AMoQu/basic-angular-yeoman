'use strict';

var AboutCtrl = function ($scope) {
    var self = this;

    self.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
};

/**
 * @ngdoc function
 * @name yeomanAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanAngularApp
 */
angular.module('yeomanAngularApp')
  .controller('AboutCtrl', AboutCtrl);
