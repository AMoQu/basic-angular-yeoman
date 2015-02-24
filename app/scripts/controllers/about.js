'use strict';

var AboutCtrl = function ($scope, $sce) {
    var self = this;

    self.config = {
                sources: [
              {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/audios/videogular.mp3"), type: "audio/mpeg"},
              {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/audios/videogular.ogg"), type: "audio/ogg"}
          ],
                theme: {
          url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
                }
            };

    self.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
};

AboutCtrl.prototype.$inject = [
    '$scope',
    '$sce',
];

/**
 * @ngdoc function
 * @name yeomanAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanAngularApp
 */
angular.module('yeomanAngularApp')
  .controller('AboutCtrl', AboutCtrl);
