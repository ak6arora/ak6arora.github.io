(function() {
  var app = angular.module("gitSite", ['ngRoute', 'ngAnimate', 'ngProgress'])
    .run(function($rootScope, $document, $window, $route, $location) {
      $rootScope.$on('$viewContentLoaded', function() {
        $rootScope.enabled = true;
      });

      /*
       *For View change on scrolling
       *
       */
      // function onScroll(e) {
      //   var routes = ['/home', '/skills', '/projects', '/contact'];
      //   var r = parseInt($route.current.activetab);
      //   if ($(window).scrollTop() + $(window).height() >= $(document).height() && e.deltaY > 0) {
      //     if (r < 3)
      //       r++;
      //     else
      //       r = 0;
      //     $location.path(routes[r]);
      //     $rootScope.$apply();
      //   } else if ($(window).scrollTop() == 0 && e.deltaY < 0) {
      //     if (r > 0)
      //       r--;
      //     else
      //       r = 3;
      //     $location.path(routes[r]);
      //     $rootScope.$apply();
      //   }
      // }
      // $window.addEventListener('DOMMouseScroll', function(e) {
      //   onScroll(e)
      // })

      // $window.addEventListener('mousewheel', function(e) {
      //   onScroll(e)
      // })




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
      .when('/exp', {
        templateUrl: 'pages/exp.html',
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


  app.controller('MainController', function($scope, ngProgressFactory, $rootScope, $window) {
    $scope.showNav = false;
    $rootScope.progressbar = ngProgressFactory.createInstance();
    $rootScope.progressbar.setColor('#5F9DA1');

    $scope.$on('$routeChangeStart', function(event, next) {
      $rootScope.progressbar.start();
    })

    $scope.$on('$routeChangeSuccess', function(event, current, previous) {
      $scope.active = current.activetab;
      $rootScope.progressbar.complete();
    })

  })

  app.controller('NavigationController', function($scope) {
    $scope.fName = "A";
    $scope.lName = "A";
    $scope.fullLogo = false;
  });

  app.controller('ContactController', function($scope, $http, $rootScope) {
    $scope.email = {};
    $scope.email.send = function() {
      $rootScope.progressbar.start();
      $http.post('https://ak6arora.herokuapp.com/sendQuery', {
        'name': $scope.name,
        'email': $scope.emailid,
        'message': $scope.message
      }).success(function() {
        $rootScope.progressbar.complete();
        angular.element('form').html('<h3>Thank you for your interest,I will contact you soon</h3>');
      })
    }
  })

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

  app.directive('skillPercent', function() {
    return {
      restrict: "A",
      scope: true,
      link: function(scope, element, attrs) {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.id = 'canvas';
        canvas.width = 200;
        canvas.height = 200;
        element[0].appendChild(canvas);
        ctx.strokeStyle = "#A79E65";
        ctx.beginPath();
        ctx.arc(100, 100, 94, -(Math.PI * 0.5), (2 * Math.PI) * (parseInt(attrs.skillPercent) / 100) - (Math.PI * 0.5));
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.font = "40pt 'Josefin Sans', sans-serif";
        ctx.textAlign = 'center';
        ctx.fillStyle = '#A79E65';
        ctx.fillText(attrs.skillPercent + "%", 100, 120);
      }
    }
  })
})();
