(function(){

    'use strict';

    var AboutCtrl = function ($scope, $sce, SpotifyService) {
        var self = this;

        self.SpotifyService = SpotifyService;

        self.audio = new Audio();

        self.config = {
            sources: [
                {
                    src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/audios/videogular.mp3"),
                    type: "audio/mpeg"
                },
                {
                    src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/audios/videogular.ogg"),
                    type: "audio/ogg"
                }
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

        self.playSpotifyTrack();
    };

    AboutCtrl.prototype.playSpotifyTrack = function() {
        var self = this;

        var query = 'If Not Now, When?';

        self.SpotifyService.getTracks(query).then(
            function onSuccess(response){
                console.log(response);
                var track = response.tracks.items[0];
                self.audio.src = track.preview_url;
                self.audio.play();
            },
            function onError(reason){
                console.log(reason);
            }
        );
    };

    /**
     * @ngdoc function
     * @name yeomanAngularApp.controller:AboutCtrl
     * @description
     * # AboutCtrl
     * Controller of the yeomanAngularApp.controllers
     */
    angular.module('yeomanAngularApp')
      .controller('AboutCtrl', AboutCtrl);

})();
