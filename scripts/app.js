(function() {
    var app = angular.module("gitSite", ['ngAnimate', 'ngRoute']).run(function($rootScope) {
        $rootScope.enabled=true;
    });

    app.config(function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'pages/home.html'
        })

        .otherwise({
            redirectTo: '/home'
        });
    });

})();
