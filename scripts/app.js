(function() {
  var app = angular.module("gitSite", ['ngRoute', 'ngAnimate', 'ngProgress'])
    .run(function($rootScope, $document, $window, $route, $location) {
      $document.ready(function() {
        $rootScope.enabled = true;

        function onScroll(e) {
          var routes = ['/home', '/skills', '/projects', '/contact'];
          var r=parseInt($route.current.activetab);
          if ($(window).scrollTop() + $(window).height() >= $(document).height() && e.deltaY > 0) {
            if (r<3)
              r++;
            else
              r=0;
          $location.path(routes[r]);
          $rootScope.$apply();
          }
          else if($(window).scrollTop()==0 && e.deltaY<0){
             if (r>0)
              r--;
            else
              r=3;
          $location.path(routes[r]);
          $rootScope.$apply();
          }
        }
        $window.addEventListener('DOMMouseScroll', function(e) {
          onScroll(e)
        })

        $window.addEventListener('mousewheel', function(e) {
          onScroll(e)
        })
      })



    });

  app.config(function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'pages/home.html',
        activetab: '0'
      })
      .when('/skills', {
        templateUrl: 'pages/skills.html',
        activetab: '1'
      })
      .when('/projects', {
        templateUrl: 'pages/projects.html',
        activetab: '2'
      })
      .when('/contact', {
        templateUrl: 'pages/contact.html',
        activetab: '3'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });


  app.controller('MainController', function($scope, ngProgressFactory,$rootScope,$window) {
    $scope.showNav = false;
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.setColor('#5F9DA1');
    $scope.$on('$routeChangeStart', function(event, next) {
      $scope.progressbar.start();
    })

    $scope.$on('$routeChangeSuccess', function(event, current, previous) {
      $scope.active = current.activetab;
      $scope.progressbar.complete();
    })

  })

  app.controller('NavigationController', function($scope) {
    $scope.fName = "A";
    $scope.lName = "A";
    $scope.fullLogo = false;
  });


  app.animation('.main', function() {
    return {
      enter: function(element, done) {
        var current = $($(element)[0]).siblings().children().data('route') || 0;
        var next = $($(element)[0]).children().data('route');
        var from, to;
        if (current < next) {
          from = '100%';
          to = '0';
        } else {
          from = '-100%';
          to = '0';
        }
        element.css({
            left: from
          })
          .animate({
            left: to,
          }, 500, done);
      },
      leave: function(element, done) {
        var next = $($(element)[0]).siblings().children().data('route') || 0;
        var current = $($(element)[0]).children().data('route');
        var from, to;
        if (current < next) {
          from = '0';
          to = '-100%';
        } else {
          from = '0';
          to = '100%';
        }
        element.css({
            left: from,
          })
          .animate({
            left: to,
          }, 500, done);
      }
    };
  });

  setTimeout(function() {
    angular.bootstrap(document, ["gitSite"]);
  }, 2000)


})();
