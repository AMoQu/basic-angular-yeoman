(function(){

    'use strict';

    /**
     * @ngdoc service
     * @name yeomanAngularApp.SpotifyService
     * @description
     * # SpotifyService
     * Service in the yeomanAngularApp.
     */
    angular.module('yeomanAngularApp')
    .service('SpotifyService', function ($q, $http) {

        this.getTracks = function(query) {
            var deferred = $q.defer();

            $http
                .get(
                    'https://api.spotify.com/v1/search',
                    {
                        params:{
                            q: query,
                            type: 'track'
                        }
                    }
                )
                .success(function(data) {
                    deferred.resolve(data);
                })
                .error(function(data) {
                    deferred.reject(data.error);
                })
            ;
            // structure promise
            return deferred.promise;
        };
    });
})();