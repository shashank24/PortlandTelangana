!function(){"use strict";function a(a,b){a.when("/",{templateUrl:"/Views/list.html",controller:"MoviesListController"}).when("/movies/add",{templateUrl:"/Views/add.html",controller:"MoviesAddController"}).when("/movies/edit/:id",{templateUrl:"/Views/edit.html",controller:"MoviesEditController"}).when("/movies/delete/:id",{templateUrl:"/Views/delete.html",controller:"MoviesDeleteController"}),b.html5Mode(!0)}a.$inject=["$routeProvider","$locationProvider"],angular.module("moviesApp",["ngRoute","moviesServices"]).config(a)}(),function(){"use strict";function a(a,b){a.movies=b.query()}angular.module("moviesApp").controller("moviesController",["$scope","Movies",a])}(),function(){"use strict";angular.module("moviesServices",["ngResource"]);angular.module("moviesApp").factory("Movies",["$resource",function(a){return a("/api/movies/",{},{query:{method:"GET",params:{},isArray:!0}})}])}();