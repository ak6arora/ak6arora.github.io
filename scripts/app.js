(function() {
    var app = angular.module("gitSite", ['ngRoute', 'ngAnimate']).run(function($rootScope,$document) {
        $document.ready(function(){
            $rootScope.enabled = true;
        })
        
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

    app.controller('MainController', ['$scope', function($scope) {
        $scope.showNav = false;
        $scope.overlayHide = false;
    }])

    app.controller('NavigationController', ['$scope', '$route', function($scope, $route) {
        $scope.$route = $route;
        $scope.fName = "A";
        $scope.lName = "A";
        $scope.fullLogo = false;
    }]);

    angular.bootstrap(document, ["gitSite"]);

})();
