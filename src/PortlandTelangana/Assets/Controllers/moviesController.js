(function () {
    'use strict';

    angular
        .module('moviesApp')
        .controller('moviesController', ['$scope', 'Movies',moviesController]);

    //moviesController.$inject = ['$scope', 'Movies'];

    function moviesController($scope, Movies) {
        $scope.movies = Movies.query();
        var vm = this;
        vm.getStudent = "I am awesome";
    }

})();
