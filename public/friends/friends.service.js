(function() {
    'use strict';

    angular
        .module('app')
        .service('friends_service', service);

    function service($http) {
        this.getFriends = function() {
            return $http.get('http://localhost:3000/friends').then(function(response) {
              console.log(response.data);
                return response;
            })
        }

    }

}())
