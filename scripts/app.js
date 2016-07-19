(function() {
    var app = angular.module("gitSite", ['ngAnimate', 'ngRoute']).run(function($rootScope) {
        $rootScope.enabled=true;
    });

    app.config(function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'pages/home.html',
            activetab: 'home'
        })
        .when('/skills', {
            templateUrl: 'pages/skills.html',
            activetab: 'skills'
        })
        .when('/projects', {
            templateUrl: 'pages/projects.html',
            activetab: 'projects'
        })
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            activetab: 'contact'
        })
        .otherwise({
            redirectTo: '/home'
        });
    });

    app.controller('NavigationController', ['$scope','$route', function($scope,$route){
    	$scope.$route=$route;
    	$scope.showNav=false;
    }])

})();
