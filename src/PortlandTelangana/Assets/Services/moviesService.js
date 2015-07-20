(function () {
    'use strict';

    var moviesServices = angular.module('moviesServices', ['ngResource']);

    angular
        .module('moviesApp').factory('Movies', ['$resource',
      function ($resource) {
          return $resource('/api/movies/', {}, {
              query: { method: 'GET', params: {}, isArray: true }
          });
      }]);


})();
